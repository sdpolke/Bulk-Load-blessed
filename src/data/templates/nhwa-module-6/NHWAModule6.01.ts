import { CustomTemplate, DataSource, StyleSource } from "../../../domain/entities/Template";

export class NHWAModule601 implements CustomTemplate {
    public readonly type = "custom";
    public readonly id = "NHWA_MODULE_6_v1";
    public readonly name = "NHWA Module 6";
    public readonly url = "templates/NHWA_Module_6.xlsx";
    public readonly dataFormId = { type: "value" as const, id: "WDyQKfAvY3V" };
    public readonly dataFormType = { type: "value" as const, id: "dataSets" as const };
    public readonly fixedOrgUnit = { type: "cell" as const, sheet: "Characteristics", ref: "V2" };
    public readonly fixedPeriod = { type: "cell" as const, sheet: "Characteristics", ref: "I4" };

    public readonly dataSources: DataSource[] = [
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "iM5NIZBqAUL" },
            categoryOption: { type: "value", id: "Xr12mI7VPn3" },
            ref: { type: "cell", sheet: "Characteristics", ref: "D8" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "GeY6o2BMvp1" },
            categoryOption: { type: "value", id: "aBpbcEgtzgw" },
            ref: { type: "cell", sheet: "Characteristics", ref: "D13" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "hBzWHe6kuvu" },
            categoryOption: { type: "value", id: "aBpbcEgtzgw" },
            ref: { type: "cell", sheet: "Characteristics", ref: "E13" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "C8MvR5CNwpG" },
            categoryOption: { type: "value", id: "aBpbcEgtzgw" },
            ref: { type: "cell", sheet: "Characteristics", ref: "F13" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "wsmvhizfctg" },
            categoryOption: { type: "value", id: "aBpbcEgtzgw" },
            ref: { type: "cell", sheet: "Characteristics", ref: "G13" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "KlsBVkjtkkV" },
            categoryOption: { type: "value", id: "aBpbcEgtzgw" },
            ref: { type: "cell", sheet: "Characteristics", ref: "H13" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "N6VNhZ2PCG7" },
            categoryOption: { type: "value", id: "aBpbcEgtzgw" },
            ref: { type: "cell", sheet: "Characteristics", ref: "I13" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "GeY6o2BMvp1" },
            categoryOption: { type: "value", id: "LHbCtHlZr3Y" },
            ref: { type: "cell", sheet: "Characteristics", ref: "D14" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "hBzWHe6kuvu" },
            categoryOption: { type: "value", id: "LHbCtHlZr3Y" },
            ref: { type: "cell", sheet: "Characteristics", ref: "E14" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "C8MvR5CNwpG" },
            categoryOption: { type: "value", id: "LHbCtHlZr3Y" },
            ref: { type: "cell", sheet: "Characteristics", ref: "F14" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "wsmvhizfctg" },
            categoryOption: { type: "value", id: "LHbCtHlZr3Y" },
            ref: { type: "cell", sheet: "Characteristics", ref: "G14" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "KlsBVkjtkkV" },
            categoryOption: { type: "value", id: "LHbCtHlZr3Y" },
            ref: { type: "cell", sheet: "Characteristics", ref: "H14" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "N6VNhZ2PCG7" },
            categoryOption: { type: "value", id: "LHbCtHlZr3Y" },
            ref: { type: "cell", sheet: "Characteristics", ref: "I14" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "GeY6o2BMvp1" },
            categoryOption: { type: "value", id: "VtVkbvygJnm" },
            ref: { type: "cell", sheet: "Characteristics", ref: "D15" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "hBzWHe6kuvu" },
            categoryOption: { type: "value", id: "VtVkbvygJnm" },
            ref: { type: "cell", sheet: "Characteristics", ref: "E15" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "C8MvR5CNwpG" },
            categoryOption: { type: "value", id: "VtVkbvygJnm" },
            ref: { type: "cell", sheet: "Characteristics", ref: "F15" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "wsmvhizfctg" },
            categoryOption: { type: "value", id: "VtVkbvygJnm" },
            ref: { type: "cell", sheet: "Characteristics", ref: "G15" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "KlsBVkjtkkV" },
            categoryOption: { type: "value", id: "VtVkbvygJnm" },
            ref: { type: "cell", sheet: "Characteristics", ref: "H15" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "N6VNhZ2PCG7" },
            categoryOption: { type: "value", id: "VtVkbvygJnm" },
            ref: { type: "cell", sheet: "Characteristics", ref: "I15" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "GeY6o2BMvp1" },
            categoryOption: { type: "value", id: "fGOgbIqsxDn" },
            ref: { type: "cell", sheet: "Characteristics", ref: "D16" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "hBzWHe6kuvu" },
            categoryOption: { type: "value", id: "fGOgbIqsxDn" },
            ref: { type: "cell", sheet: "Characteristics", ref: "E16" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "C8MvR5CNwpG" },
            categoryOption: { type: "value", id: "fGOgbIqsxDn" },
            ref: { type: "cell", sheet: "Characteristics", ref: "F16" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "wsmvhizfctg" },
            categoryOption: { type: "value", id: "fGOgbIqsxDn" },
            ref: { type: "cell", sheet: "Characteristics", ref: "G16" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "KlsBVkjtkkV" },
            categoryOption: { type: "value", id: "fGOgbIqsxDn" },
            ref: { type: "cell", sheet: "Characteristics", ref: "H16" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "N6VNhZ2PCG7" },
            categoryOption: { type: "value", id: "fGOgbIqsxDn" },
            ref: { type: "cell", sheet: "Characteristics", ref: "I16" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "GeY6o2BMvp1" },
            categoryOption: { type: "value", id: "MPzyVWiSFF2" },
            ref: { type: "cell", sheet: "Characteristics", ref: "D17" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "hBzWHe6kuvu" },
            categoryOption: { type: "value", id: "MPzyVWiSFF2" },
            ref: { type: "cell", sheet: "Characteristics", ref: "E17" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "C8MvR5CNwpG" },
            categoryOption: { type: "value", id: "MPzyVWiSFF2" },
            ref: { type: "cell", sheet: "Characteristics", ref: "F17" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "wsmvhizfctg" },
            categoryOption: { type: "value", id: "MPzyVWiSFF2" },
            ref: { type: "cell", sheet: "Characteristics", ref: "G17" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "KlsBVkjtkkV" },
            categoryOption: { type: "value", id: "MPzyVWiSFF2" },
            ref: { type: "cell", sheet: "Characteristics", ref: "H17" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "N6VNhZ2PCG7" },
            categoryOption: { type: "value", id: "MPzyVWiSFF2" },
            ref: { type: "cell", sheet: "Characteristics", ref: "I17" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "GeY6o2BMvp1" },
            categoryOption: { type: "value", id: "ALBRKpJsddQ" },
            ref: { type: "cell", sheet: "Characteristics", ref: "D18" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "hBzWHe6kuvu" },
            categoryOption: { type: "value", id: "ALBRKpJsddQ" },
            ref: { type: "cell", sheet: "Characteristics", ref: "E18" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "C8MvR5CNwpG" },
            categoryOption: { type: "value", id: "ALBRKpJsddQ" },
            ref: { type: "cell", sheet: "Characteristics", ref: "F18" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "wsmvhizfctg" },
            categoryOption: { type: "value", id: "ALBRKpJsddQ" },
            ref: { type: "cell", sheet: "Characteristics", ref: "G18" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "KlsBVkjtkkV" },
            categoryOption: { type: "value", id: "ALBRKpJsddQ" },
            ref: { type: "cell", sheet: "Characteristics", ref: "H18" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "N6VNhZ2PCG7" },
            categoryOption: { type: "value", id: "ALBRKpJsddQ" },
            ref: { type: "cell", sheet: "Characteristics", ref: "I18" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "GeY6o2BMvp1" },
            categoryOption: { type: "value", id: "iWRW6jXAzvP" },
            ref: { type: "cell", sheet: "Characteristics", ref: "D19" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "hBzWHe6kuvu" },
            categoryOption: { type: "value", id: "iWRW6jXAzvP" },
            ref: { type: "cell", sheet: "Characteristics", ref: "E19" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "C8MvR5CNwpG" },
            categoryOption: { type: "value", id: "iWRW6jXAzvP" },
            ref: { type: "cell", sheet: "Characteristics", ref: "F19" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "wsmvhizfctg" },
            categoryOption: { type: "value", id: "iWRW6jXAzvP" },
            ref: { type: "cell", sheet: "Characteristics", ref: "G19" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "KlsBVkjtkkV" },
            categoryOption: { type: "value", id: "iWRW6jXAzvP" },
            ref: { type: "cell", sheet: "Characteristics", ref: "H19" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "N6VNhZ2PCG7" },
            categoryOption: { type: "value", id: "iWRW6jXAzvP" },
            ref: { type: "cell", sheet: "Characteristics", ref: "I19" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "qqVKuhK0RgY" },
            categoryOption: { type: "value", id: "Xr12mI7VPn3" },
            ref: { type: "cell", sheet: "Conditions", ref: "D16" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "iS6Vzt6PPjr" },
            categoryOption: { type: "value", id: "OYOzRJlu3B5" },
            ref: { type: "cell", sheet: "Conditions", ref: "E16" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "iS6Vzt6PPjr" },
            categoryOption: { type: "value", id: "JfxMvAwKsR7" },
            ref: { type: "cell", sheet: "Conditions", ref: "F16" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "iS6Vzt6PPjr" },
            categoryOption: { type: "value", id: "MfcVRlA41v6" },
            ref: { type: "cell", sheet: "Conditions", ref: "G16" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "iS6Vzt6PPjr" },
            categoryOption: { type: "value", id: "xeQGICllTPa" },
            ref: { type: "cell", sheet: "Conditions", ref: "H16" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "LUVRqQq2NLE" },
            categoryOption: { type: "value", id: "I93t0K7b1oN" },
            ref: { type: "cell", sheet: "Conditions", ref: "P9" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "LUVRqQq2NLE" },
            categoryOption: { type: "value", id: "Xgr3PJxcWfJ" },
            ref: { type: "cell", sheet: "Conditions", ref: "Q9" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "LUVRqQq2NLE" },
            categoryOption: { type: "value", id: "Y7EAGQA1bfv" },
            ref: { type: "cell", sheet: "Conditions", ref: "R9" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "Ii26DODuUbB" },
            categoryOption: { type: "value", id: "Xr12mI7VPn3" },
            ref: { type: "cell", sheet: "Conditions", ref: "S10" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "cV7DhKFPk3R" },
            categoryOption: { type: "value", id: "Xr12mI7VPn3" },
            ref: { type: "cell", sheet: "Conditions", ref: "S11" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "FXC8HIEHwHI" },
            categoryOption: { type: "value", id: "Xr12mI7VPn3" },
            ref: { type: "cell", sheet: "Conditions", ref: "E9" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "d7hKlZbQARX" },
            categoryOption: { type: "value", id: "Xr12mI7VPn3" },
            ref: { type: "cell", sheet: "Conditions", ref: "E10" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "TiqoQCq1BL4" },
            categoryOption: { type: "value", id: "Xr12mI7VPn3" },
            ref: { type: "cell", sheet: "Conditions", ref: "E11" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "LYjT01KiTTw" },
            categoryOption: { type: "value", id: "I93t0K7b1oN" },
            ref: { type: "cell", sheet: "Regulation", ref: "P9" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "LYjT01KiTTw" },
            categoryOption: { type: "value", id: "Xgr3PJxcWfJ" },
            ref: { type: "cell", sheet: "Regulation", ref: "Q9" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "LYjT01KiTTw" },
            categoryOption: { type: "value", id: "Y7EAGQA1bfv" },
            ref: { type: "cell", sheet: "Regulation", ref: "R9" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "gGSJZCN2L8C" },
            categoryOption: { type: "value", id: "I93t0K7b1oN" },
            ref: { type: "cell", sheet: "Regulation", ref: "P10" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "gGSJZCN2L8C" },
            categoryOption: { type: "value", id: "Xgr3PJxcWfJ" },
            ref: { type: "cell", sheet: "Regulation", ref: "Q10" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "gGSJZCN2L8C" },
            categoryOption: { type: "value", id: "Y7EAGQA1bfv" },
            ref: { type: "cell", sheet: "Regulation", ref: "R10" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "FDUFnJmPb2t" },
            categoryOption: { type: "value", id: "I93t0K7b1oN" },
            ref: { type: "cell", sheet: "Regulation", ref: "P11" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "FDUFnJmPb2t" },
            categoryOption: { type: "value", id: "Xgr3PJxcWfJ" },
            ref: { type: "cell", sheet: "Regulation", ref: "Q11" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "FDUFnJmPb2t" },
            categoryOption: { type: "value", id: "Y7EAGQA1bfv" },
            ref: { type: "cell", sheet: "Regulation", ref: "R11" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "DVyhvgkJrXg" },
            categoryOption: { type: "value", id: "I93t0K7b1oN" },
            ref: { type: "cell", sheet: "Regulation", ref: "P12" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "DVyhvgkJrXg" },
            categoryOption: { type: "value", id: "Xgr3PJxcWfJ" },
            ref: { type: "cell", sheet: "Regulation", ref: "Q12" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "DVyhvgkJrXg" },
            categoryOption: { type: "value", id: "Y7EAGQA1bfv" },
            ref: { type: "cell", sheet: "Regulation", ref: "R12" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "Uyxr85SOJiI" },
            categoryOption: { type: "value", id: "I93t0K7b1oN" },
            ref: { type: "cell", sheet: "Regulation", ref: "P13" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "Uyxr85SOJiI" },
            categoryOption: { type: "value", id: "Xgr3PJxcWfJ" },
            ref: { type: "cell", sheet: "Regulation", ref: "Q13" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "Uyxr85SOJiI" },
            categoryOption: { type: "value", id: "Y7EAGQA1bfv" },
            ref: { type: "cell", sheet: "Regulation", ref: "R13" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "I5m9Dl43XO2" },
            categoryOption: { type: "value", id: "I93t0K7b1oN" },
            ref: { type: "cell", sheet: "Regulation", ref: "P14" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "I5m9Dl43XO2" },
            categoryOption: { type: "value", id: "Xgr3PJxcWfJ" },
            ref: { type: "cell", sheet: "Regulation", ref: "Q14" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "I5m9Dl43XO2" },
            categoryOption: { type: "value", id: "Y7EAGQA1bfv" },
            ref: { type: "cell", sheet: "Regulation", ref: "R14" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "gDinmRT6Pqb" },
            categoryOption: { type: "value", id: "I93t0K7b1oN" },
            ref: { type: "cell", sheet: "Regulation", ref: "P15" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "gDinmRT6Pqb" },
            categoryOption: { type: "value", id: "Xgr3PJxcWfJ" },
            ref: { type: "cell", sheet: "Regulation", ref: "Q15" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "gDinmRT6Pqb" },
            categoryOption: { type: "value", id: "Y7EAGQA1bfv" },
            ref: { type: "cell", sheet: "Regulation", ref: "R15" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "lvs1RCQOOp4" },
            categoryOption: { type: "value", id: "I93t0K7b1oN" },
            ref: { type: "cell", sheet: "Regulation", ref: "P21" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "lvs1RCQOOp4" },
            categoryOption: { type: "value", id: "Xgr3PJxcWfJ" },
            ref: { type: "cell", sheet: "Regulation", ref: "Q21" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "lvs1RCQOOp4" },
            categoryOption: { type: "value", id: "Y7EAGQA1bfv" },
            ref: { type: "cell", sheet: "Regulation", ref: "R21" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "di91e0qZijs" },
            categoryOption: { type: "value", id: "Xr12mI7VPn3" },
            ref: { type: "cell", sheet: "Regulation", ref: "O20" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "p9tpHX1KEpx" },
            categoryOption: { type: "value", id: "Xr12mI7VPn3" },
            ref: { type: "cell", sheet: "Regulation", ref: "E9" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "Vgrwxohqyex" },
            categoryOption: { type: "value", id: "Xr12mI7VPn3" },
            ref: { type: "cell", sheet: "Regulation", ref: "E10" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "diMX6HJrY20" },
            categoryOption: { type: "value", id: "Xr12mI7VPn3" },
            ref: { type: "cell", sheet: "Regulation", ref: "E11" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "Z8z72QAYDaj" },
            categoryOption: { type: "value", id: "Xr12mI7VPn3" },
            ref: { type: "cell", sheet: "Regulation", ref: "E12" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "MSX8eTjkneO" },
            categoryOption: { type: "value", id: "Xr12mI7VPn3" },
            ref: { type: "cell", sheet: "Regulation", ref: "E13" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "pp4mjoKsU50" },
            categoryOption: { type: "value", id: "Xr12mI7VPn3" },
            ref: { type: "cell", sheet: "Regulation", ref: "E14" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "OejaVtMvR4x" },
            categoryOption: { type: "value", id: "Xr12mI7VPn3" },
            ref: { type: "cell", sheet: "Regulation", ref: "E15" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "NI5EQM6hHmc" },
            categoryOption: { type: "value", id: "Xr12mI7VPn3" },
            ref: { type: "cell", sheet: "Regulation", ref: "E20" },
        },
        {
            type: "cell",
            orgUnit: { sheet: "Characteristics", type: "cell", ref: "V2" },
            period: { sheet: "Characteristics", type: "cell", ref: "I4" },
            dataElement: { type: "value", id: "OX7yvkLP2Uj" },
            categoryOption: { type: "value", id: "Xr12mI7VPn3" },
            ref: { type: "cell", sheet: "Regulation", ref: "E21" },
        },
    ];

    public readonly styleSources: StyleSource[] = [];
}
