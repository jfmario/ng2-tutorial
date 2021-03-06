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
var router_1 = require('@angular/router');
var hero_service_1 = require('./hero.service');
var hero_detail_component_1 = require('./hero-detail.component');
var HeroesComponent = (function () {
    function HeroesComponent(heroService, router) {
        this.heroService = heroService;
        this.router = router;
        this.addingHero = false;
        this.title = "Tour of Heroes";
    }
    HeroesComponent.prototype.addHero = function () {
        this.addingHero = true;
        this.selectedHero = null;
    };
    HeroesComponent.prototype.close = function (savedHero) {
        this.addingHero = false;
        if (savedHero)
            this.getHeroes();
    };
    HeroesComponent.prototype.deleteHero = function (hero, event) {
        var _this = this;
        event.stopPropagation();
        this.heroService.delete(hero)
            .then(function (res) {
            _this.heroes = _this.heroes.filter(function (h) { return h !== hero; });
            if (_this.selectedHero == hero)
                _this.selectedHero = null;
        })
            .catch(function (error) { return _this.error = error; });
    };
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
        console.log(hero.name, 'has been selected');
    };
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        console.log(this);
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    HeroesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedHero.id]);
    };
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent = __decorate([
        core_1.Component({
            directives: [hero_detail_component_1.HeroDetailComponent],
            selector: 'my-heroes',
            styleUrls: ['app/css/heroes.component.css'],
            templateUrl: 'app/html/heroes.component.html'
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.Router])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map