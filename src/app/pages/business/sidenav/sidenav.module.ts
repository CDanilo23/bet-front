
// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ShowCase Modules
import { InputModule } from '../input/input.module';
import { CheckboxModule } from '../checkbox/checkbox.module';
import { CoreModule } from '../../core.module';
import { RadioModule } from '../radio/radio.module';
import { DatepickerModule } from '../datepicker/datepicker.module';

// Components
import { SidenavComponent } from './sidenav.component';
import { ApuestasModule } from '../apuestas/apuestas.module';
import { MonedaModule } from '../moneda/moneda.module';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    InputModule,
    CheckboxModule,
    RadioModule,
    DatepickerModule,
    ApuestasModule,
    MonedaModule
  ],
  exports: [SidenavComponent],
  declarations: [SidenavComponent],
})
export class SidenavModule { }
