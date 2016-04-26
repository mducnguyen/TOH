import {Injectable} from 'angular2/core';
// import {HEROES} from './mock-hero'

import {Http, Response} from 'angular2/http'
import {Headers, RequestOptions} from 'angular2/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import {Hero} from "./hero";
import { InMemoryBackendService,SEED_DATA }         from 'a2-in-memory-web-api/core';
import { HeroData }          from '../httptest/hero-data';

@Injectable()
export class HeroService{

    constructor (private _http: Http){}

    private _heroesUrl = 'http://localhost:6003/heroes';

    getHeroes():Observable<Hero[]>{
        // return Promise.resolve(HEROES);
        return this._http.get(this._heroesUrl).map(this.extractData)/*.catch(this.handleError)*/;
    }

    getHero(id:number) {
        // return Promise.resolve(HEROES).then(
        //     heroes => heroes.filter(hero => hero._id === _id)[0]
        // );
    }

    addHero(name:string):Observable<Hero> {

        let body = JSON.stringify({name});
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers});

        return this._http.post(this._heroesUrl,body,options).map(this.extractData).catch(this.handleError);
    }

    private extractData(res: Response){
        if (res.status < 200 || res.status > 300){
            throw new Error('Bad response status: '+res.status);
        }
        let body = res.json();
        alert(body.data);
        return body.data||{};
    }

    private handleError(error: any){
        let errMsg = error.message || 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}