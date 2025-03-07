import { DatePicker, OrgUnitsSelector } from "@eyeseetea/d2-ui-components";
import { Checkbox, FormControlLabel, makeStyles } from "@material-ui/core";
import _ from "lodash";
import moment from "moment";
import React, { useEffect, useMemo, useState } from "react";
import { RelationshipOrgUnitFilter } from "../../../data/Dhis2RelationshipTypes";
import { DataForm } from "../../../domain/entities/DataForm";
import { TemplateType } from "../../../domain/entities/Template";
import { Theme } from "../../../domain/entities/Theme";
import { DownloadTemplateProps } from "../../../domain/usecases/DownloadTemplateUseCase";
import i18n from "../../../locales";
import { PartialBy } from "../../../types/utils";
import { cleanOrgUnitPaths } from "../../../utils/dhis";
import { useAppContext } from "../../contexts/app-context";
import Settings from "../../logic/settings";
import { getTemplateId } from "../../logic/sheetBuilder";
import { Select, SelectOption } from "../select/Select";

type DataSource = Record<string, DataForm[]>;

type PickerUnit = "year" | "month" | "date";
interface PickerFormat {
    unit: PickerUnit;
    views: PickerUnit[];
    format: string;
}

export interface TemplateSelectorState extends DownloadTemplateProps {
    templateType?: TemplateType;
}

export interface TemplateSelectorProps {
    settings: Settings;
    themes: Theme[];
    onChange(state: TemplateSelectorState | null): void;
}

