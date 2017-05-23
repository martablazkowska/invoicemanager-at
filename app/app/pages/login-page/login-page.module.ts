/**
 * Created by Marta on 2017-02-03.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';


import { LoginPageComponent } from './login-page.component';
import { LoginPageRoutingModule } from './login-page-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        LoginPageRoutingModule
    ],
    declarations: [
        LoginPageComponent
    ]
})
export class LoginPageModule {}
