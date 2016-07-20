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
require('rxjs/add/observable/of');
require('rxjs/add/observable/throw');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/do');
require('rxjs/add/operator/filter');
require('rxjs/add/operator/map');
require('rxjs/add/operator/switchMap');
var Observable_1 = require('rxjs/Observable');
var Subject_1 = require('rxjs/Subject');
var hero_search_service_1 = require('./hero-search.service');
var HeroSearchComponent = (function () {
    function HeroSearchComponent(heroSearchService, router) {
        this.heroSearchService = heroSearchService;
        this.router = router;
        this.searchSubject = new Subject_1.Subject();
    }
    HeroSearchComponent.prototype.gotoDetail = function (hero) {
        var link = ['/detail', hero.id];
        this.router.navigate(link);
    };
    HeroSearchComponent.prototype.search = function (term) { this.searchSubject.next(term); };
    HeroSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroes = this.searchSubject.asObservable() // cast as Observable
            .debounceTime(300) // update every 300 ms
            .distinctUntilChanged() // ignore next term unless different
            .switchMap(function (term) {
            return term ? _this.heroSearchService.search(term) :
                Observable_1.Observable.of([]);
        })
            .catch(function (error) {
            console.log(error);
            return Observable_1.Observable.throw(error);
        });
    };
    HeroSearchComponent = __decorate([
        core_1.Component({
            providers: [hero_search_service_1.HeroSearchService],
            selector: 'hero-search',
            templateUrl: 'app/html/hero-search.component.html'
        }), 
        __metadata('design:paramtypes', [hero_search_service_1.HeroSearchService, router_1.Router])
    ], HeroSearchComponent);
    return HeroSearchComponent;
}());
exports.HeroSearchComponent = HeroSearchComponent;
//# sourceMappingURL=hero-search.component.js.map