import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module';
import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    PagesModule,
    APP_ROUTES,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
