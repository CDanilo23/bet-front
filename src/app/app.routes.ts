import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './pages/business/sidenav/sidenav.component';

const appRoutes: Routes = [
    { path: 'main', component: SidenavComponent }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true} );
