import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HipodromoListComponent } from './hipodromo.list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HipodromoService } from '../../../../service/hipodromo.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [HipodromoListComponent],
  declarations: [HipodromoListComponent],
  providers: [HipodromoService, HttpClientModule ]
})
export class HipodromoListModule { }
