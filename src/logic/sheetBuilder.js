import * as Excel from "excel4node";
import { saveAs } from "file-saver";
import _ from "lodash";
import { buildAllPossiblePeriods } from "../utils/periods";
import { baseStyle, createColumn, groupStyle, protectedSheet, transparentFontStyle } from "../utils/excel";
import { getObjectVersion } from "./utils";



export const SheetBuilder = function(builder) {
    this.workbook = new Excel.Workbook();
    this.builder = builder;
    this.validations = new Map();

    this.dataEntrySheet = this.workbook.addWorksheet("Data Entry");
    this.legendSheet = this.workbook.addWorksheet("Legend", protectedSheet);
    this.validationSheet = this.workbook.addWorksheet("Validation", protectedSheet);
    this.metadataSheet = this.workbook.addWorksheet("Metadata", protectedSheet);

    this.fillValidationSheet();
    this.fillMetadataSheet();
    this.fillLegendSheet();
    this.fillDataEntrySheet();
};

SheetBuilder.prototype.fillLegendSheet = function() {
    const { elementMetadata: metadata, rawMetadata } = this.builder;
    const legendSheet = this.legendSheet;

    // Freeze and format column titles
    legendSheet.row(2).freeze();
    legendSheet.column(1).setWidth(50);
    legendSheet.column(2).setWidth(50);
    legendSheet.column(3).setWidth(20);
    legendSheet.column(4).setWidth(20);
    legendSheet.column(5).setWidth(40);

    // Add column titles
    legendSheet
        .cell(1, 1, 2, 1, true)
        .string("Name")
        .style(baseStyle);
    legendSheet
        .cell(1, 2, 2, 2, true)
        .string("Description")
        .style(baseStyle);
    legendSheet
        .cell(1, 3, 2, 3, true)
        .string("Value Type")
        .style(baseStyle);
    legendSheet
        .cell(1, 4, 2, 4, true)
        .string("Option Set")
        .style(baseStyle);
    legendSheet
        .cell(1, 5, 2, 5, true)
        .string("Possible Values")
        .style(baseStyle);

    let rowId = 3;
    _.sortBy(rawMetadata["dataElements"], ["name"]).forEach(value => {
        const name = value.formName ? value.formName : value.name;
        const optionSet = value.optionSet ? metadata.get(value.optionSet.id) : null;
        const options =
            optionSet && optionSet.options
                ? optionSet.options.map(option => metadata.get(option.id).name).join(", ")
                : null;

        legendSheet.cell(rowId, 1).string(name ? name : "");
        legendSheet.cell(rowId, 2).string(value.description ? value.description : "");
        legendSheet.cell(rowId, 3).string(value.valueType ? value.valueType : "");
        legendSheet.cell(rowId, 4).string(optionSet ? optionSet.name : "");
        legendSheet.cell(rowId, 5).string(options ? options : "");

        rowId++;
    });
};

