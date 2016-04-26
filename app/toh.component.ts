/**
 * Created by DucNguyenMinh on 21/04/16.
 */
import {Component} from 'angular2/core'
import {HeroListComponent} from "./../httptest/hero-list.component";
import {HTTP_PROVIDERS} from "angular2/http";
import {HeroService} from "./hero.service";
import { provide }           from 'angular2/core';
import { XHRBackend }        from 'angular2/http';

// in-memory web api imports
import { InMemoryBackendService,
    SEED_DATA }         from 'a2-in-memory-web-api/core';
import { HeroData }          from '../httptest/hero-data';

@Component({
    selector:'my-app',
    template:`
        <h1>Tour of Heroes</h1>
        <hero-list></hero-list>
    `,
    directives:[HeroListComponent],
    providers: [
        HTTP_PROVIDERS,
        HeroService,
        provide(XHRBackend, {useClass: InMemoryBackendService}),
        provide(SEED_DATA, {useClass: HeroData})
    ]
})
export class TohComponent{

}