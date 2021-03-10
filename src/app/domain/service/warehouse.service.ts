import { Inject, Injectable } from '@angular/core';
import { WarehouseDto } from 'src/app/application/dto/warehouse.dto';
import { WarehouseRepository } from 'src/app/infraestructure/data/repository/warehouse.repository';
import { Product } from '../entity/product.entity';
import { Section } from '../entity/section.entity';
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

  getAllProducts(warehouse: WarehouseDto):Product[]{
      return this.warehouseRepository.getAllProducts(warehouse);
  }

  getAllSections(warehouse: WarehouseDto):Section[]{
    return this.warehouseRepository.getAllSections(warehouse);
}

}