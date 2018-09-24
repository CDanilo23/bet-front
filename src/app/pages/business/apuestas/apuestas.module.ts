import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoApuestaModule } from '../tipoapuesta/tipoapuesta.module';

// Component
import { ApuestasComponent } from './apuestas.component';

@NgModule({
  imports: [
    CommonModule,
    TipoApuestaModule,
  ],
  exports: [ApuestasComponent],
  declarations: [ApuestasComponent]
})
export class ApuestasModule { }
