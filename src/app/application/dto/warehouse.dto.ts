import { Section } from "src/app/domain/entity/section.entity";

export interface WarehouseDto{
    readonly _id?: string;
    name: string;
    note: string;
    sections: Array<Section>
}