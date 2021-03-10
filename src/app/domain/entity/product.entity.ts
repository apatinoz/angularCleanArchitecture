export interface Product{
    readonly _id?: string;
    name: string;
    count: number;
    serial: string;
    purchasePrice: number;
    category: string;
    subcategory: string;
}