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
var common_1 = require("@angular/common");
var sudoku_list_component_1 = require("../../components/sudoku/sudoku-list.component");
var home_page_component_1 = require("./home-page.component");
var home_page_routing_module_1 = require("./home-page-routing.module");
var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            home_page_routing_module_1.HomePageRoutingModule
        ],
        declarations: [
            home_page_component_1.HomePageComponent,
            sudoku_list_component_1.SudokuListComponent
        ]
    })
], HomePageModule);
exports.HomePageModule = HomePageModule;
//# sourceMappingURL=home-page.module.js.map