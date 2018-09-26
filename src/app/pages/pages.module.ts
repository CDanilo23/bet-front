import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_ROUTES } from '../app.routes';
import { SidenavModule } from './business/sidenav/sidenav.module';
import { RadioModule } from './business/radio/radio.module';

import { InputModule } from './business/input/input.module';
import { DatepickerModule } from './components/datepicker/datepicker.module';


@NgModule({
    imports: [
      CommonModule,
      SidenavModule,
      APP_ROUTES,
      RadioModule,
      DatepickerModule
    ],
    exports: [
      SidenavModule,
      InputModule,
      RadioModule,
      DatepickerModule
    ],
    declarations: [],
})
export class PagesModule { }
