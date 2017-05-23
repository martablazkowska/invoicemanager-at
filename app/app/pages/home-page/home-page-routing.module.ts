/**
 * Created by Marta on 2017-02-03.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent }    from './home-page.component';
const homeRoutes: Routes = [
    { path: '',  component: HomePageComponent }
];
@NgModule({
    imports: [
        RouterModule.forChild(homeRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class HomePageRoutingModule { }
