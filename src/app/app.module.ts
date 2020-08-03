import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';

@NgModule({
  imports: [
    PagesModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    PagesComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