SheetBuilder.prototype.fillValidationSheet = function() {
    const {
        organisationUnits,
        element,
        rawMetadata,
        elementMetadata,
        startYear,
        endYear,
    } = this.builder;
    const title = element.displayName;

    const validationSheet = this.validationSheet;

    // Freeze and format column titles
    validationSheet.row(2).freeze();

    // Add column titles
    let rowId = 1;
    let columnId = 1;
    validationSheet
        .cell(rowId, columnId, rowId, 3, true)
        .string(title)
        .style(baseStyle);

    rowId = 2;
    columnId = 1;
    validationSheet.cell(rowId++, columnId).string("Organisation Units");
    _.forEach(organisationUnits, orgUnit => {
        validationSheet.cell(rowId++, columnId).formula("_" + orgUnit.id);
    });
    this.validations.set(
        "organisationUnits",
        `=Validation!$${Excel.getExcelAlpha(columnId)}$3:$${Excel.getExcelAlpha(columnId)}$${rowId}`
    );

    if (element.type === "dataSet") {
        rowId = 2;
        columnId++;
        validationSheet.cell(rowId++, columnId).string("Periods");
        buildAllPossiblePeriods(element.periodType, startYear, endYear).forEach(period => {
            if (isNaN(period)) {
                validationSheet.cell(rowId++, columnId).string(period);
            } else {
                validationSheet.cell(rowId++, columnId).number(Number(period));
            }
        });
        this.validations.set(
            "periods",
            `=Validation!$${Excel.getExcelAlpha(columnId)}$3:$${Excel.getExcelAlpha(
                columnId
            )}$${rowId}`
        );
    }

    rowId = 2;
    columnId++;
    validationSheet.cell(rowId++, columnId).string("Options");
    const dataSetOptionComboId = element.categoryCombo.id;
    elementMetadata.forEach(e => {
        if (e.type === "categoryOptionCombo" 
            && e.categoryCombo.id === dataSetOptionComboId
           && e.name !== "default") {
            validationSheet.cell(rowId++, columnId).formula("_" + e.id);
        }
    });
    this.validations.set(
        "options",
        `=Validation!$${Excel.getExcelAlpha(columnId)}$3:$${Excel.getExcelAlpha(columnId)}$${rowId}`
    );

    _.forEach(rawMetadata.optionSets, optionSet => {
        rowId = 2;
        columnId++;

        validationSheet.cell(rowId++, columnId).formula("_" + optionSet.id);
        _.forEach(optionSet.options, option => {
            validationSheet.cell(rowId++, columnId).formula("_" + option.id);
        });
        this.validations.set(
            optionSet.id,
            `=Validation!$${Excel.getExcelAlpha(columnId)}$3:$${Excel.getExcelAlpha(
                columnId
            )}$${rowId}`
        );
    });
    rowId = 2;
    columnId++;
    validationSheet.cell(rowId++, columnId).string("Boolean");
    validationSheet.cell(rowId++, columnId).formula("_true");
    validationSheet.cell(rowId++, columnId).formula("_false");
    this.validations.set(
        "BOOLEAN",
        `=Validation!$${Excel.getExcelAlpha(columnId)}$3:$${Excel.getExcelAlpha(columnId)}$${rowId}`
    );
    rowId = 2;
    columnId++;
    validationSheet.cell(rowId++, columnId).string("True only");
    validationSheet.cell(rowId++, columnId).formula("_true");
    this.validations.set(
        "TRUE_ONLY",
        `=Validation!$${Excel.getExcelAlpha(columnId)}$3:$${Excel.getExcelAlpha(columnId)}$${rowId}`
    );
};

SheetBuilder.prototype.fillMetadataSheet = function() {
    const { elementMetadata: metadata, organisationUnits } = this.builder;
    const metadataSheet = this.metadataSheet;
    
    // Freeze and format column titles
    metadataSheet.row(2).freeze();
    metadataSheet.column(1).setWidth(30);
    metadataSheet.column(2).setWidth(30);
    metadataSheet.column(3).setWidth(70);

    // Add column titles
    metadataSheet
        .cell(1, 1, 2, 1, true)
        .string("Identifier")
        .style(baseStyle);
    metadataSheet
        .cell(1, 2, 2, 2, true)
        .string("Type")
        .style(baseStyle);
    metadataSheet
        .cell(1, 3, 2, 3, true)
        .string("Name")
        .style(baseStyle);
    metadataSheet
        .cell(1, 4, 2, 4, true)
        .string("Value Type")
        .style(baseStyle);
    metadataSheet
        .cell(1, 5, 2, 5, true)
        .string("Option Set")
        .style(baseStyle);
    metadataSheet
        .cell(1, 6, 2, 6, true)
        .string("Possible Values")
        .style(baseStyle);

    let rowId = 3;
    metadata.forEach(value => {
        
        const name = value.formName !== undefined ? value.formName : value.name;
        const optionSet = value.optionSet ? metadata.get(value.optionSet.id) : null;
        const options =
            optionSet && optionSet.options
                ? optionSet.options.map(option => metadata.get(option.id).name).join(", ")
                : null;

        metadataSheet.cell(rowId, 1).string(value.id ? value.id : "");
        metadataSheet.cell(rowId, 2).string(value.type ? value.type : "");
        
        //Checks if an element is compulsory, if it is adds a * at the end
        if (value.type === "dataElement" && 
                this.builder.rawMetadata.programStageDataElements !== undefined) {

            let elements = this.builder.rawMetadata.programStageDataElements;
            for (let i = 0; i < elements.length; ++i)
                if (elements[i].dataElement.id === value.id) {
                    if (elements[i].compulsory) metadataSheet.cell(rowId, 3).string(name ? name.concat("*") : "");
                    else metadataSheet.cell(rowId, 3).string(name ? name : "");
                    break;
                }    
        } else metadataSheet.cell(rowId, 3).string(name ? name : "");
        
        metadataSheet.cell(rowId, 4).string(value.valueType ? value.valueType : "");
        metadataSheet.cell(rowId, 5).string(optionSet ? optionSet.name : "");
        metadataSheet.cell(rowId, 6).string(options ? options : "");

        if (name !== undefined) {
            this.workbook.definedNameCollection.addDefinedName({
                refFormula: "'Metadata'!$" + Excel.getExcelAlpha(3) + "$" + rowId,
                name: "_" + value.id,
            });
        }

        rowId++;
    });

    organisationUnits.forEach(orgUnit => {
        metadataSheet.cell(rowId, 1).string(orgUnit.id !== undefined ? orgUnit.id : "");
        metadataSheet.cell(rowId, 2).string("organisationUnit");
        metadataSheet
            .cell(rowId, 3)
            .string(orgUnit.displayName !== undefined ? orgUnit.displayName : "");

        if (orgUnit.displayName !== undefined)
            this.workbook.definedNameCollection.addDefinedName({
                refFormula: "'Metadata'!$" + Excel.getExcelAlpha(3) + "$" + rowId,
                name: "_" + orgUnit.id,
            });

        rowId++;
    });
    metadataSheet.cell(rowId, 1).string("true");
    metadataSheet.cell(rowId, 2).string("boolean");
    metadataSheet.cell(rowId, 3).string("Yes");
    this.workbook.definedNameCollection.addDefinedName({
        refFormula: "'Metadata'!$" + Excel.getExcelAlpha(3) + "$" + rowId,
        name: "_true",
    });
    rowId++;
    metadataSheet.cell(rowId, 1).string("false");
    metadataSheet.cell(rowId, 2).string("boolean");
    metadataSheet.cell(rowId, 3).string("No");
    this.workbook.definedNameCollection.addDefinedName({
        refFormula: "'Metadata'!$" + Excel.getExcelAlpha(3) + "$" + rowId,
        name: "_false",
    });
    rowId++;
};

