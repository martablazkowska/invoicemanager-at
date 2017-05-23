import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomePageComponent } from '../pages/home-page/home-page.component';
import { Error404PageComponent } from '../pages/error-404/error-404-page.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', component: HomePageComponent },
            { path: '**', component: Error404PageComponent }
        ], { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {};