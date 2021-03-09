import { Section } from "./section.entity";

export interface Warehouse{
    readonly _id?: string;
    name: string;
    note: string;
    sections: Array<Section>
}