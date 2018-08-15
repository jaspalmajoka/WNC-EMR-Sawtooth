webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transactions_transaction_detail_transaction_detail_component__ = __webpack_require__("./src/app/transactions/transaction-detail/transaction-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__batches_batch_detail_batch_detail_component__ = __webpack_require__("./src/app/batches/batch-detail/batch-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blocks_block_detail_block_detail_component__ = __webpack_require__("./src/app/blocks/block-detail/block-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__explorer_explorer_component__ = __webpack_require__("./src/app/explorer/explorer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__states_state_monitor_state_monitor_component__ = __webpack_require__("./src/app/states/state-monitor/state-monitor.component.ts");
/**
 * Copyright 2017 PokitDok, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ------------------------------------------------------------------------------
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_5__explorer_explorer_component__["a" /* ExplorerComponent */],
        pathMatch: 'full'
    },
    {
        path: 'transactions/:id',
        component: __WEBPACK_IMPORTED_MODULE_2__transactions_transaction_detail_transaction_detail_component__["a" /* TransactionDetailComponent */],
        pathMatch: 'full'
    },
    {
        path: 'batches/:id',
        component: __WEBPACK_IMPORTED_MODULE_3__batches_batch_detail_batch_detail_component__["a" /* BatchDetailComponent */],
        pathMatch: 'full'
    },
    {
        path: 'blocks/:id',
        component: __WEBPACK_IMPORTED_MODULE_4__blocks_block_detail_block_detail_component__["a" /* BlockDetailComponent */],
        pathMatch: 'full'
    },
    {
        path: 'state-monitor',
        component: __WEBPACK_IMPORTED_MODULE_6__states_state_monitor_state_monitor_component__["a" /* StateMonitorComponent */],
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: ''
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n  Copyright 2017 PokitDok, Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n      http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n-->\n\n<nav class=\"se-navbar\">\n  <a mat-button\n     class=\"se-button lg lowercase\"\n     routerLink=\"/\"\n     aria-label=\"Sawtooth\">\n    <img class=\"se-dokchain-logo\"\n         src=\"../../../assets/images/sawtooth-nav-logo-sm.png\"\n         alt=\"Sawtooth\">\n  </a>\n  <a mat-button class=\"se-button\" routerLink=\"\">Explorer</a>\n  <a mat-button class=\"se-button\" routerLink=\"state-monitor\">State Monitor</a>\n  <div class=\"flex-spacer\"></div>\n</nav>\n\n<ng-container class=\"loading\" *ngIf=\"loading\">\n  <div class=\"loader\"></div>\n</ng-container>\n\n<router-outlet *ngIf=\"!loading\"></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Copyright 2017 PokitDok, Inc.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n * ------------------------------------------------------------------------------\n */\n/**\n * Copyright 2017 PokitDok, Inc.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n * ------------------------------------------------------------------------------\n */\n/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n.mat-elevation-z0 {\n  -webkit-box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z1 {\n  -webkit-box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z2 {\n  -webkit-box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z3 {\n  -webkit-box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z4 {\n  -webkit-box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z5 {\n  -webkit-box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z6 {\n  -webkit-box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z7 {\n  -webkit-box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z8 {\n  -webkit-box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z9 {\n  -webkit-box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z10 {\n  -webkit-box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z11 {\n  -webkit-box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z12 {\n  -webkit-box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z13 {\n  -webkit-box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z14 {\n  -webkit-box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z15 {\n  -webkit-box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z16 {\n  -webkit-box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z17 {\n  -webkit-box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z18 {\n  -webkit-box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z19 {\n  -webkit-box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z20 {\n  -webkit-box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z21 {\n  -webkit-box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z22 {\n  -webkit-box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z23 {\n  -webkit-box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z24 {\n  -webkit-box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }\n.mat-h1, .mat-headline, .mat-typography h1 {\n  font: 400 24px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h2, .mat-title, .mat-typography h2 {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h3, .mat-subheading-2, .mat-typography h3 {\n  font: 400 16px/28px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h4, .mat-subheading-1, .mat-typography h4 {\n  font: 400 15px/24px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h5, .mat-typography h5 {\n  font-size: 11.62px;\n  font-weight: 400;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  line-height: 20px;\n  margin: 0 0 12px; }\n.mat-h6, .mat-typography h6 {\n  font-size: 9.38px;\n  font-weight: 400;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  line-height: 20px;\n  margin: 0 0 12px; }\n.mat-body-strong, .mat-body-2 {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-body, .mat-body-1, .mat-typography {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-body p, .mat-body-1 p, .mat-typography p {\n    margin: 0 0 12px; }\n.mat-small, .mat-caption {\n  font: 400 12px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-display-4, .mat-typography .mat-display-4 {\n  font: 300 112px/112px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 56px;\n  letter-spacing: -0.05em; }\n.mat-display-3, .mat-typography .mat-display-3 {\n  font: 400 56px/56px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px;\n  letter-spacing: -0.02em; }\n.mat-display-2, .mat-typography .mat-display-2 {\n  font: 400 45px/48px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px;\n  letter-spacing: -0.005em; }\n.mat-display-1, .mat-typography .mat-display-1 {\n  font: 400 34px/40px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px; }\n.mat-button, .mat-raised-button, .mat-icon-button, .mat-fab, .mat-mini-fab {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n.mat-button-toggle {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-card {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-card-title {\n  font-size: 24px;\n  font-weight: 400; }\n.mat-card-subtitle,\n.mat-card-content,\n.mat-card-header .mat-card-title {\n  font-size: 14px; }\n.mat-checkbox {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-checkbox-layout .mat-checkbox-label {\n  line-height: 24px; }\n.mat-chip {\n  font-size: 13px;\n  line-height: 18px; }\n.mat-chip .mat-chip-remove.mat-icon {\n    font-size: 18px; }\n.mat-table {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-header-cell {\n  font-size: 12px;\n  font-weight: 500; }\n.mat-cell {\n  font-size: 14px; }\n.mat-calendar {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-calendar-body {\n  font-size: 13px; }\n.mat-calendar-body-label,\n.mat-calendar-period-button {\n  font-size: 14px;\n  font-weight: 500; }\n.mat-calendar-table-header th {\n  font-size: 11px;\n  font-weight: 400; }\n.mat-dialog-title {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-expansion-panel-header {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 15px;\n  font-weight: 400; }\n.mat-expansion-panel-content {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-form-field {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: inherit;\n  font-weight: 400;\n  line-height: 1.125; }\n.mat-form-field-wrapper {\n  padding-bottom: 1.25em; }\n.mat-form-field-prefix .mat-icon,\n.mat-form-field-suffix .mat-icon {\n  font-size: 150%;\n  line-height: 1.125; }\n.mat-form-field-prefix .mat-icon-button,\n.mat-form-field-suffix .mat-icon-button {\n  height: 1.5em;\n  width: 1.5em; }\n.mat-form-field-prefix .mat-icon-button .mat-icon,\n  .mat-form-field-suffix .mat-icon-button .mat-icon {\n    height: 1.125em;\n    line-height: 1.125; }\n.mat-form-field-infix {\n  padding: 0.4375em 0;\n  border-top: 0.84375em solid transparent; }\n.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-placeholder {\n  -webkit-transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n          transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n  -ms-transform: translateY(-1.28125em) scale(0.75);\n  width: 133.33333333%; }\n.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill + .mat-form-field-placeholder-wrapper\n.mat-form-field-placeholder {\n  -webkit-transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n          transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n  -ms-transform: translateY(-1.28125em) scale(0.75);\n  width: 133.33333333%; }\n.mat-form-field-placeholder-wrapper {\n  top: -0.84375em;\n  padding-top: 0.84375em; }\n.mat-form-field-placeholder {\n  top: 1.28125em; }\n.mat-form-field-underline {\n  bottom: 1.25em; }\n.mat-form-field-subscript-wrapper {\n  font-size: 75%;\n  margin-top: 0.54166667em;\n  top: calc(100% - 1.66666667em); }\n.mat-grid-tile-header,\n.mat-grid-tile-footer {\n  font-size: 14px; }\n.mat-grid-tile-header .mat-line,\n  .mat-grid-tile-footer .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n.mat-grid-tile-header .mat-line:nth-child(n+2),\n    .mat-grid-tile-footer .mat-line:nth-child(n+2) {\n      font-size: 12px; }\ninput.mat-input-element {\n  margin-top: -0.0625em; }\n.mat-menu-item {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px;\n  font-weight: 400; }\n.mat-paginator,\n.mat-paginator-page-size .mat-select-trigger {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px; }\n.mat-radio-button {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-select {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-select-trigger {\n  height: 1.125em; }\n.mat-slide-toggle-content {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-slider-thumb-label-text {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 500; }\n.mat-stepper-vertical, .mat-stepper-horizontal {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-step-label {\n  font-size: 14px;\n  font-weight: 400; }\n.mat-step-label-selected {\n  font-size: 14px;\n  font-weight: 500; }\n.mat-tab-group {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-tab-label, .mat-tab-link {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n.mat-toolbar,\n.mat-toolbar h1,\n.mat-toolbar h2,\n.mat-toolbar h3,\n.mat-toolbar h4,\n.mat-toolbar h5,\n.mat-toolbar h6 {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0; }\n.mat-tooltip {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 10px;\n  padding-top: 6px;\n  padding-bottom: 6px; }\n.mat-list-item {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-list-option {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-list .mat-list-item, .mat-nav-list .mat-list-item, .mat-selection-list .mat-list-item {\n  font-size: 16px; }\n.mat-list .mat-list-item .mat-line, .mat-nav-list .mat-list-item .mat-line, .mat-selection-list .mat-list-item .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n.mat-list .mat-list-item .mat-line:nth-child(n+2), .mat-nav-list .mat-list-item .mat-line:nth-child(n+2), .mat-selection-list .mat-list-item .mat-line:nth-child(n+2) {\n      font-size: 14px; }\n.mat-list .mat-list-option, .mat-nav-list .mat-list-option, .mat-selection-list .mat-list-option {\n  font-size: 16px; }\n.mat-list .mat-list-option .mat-line, .mat-nav-list .mat-list-option .mat-line, .mat-selection-list .mat-list-option .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n.mat-list .mat-list-option .mat-line:nth-child(n+2), .mat-nav-list .mat-list-option .mat-line:nth-child(n+2), .mat-selection-list .mat-list-option .mat-line:nth-child(n+2) {\n      font-size: 14px; }\n.mat-list .mat-subheader, .mat-nav-list .mat-subheader, .mat-selection-list .mat-subheader {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n.mat-list[dense] .mat-list-item, .mat-nav-list[dense] .mat-list-item, .mat-selection-list[dense] .mat-list-item {\n  font-size: 12px; }\n.mat-list[dense] .mat-list-item .mat-line, .mat-nav-list[dense] .mat-list-item .mat-line, .mat-selection-list[dense] .mat-list-item .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n.mat-list[dense] .mat-list-item .mat-line:nth-child(n+2), .mat-nav-list[dense] .mat-list-item .mat-line:nth-child(n+2), .mat-selection-list[dense] .mat-list-item .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n.mat-list[dense] .mat-list-option, .mat-nav-list[dense] .mat-list-option, .mat-selection-list[dense] .mat-list-option {\n  font-size: 12px; }\n.mat-list[dense] .mat-list-option .mat-line, .mat-nav-list[dense] .mat-list-option .mat-line, .mat-selection-list[dense] .mat-list-option .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n.mat-list[dense] .mat-list-option .mat-line:nth-child(n+2), .mat-nav-list[dense] .mat-list-option .mat-line:nth-child(n+2), .mat-selection-list[dense] .mat-list-option .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n.mat-list[dense] .mat-subheader, .mat-nav-list[dense] .mat-subheader, .mat-selection-list[dense] .mat-subheader {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 500; }\n.mat-option {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px; }\n.mat-optgroup-label {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-simple-snackbar {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px; }\n.mat-simple-snackbar-action {\n  line-height: 1;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 500; }\n.mat-ripple {\n  overflow: hidden; }\n@media screen and (-ms-high-contrast: active) {\n    .mat-ripple {\n      display: none; } }\n.mat-ripple.mat-ripple-unbounded {\n  overflow: visible; }\n.mat-ripple-element {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  -webkit-transition: opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  -webkit-transform: scale(0);\n          transform: scale(0); }\n.mat-option {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  line-height: 48px;\n  height: 48px;\n  padding: 0 16px;\n  text-align: left;\n  text-decoration: none;\n  position: relative;\n  cursor: pointer;\n  outline: none; }\n.mat-option[disabled] {\n    cursor: default; }\n[dir='rtl'] .mat-option {\n    text-align: right; }\n.mat-option .mat-icon {\n    margin-right: 16px; }\n[dir='rtl'] .mat-option .mat-icon {\n      margin-left: 16px;\n      margin-right: 0; }\n.mat-option[aria-disabled='true'] {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    cursor: default; }\n.mat-optgroup .mat-option:not(.mat-option-multiple) {\n    padding-left: 32px; }\n[dir='rtl'] .mat-optgroup .mat-option:not(.mat-option-multiple) {\n      padding-left: 16px;\n      padding-right: 32px; }\n.mat-option-text {\n  display: inline-block; }\n.mat-option-ripple {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none; }\n@media screen and (-ms-high-contrast: active) {\n    .mat-option-ripple {\n      opacity: 0.5; } }\n.mat-option-pseudo-checkbox {\n  margin-right: 8px; }\n[dir='rtl'] .mat-option-pseudo-checkbox {\n    margin-left: 8px;\n    margin-right: 0; }\n.mat-optgroup-label {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  line-height: 48px;\n  height: 48px;\n  padding: 0 16px;\n  text-align: left;\n  text-decoration: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  cursor: default; }\n.mat-optgroup-label[disabled] {\n    cursor: default; }\n[dir='rtl'] .mat-optgroup-label {\n    text-align: right; }\n.mat-optgroup-label .mat-icon {\n    margin-right: 16px; }\n[dir='rtl'] .mat-optgroup-label .mat-icon {\n      margin-left: 16px;\n      margin-right: 0; }\n.cdk-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n.cdk-overlay-container, .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n.cdk-overlay-container {\n  position: fixed;\n  z-index: 1000; }\n.cdk-global-overlay-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  z-index: 1000; }\n.cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  z-index: 1000; }\n.cdk-overlay-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0; }\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n    opacity: 0.48; }\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.6); }\n.cdk-overlay-transparent-backdrop {\n  background: none; }\n.cdk-global-scrollblock {\n  position: fixed;\n  width: 100%;\n  overflow-y: scroll; }\n.mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.1); }\n.mat-option {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-option:hover:not(.mat-option-disabled), .mat-option:focus:not(.mat-option-disabled) {\n    background: rgba(0, 0, 0, 0.04); }\n.mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\n    color: #1067a8; }\n.mat-accent .mat-option.mat-selected:not(.mat-option-disabled) {\n    color: #54b7df; }\n.mat-warn .mat-option.mat-selected:not(.mat-option-disabled) {\n    color: #f44336; }\n.mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled) {\n    background: rgba(0, 0, 0, 0.04); }\n.mat-option.mat-active {\n    background: rgba(0, 0, 0, 0.04);\n    color: rgba(0, 0, 0, 0.87); }\n.mat-option.mat-option-disabled {\n    color: rgba(0, 0, 0, 0.38); }\n.mat-optgroup-label {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-optgroup-disabled .mat-optgroup-label {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-pseudo-checkbox {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-pseudo-checkbox::after {\n    color: #fafafa; }\n.mat-pseudo-checkbox-checked,\n.mat-pseudo-checkbox-indeterminate,\n.mat-accent .mat-pseudo-checkbox-checked,\n.mat-accent .mat-pseudo-checkbox-indeterminate {\n  background: #54b7df; }\n.mat-primary .mat-pseudo-checkbox-checked,\n.mat-primary .mat-pseudo-checkbox-indeterminate {\n  background: #1067a8; }\n.mat-warn .mat-pseudo-checkbox-checked,\n.mat-warn .mat-pseudo-checkbox-indeterminate {\n  background: #f44336; }\n.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,\n.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {\n  background: #b0b0b0; }\n.mat-app-background {\n  background-color: #fafafa; }\n.mat-theme-loaded-marker {\n  display: none; }\n.mat-autocomplete-panel {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover) {\n    background: white; }\n.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled) {\n      color: rgba(0, 0, 0, 0.87); }\n.mat-button, .mat-icon-button {\n  background: transparent; }\n.mat-button.mat-primary .mat-button-focus-overlay, .mat-icon-button.mat-primary .mat-button-focus-overlay {\n    background-color: rgba(16, 103, 168, 0.12); }\n.mat-button.mat-accent .mat-button-focus-overlay, .mat-icon-button.mat-accent .mat-button-focus-overlay {\n    background-color: rgba(84, 183, 223, 0.12); }\n.mat-button.mat-warn .mat-button-focus-overlay, .mat-icon-button.mat-warn .mat-button-focus-overlay {\n    background-color: rgba(244, 67, 54, 0.12); }\n.mat-button[disabled] .mat-button-focus-overlay, .mat-icon-button[disabled] .mat-button-focus-overlay {\n    background-color: transparent; }\n.mat-button.mat-primary, .mat-icon-button.mat-primary {\n    color: #1067a8; }\n.mat-button.mat-accent, .mat-icon-button.mat-accent {\n    color: #54b7df; }\n.mat-button.mat-warn, .mat-icon-button.mat-warn {\n    color: #f44336; }\n.mat-button.mat-primary[disabled], .mat-button.mat-accent[disabled], .mat-button.mat-warn[disabled], .mat-button[disabled][disabled], .mat-icon-button.mat-primary[disabled], .mat-icon-button.mat-accent[disabled], .mat-icon-button.mat-warn[disabled], .mat-icon-button[disabled][disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n.mat-raised-button, .mat-fab, .mat-mini-fab {\n  color: rgba(0, 0, 0, 0.87);\n  background-color: white; }\n.mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n    color: white; }\n.mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n    color: white; }\n.mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n    color: white; }\n.mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n.mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n    background-color: #1067a8; }\n.mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n    background-color: #54b7df; }\n.mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n    background-color: #f44336; }\n.mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled] {\n    background-color: rgba(0, 0, 0, 0.12); }\n.mat-raised-button.mat-primary .mat-ripple-element, .mat-fab.mat-primary .mat-ripple-element, .mat-mini-fab.mat-primary .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.2); }\n.mat-raised-button.mat-accent .mat-ripple-element, .mat-fab.mat-accent .mat-ripple-element, .mat-mini-fab.mat-accent .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.2); }\n.mat-raised-button.mat-warn .mat-ripple-element, .mat-fab.mat-warn .mat-ripple-element, .mat-mini-fab.mat-warn .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.2); }\n.mat-button.mat-primary .mat-ripple-element {\n  background-color: rgba(16, 103, 168, 0.1); }\n.mat-button.mat-accent .mat-ripple-element {\n  background-color: rgba(84, 183, 223, 0.1); }\n.mat-button.mat-warn .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.1); }\n.mat-icon-button.mat-primary .mat-ripple-element {\n  background-color: rgba(16, 103, 168, 0.2); }\n.mat-icon-button.mat-accent .mat-ripple-element {\n  background-color: rgba(84, 183, 223, 0.2); }\n.mat-icon-button.mat-warn .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.2); }\n.mat-button-toggle {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-button-toggle.cdk-focused .mat-button-toggle-focus-overlay {\n    background-color: rgba(0, 0, 0, 0.06); }\n.mat-button-toggle-checked {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.54); }\n.mat-button-toggle-disabled {\n  background-color: #eeeeee;\n  color: rgba(0, 0, 0, 0.38); }\n.mat-button-toggle-disabled.mat-button-toggle-checked {\n    background-color: #bdbdbd; }\n.mat-card {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-card-subtitle {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-checkbox-frame {\n  border-color: rgba(0, 0, 0, 0.54); }\n.mat-checkbox-checkmark {\n  fill: #fafafa; }\n.mat-checkbox-checkmark-path {\n  stroke: #fafafa !important; }\n.mat-checkbox-mixedmark {\n  background-color: #fafafa; }\n.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background, .mat-checkbox-checked.mat-primary .mat-checkbox-background {\n  background-color: #1067a8; }\n.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background, .mat-checkbox-checked.mat-accent .mat-checkbox-background {\n  background-color: #54b7df; }\n.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background, .mat-checkbox-checked.mat-warn .mat-checkbox-background {\n  background-color: #f44336; }\n.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background, .mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background {\n  background-color: #b0b0b0; }\n.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame {\n  border-color: #b0b0b0; }\n.mat-checkbox-disabled .mat-checkbox-label {\n  color: #b0b0b0; }\n.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(16, 103, 168, 0.26); }\n.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(84, 183, 223, 0.26); }\n.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.26); }\n.mat-chip:not(.mat-basic-chip) {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-chip:not(.mat-basic-chip) .mat-chip-remove {\n    color: rgba(0, 0, 0, 0.87);\n    opacity: 0.4; }\n.mat-chip:not(.mat-basic-chip) .mat-chip-remove:hover {\n    opacity: 0.54; }\n.mat-chip.mat-chip-selected.mat-primary {\n  background-color: #1067a8;\n  color: white; }\n.mat-chip.mat-chip-selected.mat-primary .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n.mat-chip.mat-chip-selected.mat-primary .mat-chip-remove:hover {\n    opacity: 0.54; }\n.mat-chip.mat-chip-selected.mat-warn {\n  background-color: #f44336;\n  color: white; }\n.mat-chip.mat-chip-selected.mat-warn .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n.mat-chip.mat-chip-selected.mat-warn .mat-chip-remove:hover {\n    opacity: 0.54; }\n.mat-chip.mat-chip-selected.mat-accent {\n  background-color: #54b7df;\n  color: white; }\n.mat-chip.mat-chip-selected.mat-accent .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n.mat-chip.mat-chip-selected.mat-accent .mat-chip-remove:hover {\n    opacity: 0.54; }\n.mat-table {\n  background: white; }\n.mat-row, .mat-header-row {\n  border-bottom-color: rgba(0, 0, 0, 0.12); }\n.mat-header-cell {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-cell {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-datepicker-content {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-calendar-arrow {\n  border-top-color: rgba(0, 0, 0, 0.54); }\n.mat-calendar-next-button,\n.mat-calendar-previous-button {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-calendar-table-header {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-calendar-table-header-divider::after {\n  background: rgba(0, 0, 0, 0.12); }\n.mat-calendar-body-label {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-calendar-body-cell-content {\n  color: rgba(0, 0, 0, 0.87);\n  border-color: transparent; }\n.mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n    color: rgba(0, 0, 0, 0.38); }\n:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),\n.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),\n.cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n  background-color: rgba(0, 0, 0, 0.04); }\n.mat-calendar-body-selected {\n  background-color: #1067a8;\n  color: white; }\n.mat-calendar-body-disabled > .mat-calendar-body-selected {\n  background-color: rgba(16, 103, 168, 0.4); }\n.mat-calendar-body-today:not(.mat-calendar-body-selected) {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-calendar-body-today.mat-calendar-body-selected {\n  -webkit-box-shadow: inset 0 0 0 1px white;\n          box-shadow: inset 0 0 0 1px white; }\n.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected) {\n  border-color: rgba(0, 0, 0, 0.18); }\n.mat-dialog-container {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-expansion-panel {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-action-row {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-keyboard-focused, .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-program-focused, .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']):hover {\n  background: rgba(0, 0, 0, 0.04); }\n.mat-expansion-panel-header-title {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-expansion-panel-header-description,\n.mat-expansion-indicator::after {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-expansion-panel-header[aria-disabled='true'] {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-title,\n  .mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-description {\n    color: inherit; }\n.mat-form-field-placeholder {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-hint {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-focused .mat-form-field-placeholder {\n  color: #1067a8; }\n.mat-focused .mat-form-field-placeholder.mat-accent {\n    color: #54b7df; }\n.mat-focused .mat-form-field-placeholder.mat-warn {\n    color: #f44336; }\n.mat-focused .mat-form-field-required-marker {\n  color: #54b7df; }\n.mat-form-field-underline {\n  background-color: rgba(0, 0, 0, 0.42); }\n.mat-form-field-disabled .mat-form-field-underline {\n  background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.42)), color-stop(33%, rgba(0, 0, 0, 0.42)), color-stop(0%, transparent));\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);\n  background-size: 4px 1px;\n  background-repeat: repeat-x; }\n.mat-form-field-ripple {\n  background-color: #1067a8; }\n.mat-form-field-ripple.mat-accent {\n    background-color: #54b7df; }\n.mat-form-field-ripple.mat-warn {\n    background-color: #f44336; }\n.mat-form-field-invalid .mat-form-field-placeholder {\n  color: #f44336; }\n.mat-form-field-invalid .mat-form-field-placeholder.mat-accent,\n  .mat-form-field-invalid .mat-form-field-placeholder .mat-form-field-required-marker {\n    color: #f44336; }\n.mat-form-field-invalid .mat-form-field-ripple {\n  background-color: #f44336; }\n.mat-error {\n  color: #f44336; }\n.mat-icon.mat-primary {\n  color: #1067a8; }\n.mat-icon.mat-accent {\n  color: #54b7df; }\n.mat-icon.mat-warn {\n  color: #f44336; }\n.mat-input-element:disabled {\n  color: rgba(0, 0, 0, 0.42); }\n.mat-list .mat-list-item, .mat-nav-list .mat-list-item, .mat-selection-list .mat-list-item {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-list .mat-list-option, .mat-nav-list .mat-list-option, .mat-selection-list .mat-list-option {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-list .mat-subheader, .mat-nav-list .mat-subheader, .mat-selection-list .mat-subheader {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-list-item-disabled {\n  background-color: #eeeeee; }\n.mat-divider {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n.mat-nav-list .mat-list-item {\n  outline: none; }\n.mat-nav-list .mat-list-item:hover, .mat-nav-list .mat-list-item.mat-list-item-focus {\n    background: rgba(0, 0, 0, 0.04); }\n.mat-list-option {\n  outline: none; }\n.mat-list-option:hover, .mat-list-option.mat-list-item-focus {\n    background: rgba(0, 0, 0, 0.04); }\n.mat-menu-panel {\n  background: white; }\n.mat-menu-item {\n  background: transparent;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-menu-item[disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n.mat-menu-item .mat-icon,\n.mat-menu-item-submenu-trigger::after {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-menu-item:hover:not([disabled]),\n.mat-menu-item:focus:not([disabled]),\n.mat-menu-item-highlighted:not([disabled]) {\n  background: rgba(0, 0, 0, 0.04); }\n.mat-paginator {\n  background: white; }\n.mat-paginator,\n.mat-paginator-page-size .mat-select-trigger {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-paginator-increment,\n.mat-paginator-decrement {\n  border-top: 2px solid rgba(0, 0, 0, 0.54);\n  border-right: 2px solid rgba(0, 0, 0, 0.54); }\n.mat-icon-button[disabled] .mat-paginator-increment,\n.mat-icon-button[disabled] .mat-paginator-decrement {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-progress-bar-background {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27%23a0c8e5%27%2F%3E%3C%2Fsvg%3E\"); }\n.mat-progress-bar-buffer {\n  background-color: #a0c8e5; }\n.mat-progress-bar-fill::after {\n  background-color: #1067a8; }\n.mat-progress-bar.mat-accent .mat-progress-bar-background {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27%23bae4f6%27%2F%3E%3C%2Fsvg%3E\"); }\n.mat-progress-bar.mat-accent .mat-progress-bar-buffer {\n  background-color: #bae4f6; }\n.mat-progress-bar.mat-accent .mat-progress-bar-fill::after {\n  background-color: #54b7df; }\n.mat-progress-bar.mat-warn .mat-progress-bar-background {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27%23ffcdd2%27%2F%3E%3C%2Fsvg%3E\"); }\n.mat-progress-bar.mat-warn .mat-progress-bar-buffer {\n  background-color: #ffcdd2; }\n.mat-progress-bar.mat-warn .mat-progress-bar-fill::after {\n  background-color: #f44336; }\n.mat-progress-spinner circle, .mat-spinner circle {\n  stroke: #1067a8; }\n.mat-progress-spinner.mat-accent circle, .mat-spinner.mat-accent circle {\n  stroke: #54b7df; }\n.mat-progress-spinner.mat-warn circle, .mat-spinner.mat-warn circle {\n  stroke: #f44336; }\n.mat-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.54); }\n.mat-radio-disabled .mat-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-radio-disabled .mat-radio-ripple .mat-ripple-element, .mat-radio-disabled .mat-radio-inner-circle {\n  background-color: rgba(0, 0, 0, 0.38); }\n.mat-radio-disabled .mat-radio-label-content {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #1067a8; }\n.mat-radio-button.mat-primary .mat-radio-inner-circle {\n  background-color: #1067a8; }\n.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(16, 103, 168, 0.26); }\n.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #54b7df; }\n.mat-radio-button.mat-accent .mat-radio-inner-circle {\n  background-color: #54b7df; }\n.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(84, 183, 223, 0.26); }\n.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #f44336; }\n.mat-radio-button.mat-warn .mat-radio-inner-circle {\n  background-color: #f44336; }\n.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.26); }\n.mat-select-disabled .mat-select-value,\n.mat-select-arrow {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-select-content, .mat-select-panel-done-animating {\n  background: white; }\n.mat-select-value {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple) {\n  background: rgba(0, 0, 0, 0.12); }\n.mat-form-field.mat-focused.mat-primary .mat-select-arrow {\n  color: #1067a8; }\n.mat-form-field.mat-focused.mat-accent .mat-select-arrow {\n  color: #54b7df; }\n.mat-form-field.mat-focused.mat-warn .mat-select-arrow {\n  color: #f44336; }\n.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow {\n  color: #f44336; }\n.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-select.mat-select-disabled .mat-select-arrow {\n  color: #f44336; }\n.mat-drawer-container {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-drawer {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-drawer.mat-drawer-push {\n    background-color: white; }\n.mat-drawer-backdrop.mat-drawer-shown {\n  background-color: rgba(0, 0, 0, 0.6); }\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #54b7df; }\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(84, 183, 223, 0.5); }\n.mat-slide-toggle:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n.mat-slide-toggle .mat-ripple-element {\n  background-color: rgba(84, 183, 223, 0.12); }\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #1067a8; }\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(16, 103, 168, 0.5); }\n.mat-slide-toggle.mat-primary:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n.mat-slide-toggle.mat-primary .mat-ripple-element {\n  background-color: rgba(16, 103, 168, 0.12); }\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #f44336; }\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(244, 67, 54, 0.5); }\n.mat-slide-toggle.mat-warn:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n.mat-slide-toggle.mat-warn .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.12); }\n.mat-disabled .mat-slide-toggle-thumb {\n  background-color: #bdbdbd; }\n.mat-disabled .mat-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.1); }\n.mat-slide-toggle-thumb {\n  background-color: #fafafa; }\n.mat-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.38); }\n.mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.26); }\n.mat-primary .mat-slider-track-fill,\n.mat-primary .mat-slider-thumb,\n.mat-primary .mat-slider-thumb-label {\n  background-color: #1067a8; }\n.mat-primary .mat-slider-thumb-label-text {\n  color: white; }\n.mat-accent .mat-slider-track-fill,\n.mat-accent .mat-slider-thumb,\n.mat-accent .mat-slider-thumb-label {\n  background-color: #54b7df; }\n.mat-accent .mat-slider-thumb-label-text {\n  color: white; }\n.mat-warn .mat-slider-track-fill,\n.mat-warn .mat-slider-thumb,\n.mat-warn .mat-slider-thumb-label {\n  background-color: #f44336; }\n.mat-warn .mat-slider-thumb-label-text {\n  color: white; }\n.mat-slider-focus-ring {\n  background-color: rgba(84, 183, 223, 0.2); }\n.mat-slider:hover .mat-slider-track-background,\n.cdk-focused .mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.38); }\n.mat-slider-disabled .mat-slider-track-background,\n.mat-slider-disabled .mat-slider-track-fill,\n.mat-slider-disabled .mat-slider-thumb {\n  background-color: rgba(0, 0, 0, 0.26); }\n.mat-slider-disabled:hover .mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.26); }\n.mat-slider-min-value .mat-slider-focus-ring {\n  background-color: rgba(0, 0, 0, 0.12); }\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label {\n  background-color: rgba(0, 0, 0, 0.87); }\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label {\n  background-color: rgba(0, 0, 0, 0.26); }\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.26);\n  background-color: transparent; }\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.26); }\n.mat-slider-has-ticks .mat-slider-wrapper::after {\n  border-color: rgba(0, 0, 0, 0.7); }\n.mat-slider-horizontal .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent);\n  background-image: -moz-repeating-linear-gradient(0.0001deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent); }\n.mat-slider-vertical .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent); }\n.mat-step-header.cdk-keyboard-focused, .mat-step-header.cdk-program-focused, .mat-step-header:hover {\n  background-color: rgba(0, 0, 0, 0.04); }\n.mat-step-header .mat-step-label,\n.mat-step-header .mat-step-optional {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-step-header .mat-step-icon {\n  background-color: #1067a8;\n  color: white; }\n.mat-step-header .mat-step-icon-not-touched {\n  background-color: rgba(0, 0, 0, 0.38);\n  color: white; }\n.mat-step-header .mat-step-label.mat-step-label-active {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-stepper-horizontal, .mat-stepper-vertical {\n  background-color: white; }\n.mat-stepper-vertical-line::before {\n  border-left-color: rgba(0, 0, 0, 0.12); }\n.mat-stepper-horizontal-line {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n.mat-tab-nav-bar,\n.mat-tab-header {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n.mat-tab-group-inverted-header .mat-tab-nav-bar,\n.mat-tab-group-inverted-header .mat-tab-header {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  border-bottom: none; }\n.mat-tab-label, .mat-tab-link {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-tab-label.mat-tab-disabled, .mat-tab-link.mat-tab-disabled {\n    color: rgba(0, 0, 0, 0.38); }\n.mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.87); }\n.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-tab-group[class*='mat-background-'] .mat-tab-header,\n.mat-tab-nav-bar[class*='mat-background-'] {\n  border-bottom: none;\n  border-top: none; }\n.mat-tab-group.mat-primary .mat-tab-label:focus, .mat-tab-group.mat-primary .mat-tab-link:focus, .mat-tab-nav-bar.mat-primary .mat-tab-label:focus, .mat-tab-nav-bar.mat-primary .mat-tab-link:focus {\n  background-color: rgba(160, 200, 229, 0.3); }\n.mat-tab-group.mat-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary .mat-ink-bar {\n  background-color: #1067a8; }\n.mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar {\n  background-color: white; }\n.mat-tab-group.mat-accent .mat-tab-label:focus, .mat-tab-group.mat-accent .mat-tab-link:focus, .mat-tab-nav-bar.mat-accent .mat-tab-label:focus, .mat-tab-nav-bar.mat-accent .mat-tab-link:focus {\n  background-color: rgba(186, 228, 246, 0.3); }\n.mat-tab-group.mat-accent .mat-ink-bar, .mat-tab-nav-bar.mat-accent .mat-ink-bar {\n  background-color: #54b7df; }\n.mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar, .mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar {\n  background-color: white; }\n.mat-tab-group.mat-warn .mat-tab-label:focus, .mat-tab-group.mat-warn .mat-tab-link:focus, .mat-tab-nav-bar.mat-warn .mat-tab-label:focus, .mat-tab-nav-bar.mat-warn .mat-tab-link:focus {\n  background-color: rgba(255, 205, 210, 0.3); }\n.mat-tab-group.mat-warn .mat-ink-bar, .mat-tab-nav-bar.mat-warn .mat-ink-bar {\n  background-color: #f44336; }\n.mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar, .mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar {\n  background-color: white; }\n.mat-tab-group.mat-background-primary .mat-tab-label:focus, .mat-tab-group.mat-background-primary .mat-tab-link:focus, .mat-tab-nav-bar.mat-background-primary .mat-tab-label:focus, .mat-tab-nav-bar.mat-background-primary .mat-tab-link:focus {\n  background-color: rgba(160, 200, 229, 0.3); }\n.mat-tab-group.mat-background-primary .mat-tab-header, .mat-tab-group.mat-background-primary .mat-tab-links, .mat-tab-nav-bar.mat-background-primary .mat-tab-header, .mat-tab-nav-bar.mat-background-primary .mat-tab-links {\n  background-color: #1067a8; }\n.mat-tab-group.mat-background-primary .mat-tab-label, .mat-tab-group.mat-background-primary .mat-tab-link, .mat-tab-nav-bar.mat-background-primary .mat-tab-label, .mat-tab-nav-bar.mat-background-primary .mat-tab-link {\n  color: white; }\n.mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron {\n  border-color: white; }\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-primary .mat-ripple-element, .mat-tab-nav-bar.mat-background-primary .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.mat-tab-group.mat-background-accent .mat-tab-label:focus, .mat-tab-group.mat-background-accent .mat-tab-link:focus, .mat-tab-nav-bar.mat-background-accent .mat-tab-label:focus, .mat-tab-nav-bar.mat-background-accent .mat-tab-link:focus {\n  background-color: rgba(186, 228, 246, 0.3); }\n.mat-tab-group.mat-background-accent .mat-tab-header, .mat-tab-group.mat-background-accent .mat-tab-links, .mat-tab-nav-bar.mat-background-accent .mat-tab-header, .mat-tab-nav-bar.mat-background-accent .mat-tab-links {\n  background-color: #54b7df; }\n.mat-tab-group.mat-background-accent .mat-tab-label, .mat-tab-group.mat-background-accent .mat-tab-link, .mat-tab-nav-bar.mat-background-accent .mat-tab-label, .mat-tab-nav-bar.mat-background-accent .mat-tab-link {\n  color: white; }\n.mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron {\n  border-color: white; }\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-accent .mat-ripple-element, .mat-tab-nav-bar.mat-background-accent .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.mat-tab-group.mat-background-warn .mat-tab-label:focus, .mat-tab-group.mat-background-warn .mat-tab-link:focus, .mat-tab-nav-bar.mat-background-warn .mat-tab-label:focus, .mat-tab-nav-bar.mat-background-warn .mat-tab-link:focus {\n  background-color: rgba(255, 205, 210, 0.3); }\n.mat-tab-group.mat-background-warn .mat-tab-header, .mat-tab-group.mat-background-warn .mat-tab-links, .mat-tab-nav-bar.mat-background-warn .mat-tab-header, .mat-tab-nav-bar.mat-background-warn .mat-tab-links {\n  background-color: #f44336; }\n.mat-tab-group.mat-background-warn .mat-tab-label, .mat-tab-group.mat-background-warn .mat-tab-link, .mat-tab-nav-bar.mat-background-warn .mat-tab-label, .mat-tab-nav-bar.mat-background-warn .mat-tab-link {\n  color: white; }\n.mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron {\n  border-color: white; }\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-warn .mat-ripple-element, .mat-tab-nav-bar.mat-background-warn .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.mat-toolbar {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-toolbar.mat-primary {\n    background: #1067a8;\n    color: white; }\n.mat-toolbar.mat-accent {\n    background: #54b7df;\n    color: white; }\n.mat-toolbar.mat-warn {\n    background: #f44336;\n    color: white; }\n.mat-tooltip {\n  background: rgba(97, 97, 97, 0.9); }\n.mat-snack-bar-container {\n  background: #323232;\n  color: white; }\n.mat-simple-snackbar-action {\n  color: #54b7df; }\n.mat-h1, .mat-headline, .mat-typography h1 {\n  font: 400 24px/32px \"Roboto\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h2, .mat-title, .mat-typography h2 {\n  font: 500 20px/32px \"Roboto\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h3, .mat-subheading-2, .mat-typography h3 {\n  font: 400 16px/28px \"Roboto\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h4, .mat-subheading-1, .mat-typography h4 {\n  font: 400 15px/24px \"Roboto\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h5, .mat-typography h5 {\n  font-size: 11.62px;\n  font-weight: 400;\n  font-family: \"Roboto\", sans-serif;\n  line-height: 20px;\n  margin: 0 0 12px; }\n.mat-h6, .mat-typography h6 {\n  font-size: 9.38px;\n  font-weight: 400;\n  font-family: \"Roboto\", sans-serif;\n  line-height: 20px;\n  margin: 0 0 12px; }\n.mat-body-strong, .mat-body-2 {\n  font: 500 14px/24px \"Roboto\", sans-serif; }\n.mat-body, .mat-body-1, .mat-typography {\n  font: 400 14px/20px \"Roboto\", sans-serif; }\n.mat-body p, .mat-body-1 p, .mat-typography p {\n    margin: 0 0 12px; }\n.mat-small, .mat-caption {\n  font: 400 12px/20px \"Roboto\", sans-serif; }\n.mat-display-4, .mat-typography .mat-display-4 {\n  font: 300 112px/112px \"Roboto\", sans-serif;\n  margin: 0 0 56px;\n  letter-spacing: -0.05em; }\n.mat-display-3, .mat-typography .mat-display-3 {\n  font: 400 56px/56px \"Roboto\", sans-serif;\n  margin: 0 0 64px;\n  letter-spacing: -0.02em; }\n.mat-display-2, .mat-typography .mat-display-2 {\n  font: 400 45px/48px \"Roboto\", sans-serif;\n  margin: 0 0 64px;\n  letter-spacing: -0.005em; }\n.mat-display-1, .mat-typography .mat-display-1 {\n  font: 400 34px/40px \"Roboto\", sans-serif;\n  margin: 0 0 64px; }\n.mat-button, .mat-raised-button, .mat-icon-button, .mat-fab, .mat-mini-fab {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n.mat-button-toggle {\n  font-family: \"Roboto\", sans-serif; }\n.mat-card {\n  font-family: \"Roboto\", sans-serif; }\n.mat-card-title {\n  font-size: 24px;\n  font-weight: 400; }\n.mat-card-subtitle,\n.mat-card-content,\n.mat-card-header .mat-card-title {\n  font-size: 14px; }\n.mat-checkbox {\n  font-family: \"Roboto\", sans-serif; }\n.mat-checkbox-layout .mat-checkbox-label {\n  line-height: 24px; }\n.mat-chip {\n  font-size: 13px;\n  line-height: 18px; }\n.mat-chip .mat-chip-remove.mat-icon {\n    font-size: 18px; }\n.mat-table {\n  font-family: \"Roboto\", sans-serif; }\n.mat-header-cell {\n  font-size: 12px;\n  font-weight: 500; }\n.mat-cell {\n  font-size: 14px; }\n.mat-calendar {\n  font-family: \"Roboto\", sans-serif; }\n.mat-calendar-body {\n  font-size: 13px; }\n.mat-calendar-body-label,\n.mat-calendar-period-button {\n  font-size: 14px;\n  font-weight: 500; }\n.mat-calendar-table-header th {\n  font-size: 11px;\n  font-weight: 400; }\n.mat-dialog-title {\n  font: 500 20px/32px \"Roboto\", sans-serif; }\n.mat-expansion-panel-header {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 15px;\n  font-weight: 400; }\n.mat-expansion-panel-content {\n  font: 400 14px/20px \"Roboto\", sans-serif; }\n.mat-form-field {\n  font-family: \"Roboto\", sans-serif;\n  font-size: inherit;\n  font-weight: 400;\n  line-height: 1.125; }\n.mat-form-field-wrapper {\n  padding-bottom: 1.25em; }\n.mat-form-field-prefix .mat-icon,\n.mat-form-field-suffix .mat-icon {\n  font-size: 150%;\n  line-height: 1.125; }\n.mat-form-field-prefix .mat-icon-button,\n.mat-form-field-suffix .mat-icon-button {\n  height: 1.5em;\n  width: 1.5em; }\n.mat-form-field-prefix .mat-icon-button .mat-icon,\n  .mat-form-field-suffix .mat-icon-button .mat-icon {\n    height: 1.125em;\n    line-height: 1.125; }\n.mat-form-field-infix {\n  padding: 0.4375em 0;\n  border-top: 0.84375em solid transparent; }\n.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-placeholder {\n  -webkit-transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n          transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n  -ms-transform: translateY(-1.28125em) scale(0.75);\n  width: 133.33333333%; }\n.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill + .mat-form-field-placeholder-wrapper\n.mat-form-field-placeholder {\n  -webkit-transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n          transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n  -ms-transform: translateY(-1.28125em) scale(0.75);\n  width: 133.33333333%; }\n.mat-form-field-placeholder-wrapper {\n  top: -0.84375em;\n  padding-top: 0.84375em; }\n.mat-form-field-placeholder {\n  top: 1.28125em; }\n.mat-form-field-underline {\n  bottom: 1.25em; }\n.mat-form-field-subscript-wrapper {\n  font-size: 75%;\n  margin-top: 0.54166667em;\n  top: calc(100% - 1.66666667em); }\n.mat-grid-tile-header,\n.mat-grid-tile-footer {\n  font-size: 14px; }\n.mat-grid-tile-header .mat-line,\n  .mat-grid-tile-footer .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n.mat-grid-tile-header .mat-line:nth-child(n+2),\n    .mat-grid-tile-footer .mat-line:nth-child(n+2) {\n      font-size: 12px; }\ninput.mat-input-element {\n  margin-top: -0.0625em; }\n.mat-menu-item {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 16px;\n  font-weight: 400; }\n.mat-paginator,\n.mat-paginator-page-size .mat-select-trigger {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 12px; }\n.mat-radio-button {\n  font-family: \"Roboto\", sans-serif; }\n.mat-select {\n  font-family: \"Roboto\", sans-serif; }\n.mat-select-trigger {\n  height: 1.125em; }\n.mat-slide-toggle-content {\n  font: 400 14px/20px \"Roboto\", sans-serif; }\n.mat-slider-thumb-label-text {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 12px;\n  font-weight: 500; }\n.mat-stepper-vertical, .mat-stepper-horizontal {\n  font-family: \"Roboto\", sans-serif; }\n.mat-step-label {\n  font-size: 14px;\n  font-weight: 400; }\n.mat-step-label-selected {\n  font-size: 14px;\n  font-weight: 500; }\n.mat-tab-group {\n  font-family: \"Roboto\", sans-serif; }\n.mat-tab-label, .mat-tab-link {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n.mat-toolbar,\n.mat-toolbar h1,\n.mat-toolbar h2,\n.mat-toolbar h3,\n.mat-toolbar h4,\n.mat-toolbar h5,\n.mat-toolbar h6 {\n  font: 500 20px/32px \"Roboto\", sans-serif;\n  margin: 0; }\n.mat-tooltip {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 10px;\n  padding-top: 6px;\n  padding-bottom: 6px; }\n.mat-list-item {\n  font-family: \"Roboto\", sans-serif; }\n.mat-list-option {\n  font-family: \"Roboto\", sans-serif; }\n.mat-list .mat-list-item, .mat-nav-list .mat-list-item, .mat-selection-list .mat-list-item {\n  font-size: 16px; }\n.mat-list .mat-list-item .mat-line, .mat-nav-list .mat-list-item .mat-line, .mat-selection-list .mat-list-item .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n.mat-list .mat-list-item .mat-line:nth-child(n+2), .mat-nav-list .mat-list-item .mat-line:nth-child(n+2), .mat-selection-list .mat-list-item .mat-line:nth-child(n+2) {\n      font-size: 14px; }\n.mat-list .mat-list-option, .mat-nav-list .mat-list-option, .mat-selection-list .mat-list-option {\n  font-size: 16px; }\n.mat-list .mat-list-option .mat-line, .mat-nav-list .mat-list-option .mat-line, .mat-selection-list .mat-list-option .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n.mat-list .mat-list-option .mat-line:nth-child(n+2), .mat-nav-list .mat-list-option .mat-line:nth-child(n+2), .mat-selection-list .mat-list-option .mat-line:nth-child(n+2) {\n      font-size: 14px; }\n.mat-list .mat-subheader, .mat-nav-list .mat-subheader, .mat-selection-list .mat-subheader {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n.mat-list[dense] .mat-list-item, .mat-nav-list[dense] .mat-list-item, .mat-selection-list[dense] .mat-list-item {\n  font-size: 12px; }\n.mat-list[dense] .mat-list-item .mat-line, .mat-nav-list[dense] .mat-list-item .mat-line, .mat-selection-list[dense] .mat-list-item .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n.mat-list[dense] .mat-list-item .mat-line:nth-child(n+2), .mat-nav-list[dense] .mat-list-item .mat-line:nth-child(n+2), .mat-selection-list[dense] .mat-list-item .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n.mat-list[dense] .mat-list-option, .mat-nav-list[dense] .mat-list-option, .mat-selection-list[dense] .mat-list-option {\n  font-size: 12px; }\n.mat-list[dense] .mat-list-option .mat-line, .mat-nav-list[dense] .mat-list-option .mat-line, .mat-selection-list[dense] .mat-list-option .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n.mat-list[dense] .mat-list-option .mat-line:nth-child(n+2), .mat-nav-list[dense] .mat-list-option .mat-line:nth-child(n+2), .mat-selection-list[dense] .mat-list-option .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n.mat-list[dense] .mat-subheader, .mat-nav-list[dense] .mat-subheader, .mat-selection-list[dense] .mat-subheader {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 12px;\n  font-weight: 500; }\n.mat-option {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 16px; }\n.mat-optgroup-label {\n  font: 500 14px/24px \"Roboto\", sans-serif; }\n.mat-simple-snackbar {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 14px; }\n.mat-simple-snackbar-action {\n  line-height: 1;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 500; }\n.se-navbar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 8px 16px;\n  color: #54b7df;\n  background: #ffffff;\n  text-transform: uppercase;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1); }\n.se-navbar > .mat-button:last-child {\n    margin-left: auto; }\n.flex-spacer {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1; }\n.se-title {\n  position: relative;\n  top: -2px;\n  margin-right: 24px; }\n.se-dokchain-logo {\n  height: 26px;\n  margin: -2px 4px 3px 0;\n  vertical-align: middle; }\n.se-button.lowercase {\n  text-transform: none; }\n.se-button.lg {\n  font-size: 24px; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/**
 * Copyright 2017 PokitDok, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ------------------------------------------------------------------------------
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.loading = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // scroll to top of page on route change
        this.router.events.subscribe(function (event) {
            if (!(event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]))
                return;
            window.scrollTo(0, 0);
            _this.loadingInterceptor(event);
        });
    };
    AppComponent.prototype.loadingInterceptor = function (event) {
        this.loading = event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationStart */];
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_ace__ = __webpack_require__("./node_modules/ng2-ace/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_ace___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_ace__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_brace_theme_twilight__ = __webpack_require__("./node_modules/brace/theme/twilight.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_brace_theme_twilight___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_brace_theme_twilight__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_brace_mode_json__ = __webpack_require__("./node_modules/brace/mode/json.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_brace_mode_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_brace_mode_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__explorer_explorer_component__ = __webpack_require__("./src/app/explorer/explorer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__entities_entity_detail_entity_detail_component__ = __webpack_require__("./src/app/entities/entity-detail/entity-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__blocks_block_list_item_block_list_item_component__ = __webpack_require__("./src/app/blocks/block-list-item/block-list-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__blocks_block_detail_block_detail_component__ = __webpack_require__("./src/app/blocks/block-detail/block-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__blocks_block_block_component__ = __webpack_require__("./src/app/blocks/block/block.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__batches_batch_list_item_batch_list_item_component__ = __webpack_require__("./src/app/batches/batch-list-item/batch-list-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__batches_batch_detail_batch_detail_component__ = __webpack_require__("./src/app/batches/batch-detail/batch-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__batches_batch_batch_component__ = __webpack_require__("./src/app/batches/batch/batch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__transactions_transaction_list_item_transaction_list_item_component__ = __webpack_require__("./src/app/transactions/transaction-list-item/transaction-list-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__transactions_transaction_detail_transaction_detail_component__ = __webpack_require__("./src/app/transactions/transaction-detail/transaction-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__transactions_transaction_transaction_component__ = __webpack_require__("./src/app/transactions/transaction/transaction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__states_state_monitor_state_monitor_component__ = __webpack_require__("./src/app/states/state-monitor/state-monitor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__states_state_state_component__ = __webpack_require__("./src/app/states/state/state.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__data_table_data_table_component__ = __webpack_require__("./src/app/data-table/data-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_api_service_api_service__ = __webpack_require__("./src/app/services/api-service/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__dynamic_views_dynamic_view_directive_dynamic_view_directive__ = __webpack_require__("./src/app/dynamic-views/dynamic-view-directive/dynamic-view.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__dynamic_views_dynamic_view_loader_dynamic_view_loader_component__ = __webpack_require__("./src/app/dynamic-views/dynamic-view-loader/dynamic-view-loader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pipes_base64_decode_base64_decode_pipe__ = __webpack_require__("./src/app/pipes/base64-decode/base64-decode.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pipes_ui_ace_data_transform_ui_ace_data_transform_pipe__ = __webpack_require__("./src/app/pipes/ui-ace-data-transform/ui-ace-data-transform.pipe.ts");
/**
 * Copyright 2017 PokitDok, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ------------------------------------------------------------------------------
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* GENERAL ANGULAR IMPORTS */







/* MATERIAL DESIGN IMPORTS */

/* ACE EDITOR IMPORTS */



/* MAIN PAGES */

/* ENTITY COMPONENTS */

/* BLOCK COMPONENTS */



/* BATCH COMPONENTS */



/* TRANSACTION COMPONENTS */



/* STATE MONITORING COMPONENTS */


/* TABLE COMPONENTS */

/* GENERAL SERVICES */

/* DYNAMIC VIEW COMPONENTS */




var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__explorer_explorer_component__["a" /* ExplorerComponent */],
                __WEBPACK_IMPORTED_MODULE_12__entities_entity_detail_entity_detail_component__["a" /* EntityDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_13__blocks_block_list_item_block_list_item_component__["a" /* BlockListItemComponent */],
                __WEBPACK_IMPORTED_MODULE_14__blocks_block_detail_block_detail_component__["a" /* BlockDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_15__blocks_block_block_component__["a" /* BlockComponent */],
                __WEBPACK_IMPORTED_MODULE_16__batches_batch_list_item_batch_list_item_component__["a" /* BatchListItemComponent */],
                __WEBPACK_IMPORTED_MODULE_17__batches_batch_detail_batch_detail_component__["a" /* BatchDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_18__batches_batch_batch_component__["a" /* BatchComponent */],
                __WEBPACK_IMPORTED_MODULE_19__transactions_transaction_list_item_transaction_list_item_component__["a" /* TransactionListItemComponent */],
                __WEBPACK_IMPORTED_MODULE_20__transactions_transaction_detail_transaction_detail_component__["a" /* TransactionDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_21__transactions_transaction_transaction_component__["a" /* TransactionComponent */],
                __WEBPACK_IMPORTED_MODULE_22__states_state_monitor_state_monitor_component__["a" /* StateMonitorComponent */],
                __WEBPACK_IMPORTED_MODULE_23__states_state_state_component__["a" /* StateComponent */],
                __WEBPACK_IMPORTED_MODULE_24__data_table_data_table_component__["a" /* DataTableComponent */],
                __WEBPACK_IMPORTED_MODULE_8_ng2_ace__["AceEditorDirective"],
                __WEBPACK_IMPORTED_MODULE_26__dynamic_views_dynamic_view_directive_dynamic_view_directive__["a" /* DynamicViewDirective */],
                __WEBPACK_IMPORTED_MODULE_27__dynamic_views_dynamic_view_loader_dynamic_view_loader_component__["a" /* DynamicViewLoaderComponent */],
                __WEBPACK_IMPORTED_MODULE_28__pipes_base64_decode_base64_decode_pipe__["a" /* Base64DecodePipe */],
                __WEBPACK_IMPORTED_MODULE_29__pipes_ui_ace_data_transform_ui_ace_data_transform_pipe__["a" /* UIAceDataTransformPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["h" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["g" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["l" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["k" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["e" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["j" /* MatSnackBarModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_25__services_api_service_api_service__["a" /* APIService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_27__dynamic_views_dynamic_view_loader_dynamic_view_loader_component__["a" /* DynamicViewLoaderComponent */],
                __WEBPACK_IMPORTED_MODULE_13__blocks_block_list_item_block_list_item_component__["a" /* BlockListItemComponent */],
                __WEBPACK_IMPORTED_MODULE_16__batches_batch_list_item_batch_list_item_component__["a" /* BatchListItemComponent */],
                __WEBPACK_IMPORTED_MODULE_19__transactions_transaction_list_item_transaction_list_item_component__["a" /* TransactionListItemComponent */],
                __WEBPACK_IMPORTED_MODULE_15__blocks_block_block_component__["a" /* BlockComponent */],
                __WEBPACK_IMPORTED_MODULE_18__batches_batch_batch_component__["a" /* BatchComponent */],
                __WEBPACK_IMPORTED_MODULE_23__states_state_state_component__["a" /* StateComponent */],
                __WEBPACK_IMPORTED_MODULE_21__transactions_transaction_transaction_component__["a" /* TransactionComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/batches/batch-detail/batch-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n  Copyright 2017 PokitDok, Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n      http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n-->\n\n<entity-detail [collection]=\"'batches'\" [displayName]=\"'Batch'\" [component]=\"component\"></entity-detail>\n"

/***/ }),

/***/ "./src/app/batches/batch-detail/batch-detail.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Copyright 2017 PokitDok, Inc.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n * ------------------------------------------------------------------------------\n */\n"

/***/ }),

/***/ "./src/app/batches/batch-detail/batch-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BatchDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__batch_batch_component__ = __webpack_require__("./src/app/batches/batch/batch.component.ts");
/**
 * Copyright 2017 PokitDok, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ------------------------------------------------------------------------------
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Detail view for a Batch.
 */
var BatchDetailComponent = (function () {
    function BatchDetailComponent() {
        // component to load for batch information
        this.component = __WEBPACK_IMPORTED_MODULE_1__batch_batch_component__["a" /* BatchComponent */];
    }
    BatchDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-batch-detail',
            template: __webpack_require__("./src/app/batches/batch-detail/batch-detail.component.html"),
            styles: [__webpack_require__("./src/app/batches/batch-detail/batch-detail.component.scss")]
        })
    ], BatchDetailComponent);
    return BatchDetailComponent;
}());



/***/ }),

/***/ "./src/app/batches/batch-list-item/batch-list-item.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n  Copyright 2017 PokitDok, Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n      http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n-->\n\n<div class=\"list-item\" [ngClass]=\"{'active': active}\">\n  <div class=\"content\">\n    <p class=\"title ellipsis\">Batch <a>{{ data.header_signature }}</a></p>\n    <div class=\"row\">\n      <p class=\"detail\" *ngIf=\"data.transactions\">{{ data.transactions.length }} Transaction(s)</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/batches/batch-list-item/batch-list-item.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Copyright 2017 PokitDok, Inc.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n * ------------------------------------------------------------------------------\n */\n"

/***/ }),

