import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module';
import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';

@NgModule({
  imports: [
    PagesModule,
    APP_ROUTES,
  ],
  declarations: [
    AppComponent,
    PagesComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
