import { Product } from "./product.entity";

export interface Section{
    readonly _id?: string;
    name: string;
    location: string;
    tag: string;
    note: string;
    products: Array<Product>
}