/***/ "./src/app/batches/batch-list-item/batch-list-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BatchListItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/**
 * Copyright 2017 PokitDok, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ------------------------------------------------------------------------------
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * A smaller view for showing a batch as a list item.
 */
var BatchListItemComponent = (function () {
    function BatchListItemComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], BatchListItemComponent.prototype, "data", void 0);
    BatchListItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'batch-list-item',
            template: __webpack_require__("./src/app/batches/batch-list-item/batch-list-item.component.html"),
            styles: [__webpack_require__("./src/app/batches/batch-list-item/batch-list-item.component.scss"), __webpack_require__("./src/styles/shared/_explorer-list-item.scss")]
        })
    ], BatchListItemComponent);
    return BatchListItemComponent;
}());



/***/ }),

/***/ "./src/app/batches/batch/batch.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n  Copyright 2017 PokitDok, Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n      http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n-->\n\n<div class=\"well\">\n  <dl class=\"horizontal\">\n      <dt>Signer Public Key</dt>\n      <dd>{{ data.header?.signer_public_key }}</dd>\n\n      <dt *ngIf=\"data.state\">State</dt>\n      <dd>{{ data.state }}</dd>\n  </dl>\n</div>\n\n<hr/>\n\n<ng-container *ngIf=\"!showDataAsJSON\">\n  <data-table [data]=\"data.transactions\" [type]=\"'Transactions'\"></data-table>\n</ng-container>\n\n<ng-container *ngIf=\"showDataAsJSON\">\n  <h4 class=\"h4\">Payload</h4>\n\n  <div ace-editor\n       [text]=\"jsonData\"\n       [mode]=\"aceMode\"\n       [theme]=\"'twilight'\"\n       [options]=\"options\"\n       [readOnly]=\"false\"\n       class=\"ace-editor\"></div>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/batches/batch/batch.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Copyright 2017 PokitDok, Inc.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n * ------------------------------------------------------------------------------\n */\n"

