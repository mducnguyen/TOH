/**
 * Created by DucNguyenMinh on 22/04/16.
 */

import {Component} from 'angular2/core'
import {JSONP_PROVIDERS} from 'angular2/http'
import {Observable} from 'rxjs/Observable'
import {WikipediaService} from "./wikipedia.service";
import {Subject} from 'rxjs/Subject'

@Component({
    selector: 'my-app',
    template:`
        <h1>Wikipedia Demo</h1>
        <p><i>Fetches after each keystroke</i></p>
        
        <input #term (keyup)="search(term.value)">
        
        <ul>
            <li *ngFor="#item of items | async">{{item}}</li>
        </ul>
    `,
    providers: [JSONP_PROVIDERS,WikipediaService]
})
export class WikiComponent{
    constructor(private  _wikipediaService: WikipediaService){}

    private _searchTermStream = new Subject<String>();

    items: Observable<string[]> = this._searchTermStream.debounceTime(300).distinctUntilChanged().switchMap((term:string) => this._wikipediaService.search(term));

    search(term: string){
        this._searchTermStream.next(term);
    }
}