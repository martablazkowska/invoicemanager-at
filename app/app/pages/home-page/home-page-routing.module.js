"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by Marta on 2017-02-03.
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_page_component_1 = require("./home-page.component");
var homeRoutes = [
    { path: '', component: home_page_component_1.HomePageComponent }
];
var HomePageRoutingModule = (function () {
    function HomePageRoutingModule() {
    }
    return HomePageRoutingModule;
}());
HomePageRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(homeRoutes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], HomePageRoutingModule);
exports.HomePageRoutingModule = HomePageRoutingModule;
//# sourceMappingURL=home-page-routing.module.js.map