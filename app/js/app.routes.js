"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard.component');
var hero_detail_component_1 = require('./hero-detail.component');
var heroes_component_1 = require('./heroes.component');
var routes = [
    {
        component: dashboard_component_1.DashboardComponent,
        path: 'dashboard'
    },
    {
        component: hero_detail_component_1.HeroDetailComponent,
        path: 'detail/:id'
    },
    {
        component: heroes_component_1.HeroesComponent,
        path: 'heroes'
    },
    // default redirect
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/dashboard'
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map