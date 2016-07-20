
import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-hero-detail',
    styleUrls: ['app/css/hero-detail.component.css'],
    templateUrl: 'app/html/hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit, OnDestroy {

    @Input() hero: Hero;
    @Output() close = new EventEmitter ();
    error: any;
    navigated = false;
    sub: any;

    constructor (
        private heroService: HeroService,
        private route: ActivatedRoute
    ) {}

    // browser back button
    goBack ( savedHero: Hero = null ) {
        this.close.emit ( savedHero );
        if ( this.navigated ) window.history.back ();
    }
    save () {
        this.heroService.save ( this.hero )
            .then ( hero => {
                this.hero = hero;
                this.goBack ( hero );
            })
            .catch ( error => this.error = error );
    }
    ngOnInit () {

        this.sub = this.route.params.subscribe ( params => {
            if ( params ['id'] !== undefined )
            {

                let id = +params ['id'];

                this.navigated = true;
                this.heroService.getHero ( id )
                    .then ( hero => this.hero = hero );
            }
            else
            {
                this.navigated = false;
                this.hero = new Hero ();
            }
        });

    }
    ngOnDestroy () {
        this.sub.unsubscribe ();
    }
}
