"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var hero_service_1 = require('./hero.service');
var hero_detail_component_1 = require('./hero-detail.component');
var HeroesComponent = (function () {
    function HeroesComponent(heroService) {
        this.heroService = heroService;
        this.title = "Tour of Heroes";
    }
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
        console.log(hero.name, 'has been selected');
    };
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        console.log(this);
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent = __decorate([
        core_1.Component({
            directives: [hero_detail_component_1.HeroDetailComponent],
            selector: 'my-heroes',
            styles: [
                "\n        .selected {\n            background-color: #cfd8dc !important;\n            color: white;\n        }\n        .heroes {\n            list-style-type: none;\n            margin: 0 0 2em 0;\n            padding: 0;\n            width: 15em;\n        }\n        .heroes li {\n            background-color: #eee;\n            border-radius: 4px;\n            cursor: pointer;\n            height: 1.6em;\n            left: 0;\n            margin: .5em;\n            padding: .3em 0;\n            position: relative;\n        }\n        .heroes li.selected:hover {\n            background-color: #bbd8dc !important;\n            color: white;\n        }\n        .heroes li:hover {\n            background-color: #ddd;\n            color: #607d8b;\n            left: .1em;\n        }\n        .heroes .text {\n            position: relative;\n            top: -3px;\n        }\n        .heroes .badge {\n            background-color: #607d8b;\n            border-radius: 4px 0 0 4px;\n            color: white;\n            display: inline-block;\n            font-size: small;\n            height: 1.8em;\n            line-height: 1em;\n            margin-right: 0.8em;\n            padding: 0.8em 0. em 0 0.7em;\n            position: relative;\n            left: -1px;\n            top: -4px;\n        }\n        "
            ],
            template: "\n        <h1>{{ title }}</h1>\n\n        <h2>HS Heroes</h2>\n\n        <ul class=\"heroes\">\n            <li\n                *ngFor=\"let hero of heroes\"\n                [class.selected]=\"hero === selectedHero\"\n                (click)=\"onSelect(hero)\"\n            >\n                <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n            </li>\n        </ul>\n\n        <div *ngIf=\"selectedHero\">\n        \n            <h2>{{ selectedHero.name | uppercase }}</h2>\n            \n            <button (click)=\"gotoDetail()\">View Details</button>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map