
// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ShowCase Modules
import { InputModule } from '../input/input.module';
import { CoreModule } from '../../core.module';
import { RadioModule } from '../radio/radio.module';


// Components
import { SidenavComponent } from './sidenav.component';
import { ApuestasModule } from '../apuestas/apuestas.module';
import { MonedaModule } from '../moneda/moneda.module';
import { DatepickerModule } from '../../components/datepicker/datepicker.module';
import { CarrerasModule } from '../../configuration/carreras/carreras.module';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    InputModule,
    RadioModule,
    DatepickerModule,
    ApuestasModule,
    MonedaModule,
    CarrerasModule
  ],
  exports: [SidenavComponent],
  declarations: [SidenavComponent],
})
export class SidenavModule { }
