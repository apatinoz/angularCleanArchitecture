import { Inject, Injectable } from "@angular/core";
import { SectionDto } from "src/app/application/dto/section.dto";
import { Section } from "src/app/domain/entity/section.entity";
import { SectionModel } from "../module/section.module";
import { WarehouseModel } from "../module/warehouse.module";

// Se inyecta el repo en el servicio
@Injectable({
  providedIn: 'root'
})
export class SectionRepository {

  constructor(@Inject('SectionProvider')private casa:WarehouseModel) {}

  async create(section: SectionDto): Promise<Section> {
    let createdSection = new SectionModel(section, '');
    return await createdSection;
  }

}