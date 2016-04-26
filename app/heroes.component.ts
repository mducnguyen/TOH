import {Component} from 'angular2/core'
import {Hero} from "./hero";
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service'
import {OnInit} from 'angular2/core';
import {Router} from "angular2/router";

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls:['app/heroes.component.css' ],
    directives: [HeroDetailComponent],
})
export class HeroesComponent implements OnInit {
    ngOnInit() {
        this.getHeroes();
    }

    title = 'Tour of Heroes';
    hero:Hero;

    selectedHero:Hero;

    heroes:Hero[];

    errorMessage: string;

    constructor(private _heroService:HeroService, private _router: Router) {
    }

    onSelect(hero:Hero) {
        this.selectedHero = hero;
    }

    getHeroes() {
        this._heroService.getHeroes().subscribe(
            heroes => this.heroes = heroes,
            error => this.errorMessage = <any> error
        );
    }

    gotoDetail() {
        this._router.navigate(['HeroDetail', { id: this.selectedHero._id }]);
    }

}

