import { D2Api } from "@eyeseetea/d2-api/2.33";
import { getMockApiFromClass } from "@eyeseetea/d2-api";

export * from "@eyeseetea/d2-api/2.33";
export type { D2RelationshipConstraint } from "@eyeseetea/d2-api/schemas/base";

export const D2ApiDefault = D2Api;
export const getMockApi = getMockApiFromClass(D2Api);
