
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from './hero.service';
import { HeroDetailComponent } from './hero-detail.component';
import { Hero } from './hero';

@Component ({
    directives: [HeroDetailComponent],
    selector: 'my-heroes',
    styleUrls: ['app/css/heroes.component.css'],
    templateUrl: 'app/html/heroes.component.html'
})

export class HeroesComponent implements OnInit {
    
    addingHero = false;
    error: any;
    heroes: Hero[];
    selectedHero: Hero;

    title = "Tour of Heroes";

    constructor (
        private heroService: HeroService,
        private router: Router
    ) {}

    addHero () {
        this.addingHero = true;
        this.selectedHero = null;
    }
    close ( savedHero: Hero ) {
        this.addingHero = false;
        if ( savedHero ) this.getHeroes ();
    }
    deleteHero ( hero: Hero, event: any ) {
        
        event.stopPropagation ();
        
        this.heroService.delete ( hero )
            .then ( res => {
                this.heroes = this.heroes.filter ( h => h !== hero );
                if ( this.selectedHero == hero )
                    this.selectedHero = null;
            })
            .catch ( error => this.error = error );
    }
    onSelect( hero: Hero )
    {
        this.selectedHero = hero;
        console.log ( hero.name, 'has been selected' );
    }
    getHeroes ()
    {
        console.log ( this );
        this.heroService.getHeroes ().then ( heroes => this.heroes = heroes );
    }
    gotoDetail () {
        this.router.navigate ( [ '/detail', this.selectedHero.id ] );
    }
    ngOnInit ()
    {
        this.getHeroes ();
    }
}
