"use strict";
var router_1 = require('@angular/router');
var heroes_component_1 = require('./heroes.component');
var dashboard_component_1 = require('./dashboard.component');
var routes = [
    {
        component: heroes_component_1.HeroesComponent,
        path: 'heroes'
    },
    {
        component: dashboard_component_1.DashboardComponent,
        path: 'dashboard'
    },
    // default redirect
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/dashboard'
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)];
;
//# sourceMappingURL=app.routes.js.map