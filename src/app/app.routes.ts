import { RouterModule, Routes } from '@angular/router';
import { HipodromoComponent } from './pages/configuration/hipodromo/hipodromo.component';
import { PagesComponent } from './pages/pages.component';

const appRoutes: Routes = [
    { path: 'main', component: PagesComponent, },
    { path: 'hipodromo', component: HipodromoComponent }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true} );