/***/ }),

/***/ "./src/app/batches/batch/batch.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BatchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes_base64_decode_base64_decode_pipe__ = __webpack_require__("./src/app/pipes/base64-decode/base64-decode.pipe.ts");
/**
 * Copyright 2017 PokitDok, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ------------------------------------------------------------------------------
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * A component that formats all the data associated with a batch for display.
 */
var BatchComponent = (function () {
    /**
     * @param base64DecodePipe {Base64DecodePipe} -- used for decoding base64
     *   to ascii strings
     */
    function BatchComponent(base64DecodePipe) {
        this.base64DecodePipe = base64DecodePipe;
        // data representing the batch
        this.data = {};
        // data stringified for Angular UI Ace to display
        this.jsonData = '{}';
        this.aceMode = 'json';
    }
    BatchComponent.prototype.ngOnInit = function () {
        // format data for Angular UI Ace
        this.jsonData = this.formatJSONData(this.data);
    };
    /**
     * Formats batch data into a JSON string with proper indentation for display.
     * @param transactionData - data representing a transaction within the batch
     * @returns {string} formatted JSON string of the data
     */
    BatchComponent.prototype.formatJSONData = function (data) {
        if (!data)
            data = {};
        // format transactions within the batch data
        if (data.transactions && this.showDataAsJSON) {
            for (var txnIdx in data.transactions) {
                data.transactions[txnIdx] =
                    this.formatTransactionData(data.transactions[txnIdx]);
            }
        }
        return JSON.stringify(data, null, 2);
    };
    /**
     * Formats information held in the payloads in a batch's transactions.
     * @param transactionData - data representing a transaction within the batch
     * @returns {object} formatted transaction data
     */
    BatchComponent.prototype.formatTransactionData = function (transactionData) {
        // decode transaction's payload from base64 into JSON
        if (transactionData && transactionData.payload) {
            transactionData.payload =
                this.base64DecodePipe.transform(transactionData.payload);
            try {
                transactionData.payload = JSON.parse(transactionData.payload);
            }
            catch (e) { }
        }
        return transactionData;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], BatchComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], BatchComponent.prototype, "showDataAsJSON", void 0);
    BatchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'batch',
            template: __webpack_require__("./src/app/batches/batch/batch.component.html"),
            styles: [__webpack_require__("./src/app/batches/batch/batch.component.scss"), __webpack_require__("./src/styles/shared/_explorer-detail.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__pipes_base64_decode_base64_decode_pipe__["a" /* Base64DecodePipe */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__pipes_base64_decode_base64_decode_pipe__["a" /* Base64DecodePipe */]])
    ], BatchComponent);
    return BatchComponent;
}());



