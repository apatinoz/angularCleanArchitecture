import {IsArray, IsNotEmpty, IsString} from 'class-validator';
import * as faker from 'faker';
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
    this._id = (id)? id: faker.random.uuid();
    this.name = warehouse.name;
    this.note = warehouse.note;
    this.sections = warehouse.sections;
  }

  /* any method would be defined here*/
  save(): WarehouseModel{
    return this;
  } 
  
}