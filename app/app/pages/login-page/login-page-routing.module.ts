/**
 * Created by Marta on 2017-02-03.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent }    from './login-page.component';
const loginRoutes: Routes = [
    { path: 'login',  component: LoginPageComponent }
];
@NgModule({
    imports: [
        RouterModule.forChild(loginRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class LoginPageRoutingModule { }
