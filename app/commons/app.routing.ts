import {Routes, RouterModule} from '@angular/router';

import {HeroesComponent}      from '../hero/component/heroes.component';
import {AppComponent} from "../app.component";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {HeroDetailComponent} from "../hero/component/hero-detail.component";

const appRoutes:Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    },
    {
        path: 'heroes',
        component: HeroesComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);
