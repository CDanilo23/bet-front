import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HipodromoService } from './service.index';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    HipodromoService
  ],
  declarations: []
})
export class ServiceModule { }