export const TemplateSelector = ({ settings, themes, onChange }: TemplateSelectorProps) => {
    const classes = useStyles();
    const { api, compositionRoot } = useAppContext();

    const [dataSource, setDataSource] = useState<DataSource>();
    const [templates, setTemplates] = useState<{ value: string; label: string }[]>([]);
    const [orgUnitTreeRootIds, setOrgUnitTreeRootIds] = useState<string[]>([]);
    const [orgUnitTreeFilter, setOrgUnitTreeFilter] = useState<string[]>([]);
    const [availableLanguages, setAvailableLanguages] = useState<SelectOption[]>([]);
    const [selectedOrgUnits, setSelectedOrgUnits] = useState<string[]>([]);
    const [datePickerFormat, setDatePickerFormat] = useState<PickerFormat>();
    const [userHasReadAccess, setUserHasReadAccess] = useState<boolean>(false);
    const [filterOrgUnits, setFilterOrgUnits] = useState<boolean>(false);
    const [selectedModel, setSelectedModel] = useState<string>("");
    const [state, setState] = useState<PartialBy<TemplateSelectorState, "type" | "id">>({
        startDate: moment().add("-1", "year").startOf("year"),
        endDate: moment().add("-1", "year").endOf("year"),
        relationshipsOuFilter: "CAPTURE",
        populate: false,
        downloadRelationships: true,
        filterTEIEnrollmentDate: false,
        language: "en",
        settings,
    });

    const models = useMemo(() => {
        return _.compact([
            settings.allModelsEnabled() && {
                value: "all",
                label: i18n.t("All"),
            },
            settings.isModelEnabled("dataSet") && {
                value: "dataSets",
                label: i18n.t("Data Set"),
            },
            settings.isModelEnabled("program") && {
                value: "programs",
                label: i18n.t("Program"),
            },
        ]);
    }, [settings]);

    useEffect(() => {
        compositionRoot.templates.list().then(({ dataSets, programs }) => {
            const dataSource: DataSource = {
                dataSets,
                programs,
                all: _.sortBy([...dataSets, ...programs], ["name"]),
            };

            setDataSource(dataSource);
            const model = models[0]?.value;
            const dataSourceModel = dataSource[model ?? ""];

            if (model && dataSourceModel) {
                setTemplates(modelToSelectOption(dataSourceModel));
                setSelectedModel(model);
            }
        });
    }, [models, compositionRoot]);

    useEffect(() => {
        const { type, id } = state;
        if (type && id) {
            compositionRoot.orgUnits.getRootsByForm(type, id).then(setOrgUnitTreeFilter);
        }
    }, [state, compositionRoot]);

    useEffect(() => {
        compositionRoot.orgUnits.getUserRoots().then(setOrgUnitTreeRootIds);
    }, [compositionRoot]);

    useEffect(() => {
        compositionRoot.languages.list().then(setAvailableLanguages);
    }, [compositionRoot]);

    useEffect(() => {
        const { type, id, ...rest } = state;
        if (type && id) {
            const orgUnits = filterOrgUnits ? cleanOrgUnitPaths(selectedOrgUnits) : [];
            onChange({ type, id, orgUnits, ...rest });
        } else {
            onChange(null);
        }
    }, [state, selectedOrgUnits, filterOrgUnits, orgUnitTreeFilter, onChange]);

    const themeOptions = dataSource ? modelToSelectOption(themes) : [];

    const clearPopulateDates = () => {
        setState(state => ({ ...state, populateStartDate: undefined, populateEndDate: undefined }));
    };

    const onModelChange = ({ value }: SelectOption) => {
        if (!dataSource) return;
        const options = modelToSelectOption(dataSource[value] ?? []);

        setSelectedModel(value);
        setState(state => ({ ...state, type: undefined, id: undefined, populate: false }));
        clearPopulateDates();
        setTemplates(options);
        setSelectedOrgUnits([]);
        setOrgUnitTreeFilter([]);
        setUserHasReadAccess(false);
    };

    const onTemplateChange = ({ value }: SelectOption) => {
        if (dataSource) {
            const {
                periodType,
                type,
                readAccess = false,
            } = dataSource[selectedModel]?.find(({ id }) => id === value) ?? {};
            setUserHasReadAccess(readAccess);

            if (periodType === "Yearly") {
                setDatePickerFormat({ unit: "year", views: ["year"], format: "YYYY" });
            } else if (periodType === "Monthly") {
                setDatePickerFormat({
                    unit: "month",
                    views: ["year", "month"],
                    format: "MMMM YYYY",
                });
            } else {
                setDatePickerFormat(undefined);
            }

            const templateType = getTemplateId(type, value).type as TemplateType;
            setState(state => ({ ...state, id: value, type, templateType, populate: false }));
            clearPopulateDates();
            setSelectedOrgUnits([]);
        }
    };

    const onThemeChange = ({ value }: SelectOption) => {
        setState(state => ({ ...state, theme: value }));
    };

    const onStartDateChange = (field: keyof DownloadTemplateProps, date: Date, clear = false) => {
        const { unit = "date" } = datePickerFormat ?? {};
        const startDate = date ? moment(date).startOf(unit) : undefined;
        setState(state => ({ ...state, [field]: startDate }));
        if (clear) clearPopulateDates();
    };

    const onEndDateChange = (field: keyof DownloadTemplateProps, date: Date, clear = false) => {
        const { unit = "date" } = datePickerFormat ?? {};
        const endDate = date ? moment(date).endOf(unit) : undefined;
        setState(state => ({ ...state, [field]: endDate }));
        if (clear) clearPopulateDates();
    };

    const onCustomFormDateChange = (date: Date) => {
        const { unit = "date" } = datePickerFormat ?? {};
        const startDate = date ? moment(date).startOf(unit) : undefined;
        const endDate = date ? moment(date).endOf(unit) : undefined;
        setState(state => ({ ...state, startDate, endDate }));
    };

    const onOrgUnitChange = (orgUnitPaths: string[]) => {
        setSelectedOrgUnits(orgUnitPaths);
    };

    const onRelationshipsOuFilterChange = (relationshipsOuFilter: RelationshipOrgUnitFilter) => {
        setState(state => ({ ...state, relationshipsOuFilter }));
    };

    const onPopulateChange = (_event: React.ChangeEvent, populate: boolean) => {
        setState(state => ({ ...state, populate }));
    };

    const onDownloadRelationshipsChange = (_event: React.ChangeEvent, downloadRelationships: boolean) => {
        setState(state => ({ ...state, downloadRelationships }));
    };

    const onFilterTEIEnrollmentDateChange = (_event: React.ChangeEvent, filterTEIEnrollmentDate: boolean) => {
        setState(state => ({ ...state, filterTEIEnrollmentDate }));
    };

    const onFilterOrgUnitsChange = (_event: React.ChangeEvent, filterOrgUnits: boolean) => {
        setState(state => ({ ...state, populate: false }));
        clearPopulateDates();
        setFilterOrgUnits(filterOrgUnits);
    };

    const onLanguageChange = ({ value }: SelectOption) => {
        setState(state => ({ ...state, language: value }));
    };

    return (
        <React.Fragment>
            <h3 className={classes.title}>{i18n.t("Template")}</h3>

            <div className={classes.row}>
                <div className={classes.select}>
                    <Select
                        placeholder={i18n.t("Select template to export...")}
                        onChange={onTemplateChange}
                        options={templates}
                        value={state.id ?? ""}
                    />
                </div>

                {models.length > 1 && (
                    <div className={classes.select}>
                        <Select
                            placeholder={i18n.t("Data Model")}
                            onChange={onModelChange}
                            options={models}
                            value={selectedModel}
                        />
                    </div>
                )}
            </div>

            {state.type === "dataSets" && state.templateType === "custom" && (
                <DatePicker
                    className={classes.fullWidth}
                    label={i18n.t("Period")}
                    value={state.startDate ?? null}
                    onChange={(date: Date) => onCustomFormDateChange(date)}
                    maxDate={state.endDate}
                    views={datePickerFormat?.views}
                    format={datePickerFormat?.format ?? "DD/MM/YYYY"}
                    InputLabelProps={{ style: { color: "#494949" } }}
                />
            )}

            {state.type === "dataSets" && state.templateType !== "custom" && (
                <div className={classes.row}>
                    <div className={classes.select}>
                        <DatePicker
                            className={classes.fullWidth}
                            label={i18n.t("Start period")}
                            value={state.startDate ?? null}
                            onChange={(date: Date) => onStartDateChange("startDate", date, true)}
                            maxDate={state.endDate}
                            views={datePickerFormat?.views}
                            format={datePickerFormat?.format ?? "DD/MM/YYYY"}
                            InputLabelProps={{ style: { color: "#494949" } }}
                        />
                    </div>
                    <div className={classes.select}>
                        <DatePicker
                            className={classes.fullWidth}
                            label={i18n.t("End period")}
                            value={state.endDate ?? null}
                            onChange={(date: Date) => onEndDateChange("endDate", date, true)}
                            minDate={state.startDate}
                            views={datePickerFormat?.views}
                            format={datePickerFormat?.format ?? "DD/MM/YYYY"}
                            InputLabelProps={{ style: { color: "#494949" } }}
                        />
                    </div>
                </div>
            )}

            {settings.orgUnitSelection !== "import" && (
                <React.Fragment>
                    <h3>{i18n.t("Organisation units")}</h3>

                    <div>
                        <FormControlLabel
                            control={<Checkbox checked={filterOrgUnits} onChange={onFilterOrgUnitsChange} />}
                            label={
                                state.templateType === "custom"
                                    ? i18n.t("Select organisation unit to populate data")
                                    : i18n.t("Select available organisation units to include in the template")
                            }
                        />
                    </div>

                    {filterOrgUnits &&
                        (!_.isEmpty(orgUnitTreeRootIds) ? (
                            <div className={classes.orgUnitSelector}>
                                <OrgUnitsSelector
                                    api={api}
                                    rootIds={orgUnitTreeRootIds}
                                    selectableIds={orgUnitTreeFilter}
                                    selected={selectedOrgUnits}
                                    onChange={onOrgUnitChange}
                                    fullWidth={false}
                                    height={250}
                                    controls={{
                                        filterByLevel: state.templateType !== "custom",
                                        filterByGroup: state.templateType !== "custom",
                                        selectAll: state.templateType !== "custom",
                                    }}
                                    withElevation={false}
                                    singleSelection={state.templateType === "custom"}
                                    typeInput={state.templateType === "custom" ? "radio" : undefined}
                                />
                            </div>
                        ) : (
                            <div className={classes.orgUnitError}>
                                {i18n.t("User does not have any capture organisations units")}
                            </div>
                        ))}
                </React.Fragment>
            )}

            {state.templateType !== "custom" && <h3>{i18n.t("Advanced template properties")}</h3>}

            {availableLanguages.length > 0 && state.templateType !== "custom" && (
                <div className={classes.row}>
                    <div className={classes.select}>
                        <Select
                            placeholder={i18n.t("Language")}
                            onChange={onLanguageChange}
                            options={availableLanguages}
                            value={state.language ?? ""}
                        />
                    </div>
                </div>
            )}
            {themeOptions.length > 0 && state.templateType !== "custom" && (
                <div className={classes.row}>
                    <div className={classes.select}>
                        <Select
                            placeholder={i18n.t("Theme")}
                            onChange={onThemeChange}
                            options={themeOptions}
                            allowEmpty={true}
                            emptyLabel={i18n.t("<No value>")}
                            value={state.theme ?? ""}
                        />
                    </div>
                </div>
            )}

            {userHasReadAccess && filterOrgUnits && state.templateType !== "custom" && (
                <div>
                    <FormControlLabel
                        className={classes.checkbox}
                        control={<Checkbox checked={state.populate} onChange={onPopulateChange} />}
                        label={i18n.t("Populate template with data")}
                    />
                </div>
            )}

            {state.populate && state.templateType !== "custom" && (
                <>
                    <div>
                        <FormControlLabel
                            className={classes.checkbox}
                            control={
                                <Checkbox
                                    checked={state.filterTEIEnrollmentDate}
                                    onChange={onFilterTEIEnrollmentDateChange}
                                />
                            }
                            label={i18n.t("Also filter TEI and relationships by their enrollment date")}
                        />
                    </div>

                    <div className={classes.row}>
                        <div className={classes.select}>
                            <DatePicker
                                className={classes.fullWidth}
                                label={getPopulateDateLabel(state, "start")}
                                value={state.populateStartDate ?? null}
                                onChange={(date: Date) => onStartDateChange("populateStartDate", date)}
                                minDate={
                                    state.type === "dataSets"
                                        ? state.startDate?.startOf(datePickerFormat?.unit ?? "day")
                                        : undefined
                                }
                                maxDate={moment.min(
                                    _.compact([state.type === "dataSets" && state.endDate, state.populateEndDate])
                                )}
                                views={datePickerFormat?.views}
                                format={datePickerFormat?.format ?? "DD/MM/YYYY"}
                                InputLabelProps={{ style: { color: "#494949" } }}
                            />
                        </div>
                        <div className={classes.select}>
                            <DatePicker
                                className={classes.fullWidth}
                                label={getPopulateDateLabel(state, "end")}
                                value={state.populateEndDate ?? null}
                                onChange={(date: Date) => onEndDateChange("populateEndDate", date)}
                                minDate={moment.max(
                                    _.compact([state.type === "dataSets" && state.startDate, state.populateStartDate])
                                )}
                                maxDate={
                                    state.type === "dataSets"
                                        ? state.endDate?.endOf(datePickerFormat?.unit ?? "day")
                                        : undefined
                                }
                                views={datePickerFormat?.views}
                                format={datePickerFormat?.format ?? "DD/MM/YYYY"}
                                InputLabelProps={{ style: { color: "#494949" } }}
                            />
                        </div>
                    </div>
                </>
            )}

            {state.populate && state.type === "trackerPrograms" && userHasReadAccess && (
                <div>
                    <h4 className={classes.title}>
                        {i18n.t("TEI and relationships enrollment by organisation unit type")}
                    </h4>
                    <div className={classes.row}>
                        <div className={classes.select}>
                            <Select
                                value={state.relationshipsOuFilter}
                                onChange={({ value }) =>
                                    onRelationshipsOuFilterChange(value as RelationshipOrgUnitFilter)
                                }
                                options={[
                                    {
                                        label: i18n.t("Current user organisation units (data capture)"),
                                        value: "CAPTURE",
                                    },
                                    {
                                        label: i18n.t("Selected organisation units with their descendants"),
                                        value: "DESCENDANTS",
                                    },
                                    { label: i18n.t("Only selected organisation units"), value: "SELECTED" },
                                ]}
                            />
                        </div>
                    </div>

                    <div>
                        <FormControlLabel
                            className={classes.checkbox}
                            control={
                                <Checkbox
                                    checked={state.downloadRelationships}
                                    onChange={onDownloadRelationshipsChange}
                                />
                            }
                            label={i18n.t("Include relationships")}
                        />
                    </div>
                </div>
            )}
        </React.Fragment>
    );
};

