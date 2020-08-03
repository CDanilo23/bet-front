import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HipodromoComponent } from './hipodromo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../../core.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [HipodromoComponent],
  declarations: [HipodromoComponent]
})
export class HipodromoModule { }
