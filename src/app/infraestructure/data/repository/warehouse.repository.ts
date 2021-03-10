import { Inject, Injectable } from "@angular/core";
import { WarehouseDto } from "src/app/application/dto/warehouse.dto";
import { Product } from "src/app/domain/entity/product.entity";
import { Section } from "src/app/domain/entity/section.entity";
import { Warehouse } from "src/app/domain/entity/warehouse.entity";
import { WarehouseModel } from "../module/warehouse.module";

// Se inyecta el repo en el servicio
@Injectable({
  providedIn: 'root'
})
export class WarehouseRepository {

  constructor() {}

  create(warehouse: WarehouseDto): Warehouse {
    let createdWarehouse = new WarehouseModel(warehouse, '');
    return createdWarehouse;
  }

  build(warehouse: WarehouseDto, id:string): Warehouse {
    let createdWarehouse = new WarehouseModel(warehouse, id);
    return createdWarehouse;
  }

  async getAllSections(warehouse: WarehouseDto): Promise<Section[]>{
    return warehouse.sections;
  }

  async getAllProducts(warehouse: WarehouseDto):Promise<Product[]>{
    let products:[] = [];
    let sections = warehouse.sections;
    sections.forEach(section=>console.log(section.products));
    return products;
  }

}