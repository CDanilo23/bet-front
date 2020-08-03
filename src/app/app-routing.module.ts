import { RouterModule, Routes } from '@angular/router';
import { HipodromoComponent } from './pages/configuration/hipodromo/hipodromo.component';
import { PagesComponent } from './pages/pages.component';
import { NgModule } from '@angular/core';


const routes: Routes = [
    { path:  '', redirectTo:  'home', pathMatch:  'full' },
    { path: 'home', component: PagesComponent, },
    { path: 'hipodromo', component: HipodromoComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
