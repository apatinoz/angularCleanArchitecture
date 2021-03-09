import { Product } from "src/app/domain/entity/product.entity";

export interface SectionDto{
    name: string;
    location: string;
    tag: string;
    note: string;
    products: Array<Product>
}