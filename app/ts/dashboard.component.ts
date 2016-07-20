
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { HeroSearchComponent } from './hero-search.component';

@Component({
    directives: [HeroSearchComponent],
    selector: 'my-dashboard',
    styleUrls: ['app/css/dashboard.component.css'],
    templateUrl: 'app/html/dashboard.component.html'
})

export class DashboardComponent implements OnInit {

    heroes: Hero [] = [];

    constructor (
        private heroService: HeroService,
        private router: Router
    ) {}

    gotoDetail ( hero: Hero ) {
        let link = [ '/detail', hero.id ];
        this.router.navigate ( link );
    }
    ngOnInit () {
        this.heroService.getHeroes ()
            .then ( heroes => this.heroes = heroes.slice ( 1, 5 ) );
    }
}
