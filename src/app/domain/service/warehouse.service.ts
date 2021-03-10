import { Injectable } from '@angular/core';
import { WarehouseDto } from 'src/app/application/dto/warehouse.dto';
import { WarehouseRepository } from 'src/app/infraestructure/data/repository/warehouse.repository';
import { Product } from '../entity/product.entity';
import { Warehouse } from '../entity/warehouse.entity';

// Se inyecta el repo en el servicio
@Injectable({
  providedIn: 'root'
})
export class WarehouseService {
  constructor(private readonly warehouseRepository: WarehouseRepository ) {}

  getFunctional(): string {
    return 'Hello World!';
  }

  create(warehouseDto: WarehouseDto): Warehouse {
    return this.warehouseRepository.create(warehouseDto);
  }

  build(object:any): Warehouse{
    let warehouseDto: WarehouseDto = object.warehouse;
    let id : string = object._id;
    return this.warehouseRepository.build(warehouseDto, id);
  }

  async getAllProducts(warehouse: WarehouseDto):Promise<Product[]>{
      return this.warehouseRepository.getAllProducts(warehouse);
  }

}