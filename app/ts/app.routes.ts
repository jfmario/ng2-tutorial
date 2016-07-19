
import { provideRouter, RouterConfig } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';

const routes : RouterConfig = [
    {
        component: DashboardComponent,
        path: 'dashboard'
    },
    {
        component: HeroDetailComponent,
        path: 'detail/:id'
    },
    {
        component: HeroesComponent,
        path: 'heroes'
    },
    // default redirect
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/dashboard'
    }
];
export const appRouterProviders = [
    provideRouter ( routes )
];
