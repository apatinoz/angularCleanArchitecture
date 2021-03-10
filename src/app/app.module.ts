import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WarehouseService } from './domain/service/warehouse.service';
import { SectionModel } from './infraestructure/data/module/section.module';
import { SectionRepository } from './infraestructure/data/repository/section.repository';
import { WarehouseRepository } from './infraestructure/data/repository/warehouse.repository';
import { ElephantComponent } from './presentation/elephant/elephant.component';

@NgModule({
  declarations: [
    AppComponent,
    ElephantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    SectionRepository,
    WarehouseRepository,
    SectionRepository,
    WarehouseService    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
