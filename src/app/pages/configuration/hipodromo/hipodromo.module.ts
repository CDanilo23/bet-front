import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HipodromoComponent } from './hipodromo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [HipodromoComponent],
  declarations: [HipodromoComponent]
})
export class HipodromoModule { }