/***/ }),

/***/ "./src/app/blocks/block-detail/block-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n  Copyright 2017 PokitDok, Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n      http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n-->\n\n<entity-detail [collection]=\"'blocks'\" [displayName]=\"'Block'\" [component]=\"component\"></entity-detail>\n"

/***/ }),

/***/ "./src/app/blocks/block-detail/block-detail.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Copyright 2017 PokitDok, Inc.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n * ------------------------------------------------------------------------------\n */\n"

/***/ }),

/***/ "./src/app/blocks/block-detail/block-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__block_block_component__ = __webpack_require__("./src/app/blocks/block/block.component.ts");
/**
 * Copyright 2017 PokitDok, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ------------------------------------------------------------------------------
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Detail view for a Block.
 */
var BlockDetailComponent = (function () {
    function BlockDetailComponent() {
        // component to load for block information
        this.component = __WEBPACK_IMPORTED_MODULE_1__block_block_component__["a" /* BlockComponent */];
    }
    BlockDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-block-detail',
            template: __webpack_require__("./src/app/blocks/block-detail/block-detail.component.html"),
            styles: [__webpack_require__("./src/app/blocks/block-detail/block-detail.component.scss")]
        })
    ], BlockDetailComponent);
    return BlockDetailComponent;
}());



/***/ }),

