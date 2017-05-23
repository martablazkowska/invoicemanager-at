import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { Error404PageComponent } from './pages/error-404/error-404-page.component';
import {SudokuListComponent} from "./components/sudoku/sudoku-list.component";
import {AppRoutingModule} from './shared/app.routing';
import {AdminModule} from './admin/admin.module';
import {AuthModule} from './shared/auth.module';

import { UserService } from './shared/user.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    Error404PageComponent,
    SudokuListComponent
  ],
  imports: [
    AuthModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AdminModule,
    AppRoutingModule,
    FlashMessagesModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }