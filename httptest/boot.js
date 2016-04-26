System.register(['angular2/platform/browser', './../app/toh.component.ts'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, toh_component_ts_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (toh_component_ts_1_1) {
                toh_component_ts_1 = toh_component_ts_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(toh_component_ts_1.TohComponent);
        }
    }
});
//# sourceMappingURL=boot.js.map