/***/ "./src/app/blocks/block-list-item/block-list-item.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n  Copyright 2017 PokitDok, Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n      http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n-->\n\n<div class=\"list-item\" [ngClass]=\"{'active': active}\">\n  <div class=\"content row\">\n    <p class=\"title ellipsis twelve columns\">Block <a>{{ data.header.block_num }}</a></p>\n    <p class=\"detail ellipsis twelve columns\">{{ data.header.consensus | base64decode }} verified bytes</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/blocks/block-list-item/block-list-item.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Copyright 2017 PokitDok, Inc.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n * ------------------------------------------------------------------------------\n */\n"

/***/ }),

/***/ "./src/app/blocks/block-list-item/block-list-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockListItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/**
 * Copyright 2017 PokitDok, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ------------------------------------------------------------------------------
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * A smaller view for showing a block as a list item.
 */
var BlockListItemComponent = (function () {
    function BlockListItemComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], BlockListItemComponent.prototype, "data", void 0);
    BlockListItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'block-list-item',
            template: __webpack_require__("./src/app/blocks/block-list-item/block-list-item.component.html"),
            styles: [__webpack_require__("./src/app/blocks/block-list-item/block-list-item.component.scss"), __webpack_require__("./src/styles/shared/_explorer-list-item.scss")]
        })
    ], BlockListItemComponent);
    return BlockListItemComponent;
}());



/***/ }),

/***/ "./src/app/blocks/block/block.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n  Copyright 2017 PokitDok, Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n      http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n-->\n\n<div class=\"well\">\n  <dl class=\"horizontal\">\n    <dt>Block Number</dt>\n    <dd>{{ data.header?.block_num }}</dd>\n\n    <dt>Previous Block ID</dt>\n    <dd><a [routerLink]=\"'/blocks/' + data.header?.previous_block_id\">{{ data.header?.previous_block_id }}</a></dd>\n\n    <dt>Consensus</dt>\n    <dd>{{ data.header?.consensus | base64decode }}</dd>\n\n    <dt>Signer Public Key</dt>\n    <dd class=\"ellipsis\"><a>{{ data.header?.signer_public_key }}</a></dd>\n\n    <dt>State Root Hash</dt>\n    <dd class=\"ellipsis\"><a>{{ data.header?.state_root_hash }}</a></dd>\n  </dl>\n</div>\n\n<hr/>\n\n<ng-container *ngIf=\"!showDataAsJSON\">\n  <data-table [data]=\"data.batches\" [type]=\"'Batches'\"></data-table>\n</ng-container>\n\n<ng-container *ngIf=\"showDataAsJSON\">\n  <h4 class=\"h4\">Payload</h4>\n\n  <div ace-editor\n       [text]=\"'{}'\"\n       [mode]=\"'json'\"\n       [theme]=\"'twilight'\"\n       [options]=\"options\"\n       [readOnly]=\"false\"\n       class=\"ace-editor\"></div>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/blocks/block/block.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Copyright 2017 PokitDok, Inc.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n * ------------------------------------------------------------------------------\n */\n"

/***/ }),

/***/ "./src/app/blocks/block/block.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes_base64_decode_base64_decode_pipe__ = __webpack_require__("./src/app/pipes/base64-decode/base64-decode.pipe.ts");
/**
 * Copyright 2017 PokitDok, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ------------------------------------------------------------------------------
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * A component that formats all the data associated with a block for display.
 */
var BlockComponent = (function () {
    function BlockComponent() {
        // data representing the block
        this.data = {};
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], BlockComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], BlockComponent.prototype, "showDataAsJSON", void 0);
    BlockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'block',
            template: __webpack_require__("./src/app/blocks/block/block.component.html"),
            styles: [__webpack_require__("./src/app/blocks/block/block.component.scss"), __webpack_require__("./src/styles/shared/_explorer-detail.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__pipes_base64_decode_base64_decode_pipe__["a" /* Base64DecodePipe */]]
        })
    ], BlockComponent);
    return BlockComponent;
}());



/***/ }),

/***/ "./src/app/data-table/data-table.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n  Copyright 2017 PokitDok, Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n      http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n-->\n\n<div class=\"row\">\n  <div class=\"six columns\">\n    <h3 class=\"h3\">{{ type }}</h3>\n  </div>\n  <div class=\"six columns h3-adjacent\">\n    <mat-paginator #paginator\n                  [length]=\"itemCount\"\n                  [pageIndex]=\"pageIndex\"\n                  [pageSize]=\"pageSize\"\n                  [pageSizeOptions]=\"pageSizeOptions\"\n                  (page)=\"updatePaging($event)\">\n    </mat-paginator>\n  </div>\n</div>\n\n<ng-container *ngIf=\"items && items.length\">\n  <div class=\"mat-elevation-z2 card-bg\" style=\"margin-bottom: 16px;\">\n    <table class=\"table-full-width mat-table\" role=\"grid\">\n      <tbody>\n        <tr class=\"mat-row\" [ngClass]=\"{'active': i === activeIdx}\" role=\"row\" *ngFor=\"let item of items; let i = index;\">\n          <td class=\"mat-cell\" role=\"gridcell\" *ngIf=\"activeIdx !== i\">\n            <p class=\"list-id\" *ngIf=\"type !== 'States'\">ID&nbsp;<a (click)=\"setItemActive(i)\">{{ item.header_signature }}</a></p>\n            <p class=\"list-id\" *ngIf=\"type === 'States'\"><a (click)=\"setItemActive(i)\">Change received</a>&nbsp;change&nbsp;on&nbsp;Block&nbsp;{{ item.block_num }}</p>\n          </td>\n\n          <td *ngIf=\"activeIdx === i\">\n            <p class=\"list-id\" *ngIf=\"type !== 'States'\">ID&nbsp;<a (click)=\"clearActiveItem()\">{{ item.header_signature }}</a></p>\n\n            <p class=\"list-id\" *ngIf=\"type === 'States'\"><a (click)=\"clearActiveItem()\">Change received</a>&nbsp;change&nbsp;on&nbsp;Block&nbsp;{{ item.block_num }}</p>\n\n            <dynamic-view-loader [component]=\"component\" [data]=\"item\" [params]=\"{showDataAsJSON: true}\"></dynamic-view-loader>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n\n    <mat-paginator #paginator\n                  [length]=\"itemCount\"\n                  [pageIndex]=\"pageIndex\"\n                  [pageSize]=\"pageSize\"\n                  [pageSizeOptions]=\"pageSizeOptions\"\n                  (page)=\"updatePaging($event)\">\n    </mat-paginator>\n  </div>\n</ng-container>\n\n<div class=\"mat-elevation-z2 card-bg\" *ngIf=\"!items || !items.length\">\n  <div class=\"item-row\">\n    No {{ type.toLowerCase() }}.\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/data-table/data-table.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Copyright 2017 PokitDok, Inc.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n * ------------------------------------------------------------------------------\n */\n.mat-row.active {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  border-bottom-width: 2px;\n  height: auto; }\n.mat-row.active:first-child {\n    border-top: none; }\n.mat-row.active td {\n    border-bottom-width: 0; }\n.item-row {\n  padding: 16px 24px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.14); }\n.mat-row .active .list-id,\n.mat-row.active .display-toggle {\n  margin: 12px 0 16px; }\n.mat-row:not(.active) .list-id,\n.mat-row:not(.active) .display-toggle {\n  margin: 0; }\n"

/***/ }),

/***/ "./src/app/data-table/data-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blocks_block_block_component__ = __webpack_require__("./src/app/blocks/block/block.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__batches_batch_batch_component__ = __webpack_require__("./src/app/batches/batch/batch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transactions_transaction_transaction_component__ = __webpack_require__("./src/app/transactions/transaction/transaction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__states_state_state_component__ = __webpack_require__("./src/app/states/state/state.component.ts");
/**
 * Copyright 2017 PokitDok, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ------------------------------------------------------------------------------
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Table that uses data passed into the component for display.
 *
 * Usage example:
 *     <data-table [data]="items" type="Transactions"></api-table>
 * where `data` is the list of all data, and `type` is the name representing the
 * data (displayed at the top of the table as a user-friendly title).
 */
var DataTableComponent = (function () {
    function DataTableComponent() {
        this.data = [];
        // actively displayed data after paging is applied
        this.items = [];
        // index of detail view currently expanded in view
        this.activeIdx = -1;
        // since data is static, no need to subscribe
        this.itemCount = 0;
        // paging variables
        this.pageSizeOptions = [10, 20, 50, 100];
        this.pageSize = 50;
        this.pageIndex = 0;
        // for dynamically loading components by selected view type for list items
        this.components = {
            'blocks': __WEBPACK_IMPORTED_MODULE_2__blocks_block_block_component__["a" /* BlockComponent */],
            'batches': __WEBPACK_IMPORTED_MODULE_3__batches_batch_batch_component__["a" /* BatchComponent */],
            'transactions': __WEBPACK_IMPORTED_MODULE_4__transactions_transaction_transaction_component__["a" /* TransactionComponent */],
            'states': __WEBPACK_IMPORTED_MODULE_5__states_state_state_component__["a" /* StateComponent */]
        };
    }
    DataTableComponent.prototype.ngOnChanges = function () {
        if (!this.data)
            this.data = [];
        // component to render to show item information
        this.component = this.components[this.type.toLowerCase()];
        // update displayed page data to show
        this.itemCount = this.data.length ? this.data.length : 0;
        // update data shown in the table
        this.updateTableDisplay(this.pageSize, this.pageIndex);
    };
    /**
     * Updates the control given new paging information sent by paging component.
     * @param event {object} - event containing new paging information
     */
    DataTableComponent.prototype.updatePaging = function (event) {
        // update paging information based on event
        this.pageSize = event.pageSize;
        this.pageIndex = event.pageIndex;
        this.updateTableDisplay(this.pageSize, this.pageIndex);
        // reset displayed detail view
        this.activeIdx = -1;
    };
    /**
   * Updates variables used for displaying the table
   * @param pageSize {number} - number of items to be shown by the table
   * @param pageIndex {number} - paging "offset" to determine which items the table should show
   */
    DataTableComponent.prototype.updateTableDisplay = function (pageSize, pageIndex) {
        // slice data to get paging
        this.items = this.data.slice(pageSize * pageIndex, pageSize * pageIndex + pageSize);
        // reset displayed detail view
        this.activeIdx = -1;
    };
    /**
     * Update an item in the list of items to be in the active state
     * @param itemIdx - index of the item in items to be marked as active
     */
    DataTableComponent.prototype.setItemActive = function (itemIdx) {
        this.activeIdx = itemIdx;
    };
    /**
     * Clear active item from list of items
     */
    DataTableComponent.prototype.clearActiveItem = function () {
        this.setItemActive(-1);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DataTableComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], DataTableComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatPaginator */])
    ], DataTableComponent.prototype, "paginator", void 0);
    DataTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'data-table',
            template: __webpack_require__("./src/app/data-table/data-table.component.html"),
            styles: [__webpack_require__("./src/app/data-table/data-table.component.scss")]
        })
    ], DataTableComponent);
    return DataTableComponent;
}());



