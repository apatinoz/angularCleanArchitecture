import { ProductDto } from "src/app/application/dto/product.dto";
import * as faker from 'faker';
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ProductModel {
    _id?: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    count: string;

    @IsString()
    @IsNotEmpty()
    serial: string;

    @IsNumber()
    @IsNotEmpty()
    purchasePrice: string;

    @IsString()
    @IsNotEmpty()
    category: string;

    @IsString()
    @IsNotEmpty()
    subcategory: string;
  
    constructor(product: ProductDto, id: string) {
      this._id = (id)? id: faker.random.uuid();
      this.name = product.name;
      this.count = product.count;
      this.serial = product.serial;
      this.category = product.category;
      this.purchasePrice = product.purchasePrice;
      this.subcategory = product.subcategory;
    }
  
    save(): ProductModel{
      return this;
    } 

}