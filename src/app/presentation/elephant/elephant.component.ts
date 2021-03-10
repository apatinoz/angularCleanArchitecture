import { Component } from '@angular/core';
import { WarehouseDto } from 'src/app/application/dto/warehouse.dto';
import { Warehouse } from 'src/app/domain/entity/warehouse.entity';
import { WarehouseService } from 'src/app/domain/service/warehouse.service';

@Component({
  selector: 'app-elephant',
  templateUrl: './elephant.component.html',
  styleUrls: ['./elephant.component.sass']
})
export class ElephantComponent {

  warehouses: Array<Warehouse> = [];

  constructor(private warehouseService: WarehouseService) { }

  updateElephants() {

    let warehouseDto1: WarehouseDto = {
      'name': 'ASD',
      'note': 'ASD',
      'sections': []
    };

    let warehouse1 = this.warehouseService.create(warehouseDto1)
    let warehouse2 = this.warehouseService.create(warehouseDto1)
    let warehouse3 = this.warehouseService.create(warehouseDto1)
    
    this.warehouses.push(warehouse1);
    this.warehouses.push(warehouse2);
    this.warehouses.push(warehouse3);

  }

  onSelect(event:any) {
    console.log(event.target);
  }


}