/***/ }),

/***/ "./src/app/dynamic-views/dynamic-view-directive/dynamic-view.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicViewDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/**
 * Copyright 2017 PokitDok, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ------------------------------------------------------------------------------
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Directive for placement of dynamically loaded component views.
 */
var DynamicViewDirective = (function () {
    /**
     * @param viewContainerRef {ViewContainerRef} - reference to a container
     *   within the directive where views can be attached
     */
    function DynamicViewDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    DynamicViewDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[dynamic-view]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], DynamicViewDirective);
    return DynamicViewDirective;
}());



/***/ }),

/***/ "./src/app/dynamic-views/dynamic-view-loader/dynamic-view-loader.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n  Copyright 2017 PokitDok, Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n      http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n-->\n\n<div dynamic-view></div>\n"

/***/ }),

/***/ "./src/app/dynamic-views/dynamic-view-loader/dynamic-view-loader.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Copyright 2017 PokitDok, Inc.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n * ------------------------------------------------------------------------------\n */\n"

/***/ }),

/***/ "./src/app/dynamic-views/dynamic-view-loader/dynamic-view-loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicViewLoaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dynamic_view_directive_dynamic_view_directive__ = __webpack_require__("./src/app/dynamic-views/dynamic-view-directive/dynamic-view.directive.ts");
/**
 * Copyright 2017 PokitDok, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ------------------------------------------------------------------------------
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Component that can dynamically load another component at runtime.
 */
var DynamicViewLoaderComponent = (function () {
    /**
     * @param componentFactoryResolver {ComponentFactoryResolver} - used to
     *   dynamically load components at runtime.
     */
    function DynamicViewLoaderComponent(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
        // data needed to render the item as a list item
        this.data = {};
        // any extra properties needed by the dynamic views
        this.params = {};
    }
    DynamicViewLoaderComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // timeout to prevent errors from data being updated after initial load
        setTimeout(function (_) { return _this.loadComponent(_this.data, _this.component, _this.params); });
    };
    /**
     * Loads data into the specified component.
     * @param itemData {object} - data to be displayed by the dynamic component
     * @param itemComponent {Type} - component to be rendered dynamically
     */
    DynamicViewLoaderComponent.prototype.loadComponent = function (itemData, itemComponent, params) {
        var componentFactory = this.componentFactoryResolver
            .resolveComponentFactory(itemComponent);
        var viewContainerRef = this.dynamicView.viewContainerRef;
        viewContainerRef.clear();
        var componentRef = viewContainerRef.createComponent(componentFactory);
        componentRef.instance['data'] = itemData;
        // add any additional properties to component
        if (params) {
            for (var param in params) {
                componentRef.instance[param] = params[param];
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["Type"])
    ], DynamicViewLoaderComponent.prototype, "component", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DynamicViewLoaderComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DynamicViewLoaderComponent.prototype, "params", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__dynamic_view_directive_dynamic_view_directive__["a" /* DynamicViewDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__dynamic_view_directive_dynamic_view_directive__["a" /* DynamicViewDirective */])
    ], DynamicViewLoaderComponent.prototype, "dynamicView", void 0);
    DynamicViewLoaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dynamic-view-loader',
            template: __webpack_require__("./src/app/dynamic-views/dynamic-view-loader/dynamic-view-loader.component.html"),
            styles: [__webpack_require__("./src/app/dynamic-views/dynamic-view-loader/dynamic-view-loader.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]])
    ], DynamicViewLoaderComponent);
    return DynamicViewLoaderComponent;
}());



/***/ }),

/***/ "./src/app/entities/entity-detail/entity-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n  Copyright 2017 PokitDok, Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n      http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n-->\n\n<div class=\"container\">\n  <div class=\"detail\">\n    <h2 class=\"h2 with-subheader\">\n      {{ displayName || 'Item' }} Detail\n    </h2>\n    <p class=\"subheader id\">ID: {{ id }}</p>\n\n    <div class=\"well\" *ngIf=\"error\">\n      <p class=\"error-text\"><em>{{ error }}</em></p>\n    </div>\n\n    <ng-container *ngIf=\"loading\">\n      <img src=\"../../assets/images/sawtooth_logo_loader.gif\" class=\"loader\"/>\n    </ng-container>\n    <ng-container *ngIf=\"!loading && !error\">\n      <dynamic-view-loader [component]=\"component\" [data]=\"data\"></dynamic-view-loader>\n    </ng-container>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/entities/entity-detail/entity-detail.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Copyright 2017 PokitDok, Inc.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n * ------------------------------------------------------------------------------\n */\n.detail {\n  margin-top: 48px; }\n.h2 {\n  margin-top: 0; }\n"

/***/ }),

/***/ "./src/app/entities/entity-detail/entity-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntityDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_api_service_api_service__ = __webpack_require__("./src/app/services/api-service/api.service.ts");
/**
 * Copyright 2017 PokitDok, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ------------------------------------------------------------------------------
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Detail view for an entity that calls the API for its data.
 */
var EntityDetailComponent = (function () {
    /**
     * @param activatedRoute {ActivatedRoute} - currently active route
     * @param apiService {APIService} - service for making API calls
     * @param snackBar {MatSnackBar} - service for showing snackbar notifications
     */
    function EntityDetailComponent(activatedRoute, apiService, snackBar) {
        this.activatedRoute = activatedRoute;
        this.apiService = apiService;
        this.snackBar = snackBar;
        // name of the entity for display
        this.displayName = 'Item';
        // data representing the block
        this.data = {};
        // whether the page is waiting on API response
        this.loading = true;
        // error message to display when unable to complete API request
        this.apiErrorMessage = 'Error fetching ' + this.displayName.toLowerCase() + ' from API';
        // empty subject to make sure subscription is destroyed when component is
        // destroyed
        this.ngUnsubscribe = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
    }
    EntityDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe to router event to get block ID
        this.activatedRoute.params.subscribe(function (params) {
            _this.id = params.id;
            // call API for updated block data
            _this.dataObservable = _this.apiService.getItemByID(_this.collection, _this.id);
            _this.dataObservable
                .takeUntil(_this.ngUnsubscribe)
                .subscribe(function (data) {
                _this.data = data;
                _this.error = undefined;
                _this.loading = false;
            }, function (error) {
                _this.loading = false;
                _this.error = error.message ? error.message : _this.apiErrorMessage + '.';
                _this.snackBar.open(_this.error, undefined, {
                    duration: 3000,
                });
                console.log(_this.apiErrorMessage + ':', error);
            });
        });
    };
    EntityDetailComponent.prototype.ngOnDestroy = function () {
        // complete empty subscription to end all other active subscriptions
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], EntityDetailComponent.prototype, "collection", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], EntityDetailComponent.prototype, "displayName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], EntityDetailComponent.prototype, "component", void 0);
    EntityDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'entity-detail',
            template: __webpack_require__("./src/app/entities/entity-detail/entity-detail.component.html"),
            styles: [__webpack_require__("./src/app/entities/entity-detail/entity-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__services_api_service_api_service__["a" /* APIService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatSnackBar */]])
    ], EntityDetailComponent);
    return EntityDetailComponent;
}());



/***/ }),

/***/ "./src/app/explorer/explorer.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n  Copyright 2017 PokitDok, Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n      http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n-->\n\n<section class=\"explorer\">\n  <table class=\"content\">\n    <tr>\n      <td class=\"left-column\">\n        <section class=\"view-select\">\n            <mat-select placeholder=\"Explore all\" [(ngModel)]=\"viewType\" (change)=\"onChangeViewType(viewType)\" name=\"view\">\n              <mat-option *ngFor=\"let view of views\" [value]=\"view\">\n                {{ view }}\n              </mat-option>\n            </mat-select>\n        </section>\n\n        <section>\n          <ng-container *ngIf=\"loading\">\n            <div class=\"loader\"></div>\n          </ng-container>\n\n          <section class=\"view-select\">\n            <mat-select [(ngModel)]=\"navPageSize\" name=\"size\" (change)=\"updateNavPaging({pageSize: navPageSize, pageIndex: 0})\">\n              <mat-option *ngFor=\"let size of navPageSizeOptions\" [value]=\"size\">{{ size }} per page</mat-option>\n            </mat-select>\n          </section>\n\n          <ng-container *ngIf=\"!loading\">\n            <ng-container *ngIf=\"items && items.length\">\n              <dynamic-view-loader class=\"item\"\n                [ngClass]=\"{'active': item === selectedItem}\"\n                *ngFor=\"let item of items\"\n                [component]=\"listViewComponent\"\n                [data]=\"item\"\n                (click)=\"showItemDetails(item)\">\n              </dynamic-view-loader>\n            </ng-container>\n\n            <ng-container *ngIf=\"!items || !items.length\">\n              <p class=\"no-results\">No {{ viewType }} to display.</p>\n            </ng-container>\n            <ng-container *ngIf=\"nextPosition\">\n              <div class=\"list-item\">\n                <button mat-button class=\"mat-raised-button full-width\" (click)=\"nextPage()\">Load Next {{navPageSize}}</button>\n              </div>\n            </ng-container>\n          </ng-container>\n\n        </section>\n        \n      </td>\n      <td class=\"right-column mat-elevation-z2\">\n\n        <ng-container *ngIf=\"loading\">\n          <div class=\"loader\"></div>\n        </ng-container>\n\n        <ng-container *ngIf=\"!loading\">\n          <div class=\"detail\" *ngIf=\"selectedItem\">\n            <ng-container *ngIf=\"viewType === 'transactions'\">\n              <h2 class=\"h2 with-subheader\">\n                Transaction Detail<br/>\n              </h2>\n              <p class=\"id\">ID: <a [routerLink]=\"'/transactions/' + selectedItem.header_signature\">{{ selectedItem.header_signature }}</a></p>\n              <transaction [data]=\"selectedItem\"></transaction>\n            </ng-container>\n            <ng-container *ngIf=\"viewType === 'blocks'\">\n              <h2 class=\"h2 with-subheader\">\n                Block Detail<br/>\n              </h2>\n              <p class=\"id\">\n                ID: <a [routerLink]=\"'/blocks/' + selectedItem.header_signature\">\n                  {{ selectedItem.header_signature }}</a>\n              </p>\n              <block [data]=\"selectedItem\"></block>\n            </ng-container>\n            <ng-container *ngIf=\"viewType === 'batches'\">\n              <h2 class=\"h2 with-subheader\">\n                Batch Detail<br/>\n              </h2>\n              <p class=\"id\">ID: <a [routerLink]=\"'/batches/' + selectedItem.header_signature\">{{ selectedItem.header_signature }}</a></p>\n              <batch [data]=\"selectedItem\"></batch>\n            </ng-container>\n          </div>\n\n          <div class=\"detail\" *ngIf=\"!selectedItem\">\n            <p class=\"no-item-selected\">No item selected.</p>\n          </div>\n        </ng-container>\n        \n      </td>\n    </tr>\n  </table>\n</section>\n"

/***/ }),

/***/ "./src/app/explorer/explorer.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Copyright 2017 PokitDok, Inc.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n * ------------------------------------------------------------------------------\n */\nsection.explorer {\n  height: 100%; }\ntable.content {\n  width: 100%;\n  height: 100%;\n  table-layout: fixed;\n  margin-bottom: 0; }\ntable td {\n  padding: 0; }\n.left-column {\n  background: #f8f8f8;\n  width: 350px;\n  vertical-align: top; }\n.right-column {\n  vertical-align: top; }\n.left-column section,\n.right-column section {\n  width: 100%;\n  margin: 0; }\n.view-select {\n  padding: 36px 24px 16px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.explorer hr {\n  margin-top: 16px;\n  margin-bottom: 16px; }\n.detail {\n  margin: 48px; }\n.detail.no-content p {\n  font-size: 28px;\n  color: rgba(0, 0, 0, 0.14); }\n.bg.inherit {\n  background: inherit; }\n.mat-paginator {\n  background: transparent; }\n.no-results {\n  padding: 20px; }\n.no-results, .no-item-selected {\n  color: rgba(0, 0, 0, 0.5); }\n"

/***/ }),

