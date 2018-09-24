import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_ROUTES } from '../app.routes';
import { SidenavModule } from './business/sidenav/sidenav.module';
import { CheckboxModule } from './business/checkbox/checkbox.module';
import { RadioModule } from './business/radio/radio.module';
import { DatepickerModule } from './business/datepicker/datepicker.module';
import { InputModule } from './business/input/input.module';


@NgModule({
    imports: [
      CommonModule,
      SidenavModule,
      CheckboxModule,
      APP_ROUTES,
      RadioModule,
      DatepickerModule
    ],
    exports: [
      SidenavModule,
      InputModule,
      CheckboxModule,
      RadioModule,
      DatepickerModule
    ],
    declarations: [],
})
export class PagesModule { }
