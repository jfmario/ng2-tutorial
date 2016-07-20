
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Hero } from './hero';
import { HeroSearchService } from './hero-search.service';

@Component ({
    providers: [HeroSearchService],
    selector: 'hero-search',
    templateUrl: 'app/html/hero-search.component.html'
})
export class HeroSearchComponent implements OnInit {
    
    heroes: Observable<Hero>;
    
    searchSubject = new Subject<string> ();
    
    constructor (
        private heroSearchService: HeroSearchService,
        private router: Router
    ) {}
    
    gotoDetail ( hero: Hero ) {
        let link = [ '/detail', hero.id ];
        this.router.navigate ( link );
    }
    search ( term: string ) { this.searchSubject.next ( term ); }
    
    ngOnInit () {
        this.heroes = this.searchSubject.asObservable () // cast as Observable
            .debounceTime ( 300 ) // update every 300 ms
            .distinctUntilChanged () // ignore next term unless different
            .switchMap ( term => 
                term ? this.heroSearchService.search ( term ) :
                Observable.of<Hero[]>([]))
            .catch ( error => {
                console.log ( error );
                return Observable.throw ( error );
            });
    }
}