/***/ "./src/app/explorer/explorer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExplorerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_api_service_api_service__ = __webpack_require__("./src/app/services/api-service/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__blocks_block_list_item_block_list_item_component__ = __webpack_require__("./src/app/blocks/block-list-item/block-list-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__batches_batch_list_item_batch_list_item_component__ = __webpack_require__("./src/app/batches/batch-list-item/batch-list-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__transactions_transaction_list_item_transaction_list_item_component__ = __webpack_require__("./src/app/transactions/transaction-list-item/transaction-list-item.component.ts");
/**
 * Copyright 2017 PokitDok, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ------------------------------------------------------------------------------
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Component used to view detailed information about blocks, batches, and
 * transactions, and their relationships to one another.
 */
var ExplorerComponent = (function () {
    /**
     * @param apiService {APIService} - service for making API calls
     * @param activatedRoute {ActivatedRoute} - currently active route
     * @param router {Router} - service for accessing the UI router
     * @param snackBar {MatSnackBar} - service for showing snackbar notifications
     */
    function ExplorerComponent(apiService, activatedRoute, router, snackBar) {
        this.apiService = apiService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.snackBar = snackBar;
        // types of views user can select to see
        this.views = ['transactions', 'batches', 'blocks'];
        // list navigation pagination settings
        this.navPageSize = 10;
        this.navPageIndex = 0;
        this.navTotalItems = 0;
        this.navPageSizeOptions = [5, 10, 20, 50];
        // whether page is waiting to be displayed until the API request getting
        // its items has completed
        this.loading = true;
        // error message to display when unable to complete API request
        this.apiErrorMessage = 'Error fetching items from API';
        // empty subject to make sure subscription is destroyed when component is
        // destroyed
        this.ngUnsubscribe = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        // for dynamically loading components by selected view type for list items
        this.listViewComponents = {
            'blocks': __WEBPACK_IMPORTED_MODULE_6__blocks_block_list_item_block_list_item_component__["a" /* BlockListItemComponent */],
            'batches': __WEBPACK_IMPORTED_MODULE_7__batches_batch_list_item_batch_list_item_component__["a" /* BatchListItemComponent */],
            'transactions': __WEBPACK_IMPORTED_MODULE_8__transactions_transaction_list_item_transaction_list_item_component__["a" /* TransactionListItemComponent */]
        };
    }
    ExplorerComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe to router event
        this.activatedRoute.queryParams.subscribe(function (queryParams) {
            var viewType = queryParams['view'];
            // prevent extra load during query param update
            if (_this.viewType && viewType === _this.viewType) {
                return false;
            }
            // set active view type if type is set in the URL
            _this.viewType = _this.views.indexOf(viewType) !== -1 ?
                viewType : 'transactions';
            _this.subscribeToItems(_this.viewType, {
                pageSize: _this.navPageSize, pageIndex: _this.navPageIndex
            });
        });
    };
    /**
     * Updates component view based on data returned from the API.
     * @param data {any} - data returned from API subscription
     */
    ExplorerComponent.prototype.updateView = function (data) {
        if (!data)
            return;
        if (this.navPageIndex === 0) {
            this.items = [];
        }
        this.items = data.data;
        this.navTotalItems = data.data.length;
        this.currentHead = data.head;
        this.nextPosition = data.paging.next_position;
        this.selectedItem = this.items[0];
        // update component used to render the list of API items
        this.listViewComponent = this.listViewComponents[this.viewType];
        // update url to reflect selection
        this.updateParams(this.viewType, this.currentHead);
        // show list of items after API is done loading
        this.loading = false;
    };
    /**
     * Updates listed API items based on paging updates.
     * @param event {object} - paging event
     */
    ExplorerComponent.prototype.updateNavPaging = function (event) {
        this.navPageSize = event['pageSize'];
        this.navPageIndex = event['pageIndex'];
        this.subscribeToItems(this.viewType, event);
    };
    /**
     * Updates the page when the view type is changed.
     * @param viewType {string} - type of view to change to
     */
    ExplorerComponent.prototype.onChangeViewType = function (viewType) {
        this.viewType = viewType;
        this.currentHead = null;
        this.nextPosition = null;
        this.navPageIndex = 0;
        this.subscribeToItems(this.viewType, {
            pageSize: this.navPageSize, pageIndex: this.navPageIndex
        });
    };
    /**
     * Subscribes to items fetched from an API endpoint.
     * @param viewType {string} - name of the type of view currently shown
     * @param pagingSettings {object} - settings for API paging
     */
    ExplorerComponent.prototype.subscribeToItems = function (viewType, pagingSettings) {
        var _this = this;
        // nav should wait for API to load
        this.loading = true;
        // end previous subscription before starting a new one
        if (this.apiItemsSubscription) {
            this.apiItemsSubscription.unsubscribe();
        }
        pagingSettings['head'] = this.currentHead;
        pagingSettings['start'] = this.nextPosition;
        this.apiItemsSubscription = this.apiService
            .getItems(viewType, pagingSettings)
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (data) {
            _this.updateView(data);
            _this.error = undefined;
        }, function (error) {
            _this.loading = false;
            _this.error = error.message ? error.message : _this.apiErrorMessage + '.';
            _this.snackBar.open(_this.apiErrorMessage +
                '(' + _this.viewType + ').', undefined, {
                duration: 3000,
            });
            console.log(_this.apiErrorMessage + ' (' + _this.viewType + '): ', error);
        });
    };
    /**
     * Updates the current detail view to show the selected item.
     * @param item {object} - item to be shown in the detail view
     */
    ExplorerComponent.prototype.showItemDetails = function (item) {
        this.selectedItem = item;
        // update url to reflect selection
        this.updateParams(this.viewType, this.currentHead);
    };
    /**
     * Updates query string parameters so that specific view can be represented in
     * the URL.
     * @param viewType {string} - name of the type of view currently shown
     */
    ExplorerComponent.prototype.updateParams = function (viewType, currentHead) {
        // update query string params to reflect selected item
        var queryParams = Object.assign({}, this.activatedRoute.snapshot.queryParams);
        queryParams['view'] = viewType;
        queryParams['head'] = currentHead;
        // navigate to same route to update query string params
        this.router.navigate(['.'], {
            queryParams: queryParams,
            replaceUrl: true,
            relativeTo: this.activatedRoute
        });
    };
    ExplorerComponent.prototype.ngOnDestroy = function () {
        // complete empty subscription to end all other active subscriptions
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    ExplorerComponent.prototype.nextPage = function () {
        // load the next page of results
        this.updateNavPaging({
            pageSize: this.navPageSize,
            pageIndex: this.navPageIndex + 1
        });
    };
    ExplorerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-explorer',
            template: __webpack_require__("./src/app/explorer/explorer.component.html"),
            styles: [__webpack_require__("./src/app/explorer/explorer.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_api_service_api_service__["a" /* APIService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatSnackBar */]])
    ], ExplorerComponent);
    return ExplorerComponent;
}());



/***/ }),

/***/ "./src/app/pipes/base64-decode/base64-decode.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Base64DecodePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/**
 * Copyright 2017 PokitDok, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ------------------------------------------------------------------------------
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Used to decode base64 data within templates.
 */
var Base64DecodePipe = (function () {
    function Base64DecodePipe() {
    }
    Base64DecodePipe_1 = Base64DecodePipe;
    /**
     * Transforms the value passed from base64 to a plain text string.
     * @param value {any} - value to be transformed from base64
     * @param args {any} - any additional information for the pipe
     * @returns {string} - value as a readable string
     */
    Base64DecodePipe.prototype.transform = function (value, args) {
        if (!value)
            return value;
        var base64Regex = new RegExp(Base64DecodePipe_1.BASE64_REGEX_STR);
        var decodedValue = value;
        // attempt to decode from base64 if needed
        if (base64Regex.test(value)) {
            try {
                decodedValue = atob(value);
            }
            catch (e) {
            }
        }
        return decodedValue;
    };
    Base64DecodePipe.BASE64_REGEX_STR = '^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$';
    Base64DecodePipe = Base64DecodePipe_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'base64decode'
        })
    ], Base64DecodePipe);
    return Base64DecodePipe;
    var Base64DecodePipe_1;
}());



/***/ }),

/***/ "./src/app/pipes/ui-ace-data-transform/ui-ace-data-transform.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UIAceDataTransformPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base64_decode_base64_decode_pipe__ = __webpack_require__("./src/app/pipes/base64-decode/base64-decode.pipe.ts");
/**
 * Copyright 2017 PokitDok, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ------------------------------------------------------------------------------
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Used to transform data into a format displayable by Angular UI Ace, a textbox
 * that provides syntax hightlighting and line numbers for code/data.
 */
var UIAceDataTransformPipe = (function () {
    function UIAceDataTransformPipe(base64Decode) {
        this.base64Decode = base64Decode;
    }
    /**
     * Transforms the data for display by Angular UI Ace.
     * @param value {any} - data to be transformed for display by UI Ace
     * @param args {any} - any additional information for the pipe
     * @returns {string} result.data - data as a string for display in UI ACE
     * @returns {string} result.aceDisplayMode - type of data that determines
     *   formatting like syntax highlighting
     */
    UIAceDataTransformPipe.prototype.parseForUIAce = function (value, args) {
        if (!value)
            value = '';
        // set up default result
        var result = {
            data: '',
            aceDisplayMode: 'text'
        };
        // decode transaction's payload from base64 into JSON
        var fromBase64 = this.base64Decode.transform(value);
        // attempt to parse the result as JSON
        var payloadData = fromBase64;
        try {
            payloadData = JSON.parse(fromBase64);
        }
        catch (e) {
        }
        finally {
            // if it's already a string, just return that
            if (typeof payloadData === 'string') {
                result.data = payloadData;
            }
            else {
                // whatever else it is, turn it into a string
                result.data = JSON.stringify(payloadData, null, 2);
                // change UI Ace's display mode to JSON for syntax highlighting
                result.aceDisplayMode = 'json';
            }
        }
        return result;
    };
    /**
     * Transforms the data for display by Angular UI Ace (only gets data) so
     * pipe can be used in a template.
     * @param value {any} - data to be transformed for display by UI Ace
     * @param args {any} - any additional information for the pipe
     * @returns {string} - data as a string for display in UI ACE
     */
    UIAceDataTransformPipe.prototype.transform = function (value, args) {
        // only send data back for template function
        return this.parseForUIAce(value, args).data;
    };
    UIAceDataTransformPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'uiAceDataTransform'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__base64_decode_base64_decode_pipe__["a" /* Base64DecodePipe */]])
    ], UIAceDataTransformPipe);
    return UIAceDataTransformPipe;
}());



/***/ }),

/***/ "./src/app/services/api-service/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_timeout__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/timeout.js");
/**
 * Copyright 2017 PokitDok, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ------------------------------------------------------------------------------
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Service to assist in retrieving data from a RESTful API.
 */
var APIService = (function () {
    /**
     * @param http {Http} - service for making HTTP requests
     */
    function APIService(http) {
        this.http = http;
        // defaults for paging settings
        this.pagingDefaults = {
            pageSize: 20,
            pageIndex: 0
        };
        // milliseconds before service times out
        this.apiTimeout = 10000;
        // set url from environment variables
        this.apiURL = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiURL;
        // if API timeout specified, update
        if (__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiTimeout)
            this.apiTimeout = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiTimeout;
    }
    /**
     * Retrieve paged list of items from an API.
     * @param resourceName {string} - name of the resource (what it's called in
     *   the API endpoint) to fetch from the API
     * @param params {object} - optional parameters to be passed to API to control
     *   things like paging
     * @param params.pageSize {number} - number of items returned in the API
     *   request as a page
     * @param params.pageIndex {number} - offset for items from API
     * @return {Observable} - observable watching the results of the API request
     */
    APIService.prototype.getItems = function (resourceName, params) {
        var options = __WEBPACK_IMPORTED_MODULE_0_lodash__["defaults"](params, this.pagingDefaults);
        var url = this.apiURL + '/' + resourceName + '?limit=' + options['pageSize'];
        if (params && params['head']) {
            url += '&head=' + params['head'];
        }
        if (params && params['start']) {
            url += '&start=' + params['start'];
        }
        return this.http.get(url)
            .timeout(this.apiTimeout)
            .map(function (response) { return response.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw(err); });
    };
    /**
     * Retrieve an item from the API by its unique identifier.
     * @param resourceName {string} - name of the resource (what it's called in
     *   the API endpoint) to fetch from the API
     * @param id {string} - unique identifier for retrieving the item from the API
     * @return {Observable} - observable watching the results of the API request
     */
    APIService.prototype.getItemByID = function (resourceName, id) {
        return this.http.get(this.apiURL + '/' + resourceName + '/' + id)
            .timeout(this.apiTimeout)
            .map(function (response) { return response.json().data; })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw(err); });
    };
    APIService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], APIService);
    return APIService;
}());



/***/ }),

/***/ "./src/app/states/state-monitor/state-monitor.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n  Copyright 2017 PokitDok, Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n      http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n-->\n\n<section class=\"detail\">\n  <div class=\"container\">\n    <h2 class=\"h2\">State Monitor</h2>\n\n    <table class=\"full-width\">\n      <thead>\n        <tr>\n          <th>Monitored Address</th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody *ngIf=\"!addresses.length\">\n        <tr>\n          <td colspan=\"2\"><em>No addresses being watched for state changes.</em></td>\n        </tr>\n      </tbody>\n      <tbody *ngIf=\"addresses.length\">\n        <tr *ngFor=\"let address of addresses; let idx = index\" class=\"address-row\">\n          <td>{{ address }}</td>\n          <td class=\"text-right\">\n            <button mat-icon-button class=\"mat-button delete-button\" (click)=\"removeAddress(idx)\">\n              <mat-icon class=\"address-rm\">close</mat-icon>\n            </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n\n    <div class=\"row\">\n       <div class=\"ten columns\">\n        <mat-form-field class=\"full-width\">\n          <input [(ngModel)]=\"newAddress\" \n            matInput class=\"full-width\"\n            placeholder=\"Add address\" />\n        </mat-form-field>\n      </div>\n      <div class=\"two columns\"> \n        <button mat-button class=\"mat-raised-button full-width add-button\" (click)=\"addAddress(newAddress)\">\n          add\n        </button>\n      </div>\n    </div>\n\n    <hr/>\n\n    <data-table [data]=\"states\" [type]=\"'States'\"></data-table>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/states/state-monitor/state-monitor.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Copyright 2017 PokitDok, Inc.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n * ------------------------------------------------------------------------------\n */\n.detail {\n  margin-top: 48px; }\n.h2 {\n  margin-top: 0; }\n.address-row td {\n  padding: 3px 15px; }\n.address-rm {\n  height: 24px;\n  width: 16px;\n  font-size: 16px; }\n"

/***/ }),

/***/ "./src/app/states/state-monitor/state-monitor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateMonitorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/**
 * Copyright 2017 PokitDok, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ------------------------------------------------------------------------------
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Component for showing state deltas as they are received from a websocket.
 */
var StateMonitorComponent = (function () {
    /**
     * @param http {Http} - service for making HTTP requests
     */
    function StateMonitorComponent(http) {
        this.http = http;
        this.webSocketUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiURL.replace(/^(https?):\/\//, 'ws:') + '/subscriptions';
    }
    StateMonitorComponent.prototype.ngOnInit = function () {
        this.states = [];
        this.addresses = [];
    };
    StateMonitorComponent.prototype.ngOnDestroy = function () {
        this.closeWebsocket();
    };
    StateMonitorComponent.prototype.unloadHandler = function (event) {
        // make sure websocket is closed if the page closes
        this.closeWebsocket();
    };
    /**
     * Add a address to the list of addresses monitored for state deltas.
     * @param address {string} - address to be added to the list of
     *   addresses subscribed to
     */
    StateMonitorComponent.prototype.addAddress = function (address) {
        // if no address is sent, no need to make any changes
        if (!address)
            return;
        this.addresses.push(address);
        this.newAddress = '';
        // restart state delta subscription with newly added address included
        this.resetWebsocket(this.addresses);
    };
    /**
     * Removes a address from the list of addresses monitored for state
     * deltas.
     * @param index {number} - the index of the address in the list of
     *   addresses subscribed to
     */
    StateMonitorComponent.prototype.removeAddress = function (index) {
        // only remove address from existing address list at valid index
        if (!this.addresses || this.addresses.length <= index)
            return;
        // check index bounds
        if (index < 0 || index >= this.addresses.length)
            return;
        // remove item at index
        this.addresses.splice(index, 1);
        // restart state delta subscription with removed address not included
        this.resetWebsocket(this.addresses);
    };
    /**
     * Reset any existing websocket connection with new subscription information.
     * @param addresses {string[]} - list of addresses to subscribe to via
     *     websocket
     */
    StateMonitorComponent.prototype.resetWebsocket = function (addresses) {
        // reset websocket connection
        this.closeWebsocket();
        this.openWebsocket(this.addresses);
    };
    /**
     * Subscribes to state changes made to specific address spaces.
     * @param addresses {number} - list of addresses to subscribe to via
     *   websocket
     */
    StateMonitorComponent.prototype.openWebsocket = function (addresses) {
        var _this = this;
        if (!addresses || !addresses.length)
            return;
        // subscribe to state changes from specified addresses
        this.webSocket = new WebSocket(this.webSocketUrl);
        this.webSocket.onopen = function () {
            _this.webSocket.send(JSON.stringify({
                'action': 'subscribe',
                'address_prefixes': addresses
            }));
        };
        this.webSocket.onmessage = function (message) {
            var newStates = _this.parseDeltaSubscriptionMessage(message);
            if (newStates && newStates.length) {
                _this.states = _this.states.concat(newStates);
            }
        };
    };
    /**
     * Parses response from state delta subscription.
     * @param message {Object} - response sent from websocket subscription
     * @return {Object[]} - list of summaries of all state changes included in
     *   original message
     */
    StateMonitorComponent.prototype.parseDeltaSubscriptionMessage = function (message) {
        // list of parsed state delta data from subscription message
        var stateChanges = [];
        // message needs to include data
        if (!message['data'])
            return stateChanges;
        // data from the message
        var messageData = JSON.parse(message['data']);
        console.log(messageData);
        var stateChangeData = messageData['state_changes'];
        // if no state changes are included in the result, no need to report it
        if (!stateChangeData)
            return stateChanges;
        // compile summary of information for each state delta included in
        // subscription message
        stateChangeData.forEach(function (change) {
            stateChanges.push({
                block_id: messageData['block_id'],
                block_num: messageData['block_num'],
                previous_block_id: messageData['previous_block_id'],
                payload: change
            });
        });
        return stateChanges;
    };
    /**
     * Unsubscribes to state changes.
     */
    StateMonitorComponent.prototype.closeWebsocket = function () {
        if (this.webSocket) {
            this.webSocket.send(JSON.stringify({
                'action': 'unsubscribe'
            }));
            this.webSocket.close();
        }
        this.webSocket = null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], StateMonitorComponent.prototype, "states", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:unload', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], StateMonitorComponent.prototype, "unloadHandler", null);
    StateMonitorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-state-monitor',
            template: __webpack_require__("./src/app/states/state-monitor/state-monitor.component.html"),
            styles: [__webpack_require__("./src/app/states/state-monitor/state-monitor.component.scss"), __webpack_require__("./src/styles/shared/_explorer-detail.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], StateMonitorComponent);
    return StateMonitorComponent;
}());



/***/ }),

/***/ "./src/app/states/state/state.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n  Copyright 2017 PokitDok, Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n      http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n-->\n\n<div class=\"well\">\n  <dl class=\"horizontal\">\n    <dt>Block ID</dt>\n    <dd>{{ data.block_id }}</dd>\n\n    <dt>Block Number</dt>\n    <dd>{{ data.block_num }}</dd>\n  </dl>\n</div>\n\n<hr/>\n\n<h3 class=\"h3\">Change</h3>\n\n<div ace-editor\n  [text]=\"payloadJSON\"\n  [mode]=\"aceMode\"\n  [theme]=\"'twilight'\"\n  [options]=\"aceOptions\"\n  [readOnly]=\"false\"\n  class=\"ace-editor\"></div>\n"

/***/ }),

