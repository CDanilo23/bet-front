import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { RadioModule } from './business/radio/radio.module';

import { InputModule } from './business/input/input.module';
import { DatepickerModule } from './components/datepicker/datepicker.module';
import { HipodromoService } from '../service/hipodromo.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core.module';
import { ApuestasModule } from './business/apuestas/apuestas.module';
import { MonedaModule } from './business/moneda/moneda.module';
import { CarrerasModule } from './configuration/carreras/carreras.module';
import { HipodromoListModule } from './configuration/hipodromo/hipodromo-list/hipodromo-list.module';
import { HipodromoModule } from './configuration/hipodromo/hipodromo.module';
import { BrowserModule } from '@angular/platform-browser';
import { CarreraService } from '../service/service.index';
import { GanadoresModule } from './business/ganadores/ganadores.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RadioModule,
    DatepickerModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    InputModule,
    RadioModule,
    DatepickerModule,
    ApuestasModule,
    MonedaModule,
    CarrerasModule,
    HipodromoListModule,
    HipodromoModule,
    GanadoresModule
  ],
  exports: [
    InputModule,
    RadioModule,
    DatepickerModule,
    CommonModule,
    ApuestasModule,
    CoreModule,
    MonedaModule,
    CarrerasModule,
    HipodromoListModule,
    HipodromoModule,
    GanadoresModule
  ],
  providers: [
    HipodromoService,
    CarreraService
  ],
  declarations: []
})
export class PagesModule { }
