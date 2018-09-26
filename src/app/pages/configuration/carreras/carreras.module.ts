import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrerasComponent } from './carreras.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../../core.module';
import { DatepickerModule } from '../../components/datepicker/datepicker.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    DatepickerModule
  ],
  exports: [CarrerasComponent],
  declarations: [CarrerasComponent]
})
export class CarrerasModule { }
