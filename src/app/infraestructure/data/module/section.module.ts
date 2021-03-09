import {IsArray, IsNotEmpty, IsNumber, IsString} from 'class-validator';
import { SectionDto } from 'src/app/application/dto/section.dto';
import { Product } from 'src/app/domain/entity/product.entity';


export class SectionModel {
  _id?: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsString()
  @IsNotEmpty()
  tag: string;

  @IsString()
  @IsNotEmpty()
  note: string;

  @IsArray()
  @IsNotEmpty()
  products: Array<Product>

  constructor(section: SectionDto, id:string) {
    this.name = section.name;
    this.location = section.location;
    this.tag = section.tag;
    this.note = section.note;
    this.products = section.products;
  }

  /* any method would be defined here*/
  save(): SectionModel{
    return this;
  } 
}