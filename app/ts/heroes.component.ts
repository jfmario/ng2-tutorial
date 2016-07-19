
import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { HeroDetailComponent } from './hero-detail.component';
import { Hero } from './hero';

@Component ({
    directives: [HeroDetailComponent],
    selector: 'my-heroes',
    styles: [
        `
        .selected {
            background-color: #cfd8dc !important;
            color: white;
        }
        .heroes {
            list-style-type: none;
            margin: 0 0 2em 0;
            padding: 0;
            width: 15em;
        }
        .heroes li {
            background-color: #eee;
            border-radius: 4px;
            cursor: pointer;
            height: 1.6em;
            left: 0;
            margin: .5em;
            padding: .3em 0;
            position: relative;
        }
        .heroes li.selected:hover {
            background-color: #bbd8dc !important;
            color: white;
        }
        .heroes li:hover {
            background-color: #ddd;
            color: #607d8b;
            left: .1em;
        }
        .heroes .text {
            position: relative;
            top: -3px;
        }
        .heroes .badge {
            background-color: #607d8b;
            border-radius: 4px 0 0 4px;
            color: white;
            display: inline-block;
            font-size: small;
            height: 1.8em;
            line-height: 1em;
            margin-right: 0.8em;
            padding: 0.8em 0. em 0 0.7em;
            position: relative;
            left: -1px;
            top: -4px;
        }
        `
    ],
    template: `
        <h1>{{ title }}</h1>

        <h2>HS Heroes</h2>

        <ul class="heroes">
            <li
                *ngFor="let hero of heroes"
                [class.selected]="hero === selectedHero"
                (click)="onSelect(hero)"
            >
                <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li>
        </ul>

        <my-hero-detail [hero]="selectedHero"></my-hero-detail>
    `
})

export class HeroesComponent implements OnInit {

    heroes: Hero[];
    selectedHero: Hero;

    title = "Tour of Heroes";

    constructor( private heroService: HeroService ) {}

    onSelect( hero: Hero )
    {
        this.selectedHero = hero;
    }
    getHeroes ()
    {
        console.log ( this );
        this.heroService.getHeroes ().then ( heroes => this.heroes = heroes );
    }
    ngOnInit ()
    {
        this.getHeroes ();
    }
}
