import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoApuestaModule } from '../tipoapuesta/tipoapuesta.module';

// Component
import { ApuestasComponent } from './apuestas.component';
import { MontoModule } from '../monto/monto.module';
import { CoreModule } from '../../core.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    TipoApuestaModule,
    MontoModule
  ],
  exports: [ApuestasComponent],
  declarations: [ApuestasComponent]
})
export class ApuestasModule { }
