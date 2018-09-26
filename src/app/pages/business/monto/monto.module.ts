import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MontoComponent } from './monto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../../core.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [MontoComponent],
  declarations: [MontoComponent]
})
export class MontoModule { }
