
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    getHero ( id: number ) {
        return this.getHeroes ()
            .then ( heroes => heroes.find ( hero => hero.id === id ) );
    }
    getHeroes () {
        console.log ( HEROES );
        return Promise.resolve ( HEROES );
    }
}