SheetBuilder.prototype.getVersion = function () {
    const { element } = this.builder;
    const defaultVersion =
        element.type === "dataSet" ? "DATASET_GENERATED_v1" : "PROGRAM_GENERATED_v1";
    return getObjectVersion(element) ?? defaultVersion;
};

SheetBuilder.prototype.fillDataEntrySheet = function() {

    const { element, elementMetadata: metadata } = this.builder;
    const dataEntrySheet = this.dataEntrySheet;

    // Add cells for themes
    const sectionRow = 6;
    const itemRow = 7;

    // Hide theme rows by default
    for (let row = 1; row < sectionRow; row++) {
        dataEntrySheet.row(row).hide();
    }

    // Freeze and format column titles
    dataEntrySheet.row(itemRow).freeze();
    dataEntrySheet.row(sectionRow).setHeight(30);
    dataEntrySheet.row(itemRow).setHeight(50);


    // Add template version
    dataEntrySheet.cell(1, 1).string(`Version: ${this.getVersion()}`).style(baseStyle);

    // Add column titles
    let columnId = 1;
    let groupId = 0;


    createColumn(
        this.workbook,
        dataEntrySheet,
        itemRow,
        columnId++,
        element.type === "program"? "Org Unit*" : "Org Unit",
        null,
        this.validations.get("organisationUnits")
    );
    if (element.type === "program") {
        createColumn(this.workbook, dataEntrySheet, itemRow, columnId++, "Latitude*");
        createColumn(this.workbook, dataEntrySheet, itemRow, columnId++, "Longitude*");
 
    } else if (element.type === "dataSet") {
        createColumn(
            this.workbook,
            dataEntrySheet,
            itemRow,           
            columnId++,
            "Period",
            null,
            this.validations.get("periods")
        );
    }
    
    createColumn(
        this.workbook,
        dataEntrySheet,
        itemRow,
        columnId++,
        "Options",
        null,
        this.validations.get("options")
    );
    if (element.type === "dataSet") {
        const categoryOptionCombos = [];
        
        for (const [, value] of metadata) { 
            if (value.type === "categoryOptionCombo") {
                categoryOptionCombos.push(value);
            }
        }
        let sections = _.groupBy(categoryOptionCombos, "categoryCombo.id");
        
        _.forOwn(sections, (_section, categoryComboId) => {
            const categoryCombo = metadata.get(categoryComboId);
            if (categoryCombo !== undefined) {
                _(element.dataSetElements)
                    .map(({ dataElement }) => metadata.get(dataElement.id))
                    .filter({
                        categoryCombo: { id: categoryComboId },
                    })
                    .forEach(dataElement => {
                        const firstColumnId = columnId;

                        const sectionCategoryOptionCombos = sections[categoryComboId];
                        _.forEach(sectionCategoryOptionCombos, categoryOptionCombo => {
                            const validation = dataElement.optionSet
                                ? dataElement.optionSet.id
                                : dataElement.valueType;

                            createColumn(
                                this.workbook,
                                dataEntrySheet,
                                itemRow,
                                columnId,
                                "_" + categoryOptionCombo.id,
                                groupId,
                                this.validations.get(validation),
                                categoryOptionCombo.code === "default"
                            );

                            if (categoryOptionCombo.description !== undefined) {
                                dataEntrySheet
                                    .cell(itemRow, columnId)
                                    .comment(categoryOptionCombo.description, {
                                        height: "100pt",
                                        width: "160pt",
                                    });
                            }

                            columnId++;
                        });

                        if (columnId - 1 === firstColumnId) {
                            dataEntrySheet
                                .column(firstColumnId)
                                .setWidth(dataElement.name.length / 2.5 + 15);
                        }

                        dataEntrySheet
                            .cell(sectionRow, firstColumnId, sectionRow, columnId - 1, true)
                            .formula("_" + dataElement.id)
                            .style(groupStyle(groupId));

                        if (dataElement.description !== undefined) {
                            dataEntrySheet
                                .cell(sectionRow, firstColumnId, sectionRow, columnId - 1, true)
                                .comment(dataElement.description, {
                                    height: "100pt",
                                    width: "160pt",
                                });
                        }

                        groupId++;
                    });
            }
        });
        _.forEach(element.dataSetElements, elem => {
            if (!elem.hasOwnProperty("categoryCombo")) {
                if (metadata.get(elem.dataElement.id).formName === undefined)
                    dataEntrySheet
                    .column(columnId)
                    .setWidth(metadata.get(elem.dataElement.id).name.length / 2.5 + 10);
                else
                    dataEntrySheet
                        .column(columnId)
                        .setWidth(metadata.get(elem.dataElement.id).formName.length / 2.5 + 10);
                dataEntrySheet
                    .cell(1, columnId)
                    .formula("_" + elem.dataElement.id)
                    .style(groupStyle(groupId));
                
                dataEntrySheet
                    .cell(2, columnId)
                    .formula("_" + window.$default_category_combo.categoryCombos[0].id)
                    .style(groupStyle(groupId))
                    .style(transparentFontStyle(groupId));
                groupId++;
                columnId++;
            }
        });
    } else {
        _.forEach(element.programStages, programStageT => {
            let programStage = metadata.get(programStageT.id);

            createColumn(
                this.workbook,
                dataEntrySheet,
                itemRow,
                columnId++,
                programStage.executionDateLabel === undefined ? "Date*" : programStage.executionDateLabel.concat("*")
            );

            dataEntrySheet
                .cell(1, columnId - 1)
                .string(programStage.name)
                .style(baseStyle);

            if (programStage.programStageSections.length === 0) {
                programStage.programStageSections.push({
                    dataElements: programStage.programStageDataElements.map(e => e.dataElement),
                    id: programStageT.id,
                });
            }

            _.forEach(programStage.programStageSections, programStageSectionT => {
                let programStageSection = programStageSectionT.dataElements
                    ? programStageSectionT
                    : metadata.get(programStageSectionT.id);
                let firstColumnId = columnId;

                _.forEach(programStageSection.dataElements, dataElementT => {
                    let dataElement = metadata.get(dataElementT.id);
                    let validation = dataElement.optionSet ? dataElement.optionSet.id : null;
                    createColumn(
                        this.workbook,
                        dataEntrySheet,
                        itemRow,
                        columnId,
                        "_" + dataElement.id,
                        groupId,
                        this.validations.get(validation)
                    );
                    dataEntrySheet.column(columnId).setWidth(dataElement.name.length / 2.5 + 10);

                    if (dataElement.description !== undefined) {
                        dataEntrySheet.cell(2, columnId).comment(dataElement.description, {
                            height: "100pt",
                            width: "160pt",
                        });
                    }

                    columnId++;
                });
                
                if (firstColumnId < columnId)
                    dataEntrySheet
                        .cell(1, firstColumnId, 1, columnId - 1, true)
                        .formula("_" + programStageSection.id)
                        .style(groupStyle(groupId));

                groupId++;
            });
        });
    }
};

SheetBuilder.prototype.downloadSheet = async function() {
    try {
        const data = await this.workbook.writeToBuffer();
        const blob = new Blob([data], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });
        saveAs(blob, `${this.builder.element.displayName}.xlsx`);
    } catch (error) {
        console.log("Failed building/downloading template");
        throw error;
    }
};