/***/ "./src/app/states/state/state.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Copyright 2017 PokitDok, Inc.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n * ------------------------------------------------------------------------------\n */\n"

/***/ }),

/***/ "./src/app/states/state/state.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes_base64_decode_base64_decode_pipe__ = __webpack_require__("./src/app/pipes/base64-decode/base64-decode.pipe.ts");
/**
 * Copyright 2017 PokitDok, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ------------------------------------------------------------------------------
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Component for showing details of a state delta.
 */
var StateComponent = (function () {
    /**
     * @param base64DecodePipe {Base64DecodePipe} - used for decoding base64
     *   to ascii strings
     */
    function StateComponent(base64DecodePipe) {
        this.base64DecodePipe = base64DecodePipe;
        // data representing the state delta
        this.data = {};
        // data stringified for Angular UI Ace to display
        this.payloadJSON = '{}';
        // set default UI Ace display to show as plain text (no syntax highlighting)
        this.aceMode = 'json';
    }
    StateComponent.prototype.ngOnInit = function () {
        // format payload for Angular UI Ace
        this.updatePayloadData(this.data.payload);
    };
    StateComponent.prototype.ngOnChanges = function () {
        // format payload for Angular UI Ace
        this.updatePayloadData(this.data.payload);
    };
    /**
     * Updates state delta payload so it can be displayed in UI Ace
     * @param payloadData - data representing the payload within a state delta
     */
    StateComponent.prototype.updatePayloadData = function (payloadData) {
        if (payloadData) {
            payloadData.value = this.parsePayloadValue(payloadData.value);
            // if valid results are parsed, update payload JSON
            if (payloadData.value) {
                this.payloadJSON = JSON.stringify(payloadData, null, 2);
            }
            else {
                this.payloadJSON = '{}';
            }
        }
    };
    /**
     * Transforms the payload's `value` property, a base64 encoded payload of the
     * data within a state delta, into JSON for display with the rest of the state
     * delta.
     * @param value - the data of the actual change for a state delta
     */
    StateComponent.prototype.parsePayloadValue = function (value) {
        if (!value)
            return value;
        // format payload for Angular UI Ace
        var fromBase64 = this.base64DecodePipe.transform(value);
        // try to parse payload value as JSON; otherwise, leave as-is
        try {
            fromBase64 = JSON.parse(fromBase64);
        }
        catch (e) { }
        return fromBase64;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], StateComponent.prototype, "data", void 0);
    StateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'state',
            template: __webpack_require__("./src/app/states/state/state.component.html"),
            styles: [__webpack_require__("./src/app/states/state/state.component.scss"), __webpack_require__("./src/styles/shared/_explorer-detail.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__pipes_base64_decode_base64_decode_pipe__["a" /* Base64DecodePipe */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__pipes_base64_decode_base64_decode_pipe__["a" /* Base64DecodePipe */]])
    ], StateComponent);
    return StateComponent;
}());



/***/ }),

/***/ "./src/app/transactions/transaction-detail/transaction-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n  Copyright 2017 PokitDok, Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n      http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n-->\n\n<entity-detail [collection]=\"'transactions'\" [displayName]=\"'Transaction'\" [component]=\"component\"></entity-detail>\n"

/***/ }),

/***/ "./src/app/transactions/transaction-detail/transaction-detail.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Copyright 2017 PokitDok, Inc.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n * ------------------------------------------------------------------------------\n */\n"

/***/ }),

/***/ "./src/app/transactions/transaction-detail/transaction-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transaction_transaction_component__ = __webpack_require__("./src/app/transactions/transaction/transaction.component.ts");
/**
 * Copyright 2017 PokitDok, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ------------------------------------------------------------------------------
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Detail view for a Transaction.
 */
var TransactionDetailComponent = (function () {
    function TransactionDetailComponent() {
        // component to load for transaction information
        this.component = __WEBPACK_IMPORTED_MODULE_1__transaction_transaction_component__["a" /* TransactionComponent */];
    }
    TransactionDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-transaction-detail',
            template: __webpack_require__("./src/app/transactions/transaction-detail/transaction-detail.component.html"),
            styles: [__webpack_require__("./src/app/transactions/transaction-detail/transaction-detail.component.scss")]
        })
    ], TransactionDetailComponent);
    return TransactionDetailComponent;
}());



/***/ }),

/***/ "./src/app/transactions/transaction-list-item/transaction-list-item.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n  Copyright 2017 PokitDok, Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n      http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n-->\n\n<div class=\"list-item\">\n  <div class=\"content\">\n    <p class=\"title ellipsis\">Transaction <a>{{ data.header_signature }}</a></p>\n    <p class=\"detail ellipsis\">{{ data.header.family_name }}, v{{ data.header.family_version }}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/transactions/transaction-list-item/transaction-list-item.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Copyright 2017 PokitDok, Inc.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n * ------------------------------------------------------------------------------\n */\n"

/***/ }),

/***/ "./src/app/transactions/transaction-list-item/transaction-list-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionListItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/**
 * Copyright 2017 PokitDok, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ------------------------------------------------------------------------------
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * A smaller view for showing a transaction as a list item.
 */
var TransactionListItemComponent = (function () {
    function TransactionListItemComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TransactionListItemComponent.prototype, "data", void 0);
    TransactionListItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'transaction-list-item',
            template: __webpack_require__("./src/app/transactions/transaction-list-item/transaction-list-item.component.html"),
            styles: [__webpack_require__("./src/app/transactions/transaction-list-item/transaction-list-item.component.scss"), __webpack_require__("./src/styles/shared/_explorer-list-item.scss")]
        })
    ], TransactionListItemComponent);
    return TransactionListItemComponent;
}());



/***/ }),

/***/ "./src/app/transactions/transaction/transaction.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n  Copyright 2017 PokitDok, Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n      http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n-->\n\n<div class=\"well\" *ngIf=\"data.header\">\n  <dl class=\"horizontal\">\n    <dt>Family</dt>\n    <dd>{{ data.header.family_name }}, v{{ data.header.family_version }}</dd>\n\n    <dt>Signer Public Key</dt>\n    <dd><a routerLink=\"/wallet\">{{ data.header.signer_public_key || '-' }}</a></dd>\n\n    <dt>Batcher Public Key</dt>\n    <dd><a routerLink=\"/wallet\">{{ data.header.batcher_public_key || '-' }}</a></dd>\n\n    <dt>Nonce</dt>\n    <dd>{{ data.header.nonce || '-' }}</dd>\n  </dl>\n</div>\n\n<hr/>\n\n<div class=\"row\" *ngIf=\"data.header && (data.header.inputs || data.header.outputs)\">\n  <div class=\"six columns\">\n    <h3 class=\"h3\">Inputs</h3>\n    <ul class=\"input-output-list\">\n      <li *ngFor=\"let input of data.header.inputs\" class=\"ellipsis\">\n        <a routerLink=\"/state-monitor\">{{ input }}</a><br/>\n      </li>\n    </ul>\n  </div>\n  <div class=\"six columns\">\n  <h3 class=\"h3\">Outputs</h3>\n    <ul class=\"input-output-list\">\n      <li *ngFor=\"let output of data.header.outputs\" class=\"ellipsis\">\n        <a routerLink=\"/state-monitor\">{{ output }}</a>\n      </li>\n    </ul>\n  </div>\n</div>\n\n<ng-container *ngIf=\"data.header && (data.header.dependencies && data.header.dependencies.length)\">\n  <hr/>\n  <h3 class=\"h3\">Dependencies</h3>\n  <ul class=\"dependencies-list\">\n    <li *ngFor=\"let dependency of data.header.dependencies\" class=\"ellipsis\">\n      <a [routerLink]=\"'/transactions/' + dependency\">{{ dependency }}</a><br/>\n    </li>\n  </ul>\n</ng-container>\n\n<hr/>\n\n<h3 class=\"h3\">Payload</h3>\n\n<div ace-editor\n   [text]=\"payloadJSON\"\n   [mode]=\"aceMode\"\n   [theme]=\"'twilight'\"\n   [options]=\"aceOptions\"\n   [readOnly]=\"false\"\n   class=\"ace-editor\"></div>\n"

/***/ }),

/***/ "./src/app/transactions/transaction/transaction.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Copyright 2017 PokitDok, Inc.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n * ------------------------------------------------------------------------------\n */\n.input-output-list li {\n  padding-left: 1px;\n  margin-bottom: 0; }\n"

/***/ }),

/***/ "./src/app/transactions/transaction/transaction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes_base64_decode_base64_decode_pipe__ = __webpack_require__("./src/app/pipes/base64-decode/base64-decode.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_ui_ace_data_transform_ui_ace_data_transform_pipe__ = __webpack_require__("./src/app/pipes/ui-ace-data-transform/ui-ace-data-transform.pipe.ts");
/**
 * Copyright 2017 PokitDok, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ------------------------------------------------------------------------------
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * A component that formats all the data associated with a transaction for
 * display.
 */
var TransactionComponent = (function () {
    /**
     * @param uiAceDataTransformPipe {UIAceDataTransformPipe} - used to transform
     * data into a format displayable by Angular UI Ace
     */
    function TransactionComponent(uiAceDataTransformPipe) {
        this.uiAceDataTransformPipe = uiAceDataTransformPipe;
        // data representing the transaction
        this.data = {};
        // data stringified for Angular UI Ace to display
        this.payloadJSON = '{}';
        // set default UI Ace display to show as plain text (no syntax highlighting)
        this.aceMode = 'text';
    }
    // ngOnInit needed in addition to ngOnChanges because when this view is
    // dynamically loaded as a component, ngOnInit fires, but ngOnChanges doesn't.
    TransactionComponent.prototype.ngOnInit = function () {
        // format payload for Angular UI Ace
        this.updatePayloadData(this.data['payload']);
    };
    TransactionComponent.prototype.ngOnChanges = function () {
        // format payload for Angular UI Ace
        this.updatePayloadData(this.data['payload']);
    };
    /**
     * Updates transaction payload so it can be displayed in UI Ace
     * @param payloadData - data representing the payload within a transaction
     */
    TransactionComponent.prototype.updatePayloadData = function (payloadData) {
        // format payload for Angular UI Ace
        var formatRes = this.getFormatData(payloadData);
        this.payloadJSON = formatRes.data;
        this.aceMode = formatRes.aceDisplayMode;
    };
    /**
     * Gets formatting information needed for a transaction payload to be
     * displayed in string form.
     * @param payloadData - data representing the payload within a transaction
     * @returns {object} formatted transaction payload data
     */
    TransactionComponent.prototype.getFormatData = function (payloadData) {
        var formatResult = this.uiAceDataTransformPipe.parseForUIAce(payloadData);
        return formatResult;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TransactionComponent.prototype, "data", void 0);
    TransactionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'transaction',
            template: __webpack_require__("./src/app/transactions/transaction/transaction.component.html"),
            styles: [__webpack_require__("./src/app/transactions/transaction/transaction.component.scss"), __webpack_require__("./src/styles/shared/_explorer-detail.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__pipes_base64_decode_base64_decode_pipe__["a" /* Base64DecodePipe */], __WEBPACK_IMPORTED_MODULE_2__pipes_ui_ace_data_transform_ui_ace_data_transform_pipe__["a" /* UIAceDataTransformPipe */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__pipes_ui_ace_data_transform_ui_ace_data_transform_pipe__["a" /* UIAceDataTransformPipe */]])
    ], TransactionComponent);
    return TransactionComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    apiURL: 'http://13.251.142.80:8090',
    apiTimeout: 3000
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/**
 * Copyright 2017 PokitDok, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ------------------------------------------------------------------------------
 */




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ "./src/styles/shared/_explorer-detail.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Copyright 2017 PokitDok, Inc.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n * ------------------------------------------------------------------------------\n */\ndl.large-detail dt {\n  font-size: 18px;\n  line-height: 21px; }\ndl.large-detail dd {\n  margin-left: 0;\n  margin-bottom: 24px;\n  line-height: 21px; }\n.item-row {\n  padding: 16px 24px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.14); }\nhr + .h3 {\n  margin-top: 32px; }\nul.dependencies-list {\n  margin-bottom: 32px; }\nul.dependencies-list li {\n    padding-left: 1px;\n    margin-bottom: 0; }\n.well dl {\n  margin: 0; }\n.well {\n  margin-bottom: 32px; }\ndl.horizontal dt {\n  float: left;\n  width: 160px;\n  overflow: hidden;\n  clear: left;\n  text-align: right;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-weight: 400; }\ndl.horizontal dd {\n  margin-left: 180px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n"

/***/ }),

/***/ "./src/styles/shared/_explorer-list-item.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Copyright 2017 PokitDok, Inc.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n * ------------------------------------------------------------------------------\n */\n.list-item {\n  padding-top: 24px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.14); }\n.content {\n  margin: 0 24px 24px 24px; }\n.title, .date, .detail {\n  margin-bottom: 0; }\n.title {\n  font-size: 14px; }\n.date {\n  font-size: 12px; }\n.detail {\n  font-size: 12px; }\n.active {\n  background-color: #fff; }\n"

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map