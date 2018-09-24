import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoApuestaComponent } from './tipoapuesta.component';
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
    TipoApuestaComponent
  ],
  exports: [
    TipoApuestaComponent
  ]
})
export class TipoApuestaModule { }
