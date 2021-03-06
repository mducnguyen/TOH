System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', 'rxjs/add/operator/map'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, http_2, Observable_1;
    var HeroService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {}],
        execute: function() {
            HeroService = (function () {
                function HeroService(_http) {
                    this._http = _http;
                    this._heroesUrl = 'http://localhost:6003/heroes';
                }
                HeroService.prototype.getHeroes = function () {
                    // return Promise.resolve(HEROES);
                    return this._http.get(this._heroesUrl).map(this.extractData) /*.catch(this.handleError)*/;
                };
                HeroService.prototype.getHero = function (id) {
                    // return Promise.resolve(HEROES).then(
                    //     heroes => heroes.filter(hero => hero._id === _id)[0]
                    // );
                };
                HeroService.prototype.addHero = function (name) {
                    var body = JSON.stringify({ name: name });
                    var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_2.RequestOptions({ headers: headers });
                    return this._http.post(this._heroesUrl, body, options).map(this.extractData).catch(this.handleError);
                };
                HeroService.prototype.extractData = function (res) {
                    if (res.status < 200 || res.status > 300) {
                        throw new Error('Bad response status: ' + res.status);
                    }
                    var body = res.json();
                    alert(body.data);
                    return body.data || {};
                };
                HeroService.prototype.handleError = function (error) {
                    var errMsg = error.message || 'Server error';
                    console.error(errMsg);
                    return Observable_1.Observable.throw(errMsg);
                };
                HeroService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HeroService);
                return HeroService;
            }());
            exports_1("HeroService", HeroService);
        }
    }
});
//# sourceMappingURL=hero.service.js.map