import { Inject, Injectable } from "@angular/core";
import { ProductDto } from "src/app/application/dto/product.dto";
import { Product } from "src/app/domain/entity/product.entity";
import { ProductModel } from "../module/product.module";

// Se inyecta el repo en el servicio
@Injectable({
  providedIn: 'root'
})
export class ProductRepository {

  constructor() {}

  async create(product: ProductDto): Promise<Product> {
    let createdProduct = new ProductModel(product, '');
    return await createdProduct;
  }

}