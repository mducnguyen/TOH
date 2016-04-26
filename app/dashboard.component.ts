/**
 * Created by DucNguyenMinh on 21/04/16.
 */

import {Component, OnInit} from "angular2/core";
import {Hero} from "./hero";
import {HeroService} from "./hero.service";
import {Router} from "angular2/router";
@Component({
    selector: 'my-dashboad',
    templateUrl:'app/dashboard.component.html',
    styleUrls:['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit{

    heroes : Hero[] = [];
    errorMessage : String;
    constructor(
        private _heroService: HeroService,
        private _router: Router
    ){

    }

    ngOnInit():any {
        this._heroService.getHeroes().subscribe(heroes=> this.heroes = heroes, error => this.errorMessage = error);
    }

    gotoDetail(hero: Hero){
        let link = ['HeroDetail',{id:hero._id}]
        this._router.navigate(link);
    }

}