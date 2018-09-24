import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonedaComponent } from './moneda.component';
import { CoreModule } from '../../core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    MonedaComponent
  ],
  exports: [
    MonedaComponent
  ]
})
export class MonedaModule { }
