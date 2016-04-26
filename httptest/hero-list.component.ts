/**
 * Created by DucNguyenMinh on 21/04/16.
 */
import {Component,OnInit} from 'angular2/core'
import {HeroService} from "./../app/hero.service";
import {Hero} from "./../app/hero";
import any = jasmine.any;

@Component({
    selector: 'hero-list',
    templateUrl: 'httptest/hero-list.component.html'
})
export class HeroListComponent implements OnInit{
    heroes:Hero[];
    errorMessage: string;

    ngOnInit():any {
       this.getHeroes();
    }

    constructor (private _heroService: HeroService){

    }


    private getHeroes() {
         // this._heroService.getHeroes().then(heroes => this.heroes = heroes)
        this._heroService.getHeroes()
            .subscribe(
                heroes => this.heroes = heroes,
                error => this.errorMessage = <any> error
            );
    }

    addHero(name:string){
        if(!name){return;}
        this._heroService.addHero(name)
            .subscribe(
                hero => this.heroes.push(hero),
                error => this.errorMessage = <any>error);
    }
}