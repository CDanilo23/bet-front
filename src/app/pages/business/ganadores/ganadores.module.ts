import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core.module';
import { GanadoresComponent } from './ganadores.component';

@NgModule({
  imports: [
    CoreModule,
    CommonModule
  ],
  declarations: [GanadoresComponent],
  exports: [GanadoresComponent]
})
export class GanadoresModule { }
