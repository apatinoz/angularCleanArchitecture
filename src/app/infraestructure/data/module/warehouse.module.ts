import {IsArray, IsNotEmpty, IsNumber, IsString} from 'class-validator';
import { WarehouseDto } from 'src/app/application/dto/warehouse.dto';
import { Section } from 'src/app/domain/entity/section.entity';


export class WarehouseModel {
  _id?: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  note: string;

  @IsArray()
  @IsNotEmpty()
  sections: Array<Section>

  constructor(warehouse: WarehouseDto, id:string) {
    this.name = warehouse.name;
    this.note = warehouse.note;
    this.sections = warehouse.sections;
  }

  /* any method would be defined here*/
  save(): WarehouseModel{
    return this;
  } 
}