const useStyles = makeStyles({
    row: {
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "space-around",
        marginRight: "1em",
    },
    title: { marginBottom: 0 },
    select: { flexBasis: "100%", margin: "0.5em", marginLeft: 0, marginTop: "1em" },
    checkbox: { marginTop: "1em" },
    orgUnitSelector: { marginTop: "1em", marginBottom: "2em" },
    fullWidth: { width: "100%" },
    orgUnitError: {
        height: 250,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
});

function modelToSelectOption<T extends { id: string; name: string }>(array: T[]) {
    return (
        array?.map(({ id, name }) => ({
            value: id,
            label: name,
        })) ?? []
    );
}

function getPopulateDateLabel(state: Partial<TemplateSelectorState>, picker: "start" | "end") {
    if (state.type === "trackerPrograms" && state.filterTEIEnrollmentDate && picker === "start") {
        return i18n.t("Start date of Events and TEI enrollments");
    } else if (state.type === "trackerPrograms" && state.filterTEIEnrollmentDate && picker === "end") {
        return i18n.t("End date of Events and TEI enrollments");
    } else if (state.type === "trackerPrograms" && picker === "start") {
        return i18n.t("Start date of Events");
    } else if (state.type === "trackerPrograms" && picker === "end") {
        return i18n.t("End date of Events");
    } else if (picker === "start") {
        return i18n.t("Start date");
    } else if (picker === "end") {
        return i18n.t("End date");
    } else {
        return "Unknown date picker";
    }
}
