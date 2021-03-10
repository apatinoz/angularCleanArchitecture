import { Component, OnInit } from '@angular/core';
import { WarehouseDto } from 'src/app/application/dto/warehouse.dto';
import { Warehouse } from 'src/app/domain/entity/warehouse.entity';
import { WarehouseService } from 'src/app/domain/service/warehouse.service';

@Component({
  selector: 'app-elephant',
  templateUrl: './elephant.component.html',
  styleUrls: ['./elephant.component.sass'],
})
export class ElephantComponent implements  OnInit {

  warehouses: Array<Warehouse> = [];

  constructor(private warehouseService: WarehouseService) { }

  ngOnInit(){

    let warehouseDto1: WarehouseDto = {
      'name': 'Neceser 1',
      'note': 'El neceser que esta al lado del ingreso en la puerta a la derecha',
      'sections': [{
        'name': 'seccion 1',
        'location': 'superior',
        'tag': 'estante',
        'note': 'se tiene una distancia de 1m * 24 cm',
        'products': [{
          'name': 'pantalla acer',
          'count': 2,
          'serial': 'asd12asd32as1d',
          'purchasePrice': 150000,
          'category': 'pantallas',
          'subcategory': 'acer'
        }]
      }]
    };

    let warehouseDto2: WarehouseDto = {
      'name': 'Armario 1',
      'note': 'el Armario que esta al lado del ingreso en la puerta a la izquierda',
      'sections': [{
        'name': 'seccion 1',
        'location': 'superior',
        'tag': 'estante',
        'note': 'se tiene una distancia de 1m * 24 cm',
        'products': [{
          'name': 'microfono logitech',
          'count': 1,
          'serial': 'rasd23a5wed1as2',
          'purchasePrice': 50000,
          'category': 'microfono',
          'subcategory': 'logitech'
        }]
      }]
    };

    let warehouseDto3: WarehouseDto = {
      'name': 'Caja 1',
      'note': 'La caja se encuentra en el modulo principal',
      'sections': [{
        'name': 'seccion 1',
        'location': 'superior',
        'tag': 'contenedor',
        'note': 'se tiene una distancia de 1 m * 55 cm',
        'products': [{
          'name': 'telefono',
          'count': 14,
          'serial': 'asd12asd32as1ad',
          'purchasePrice': 1250000,
          'category': 'telefono',
          'subcategory': 'polycom'
        }]
      }]
    };

    let warehouse1 = this.warehouseService.create(warehouseDto1)
    let warehouse2 = this.warehouseService.create(warehouseDto2)
    let warehouse3 = this.warehouseService.create(warehouseDto3)
    
    this.warehouses.push(warehouse1);
    this.warehouses.push(warehouse2);
    this.warehouses.push(warehouse3);

  }

  onSelect(event:any) {
    console.log(event.target);
  }


}
