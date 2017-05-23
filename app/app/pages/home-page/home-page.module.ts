/**
 * Created by Marta on 2017-02-03.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { SudokuListComponent } from '../../components/sudoku/sudoku-list.component';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';

@NgModule({
    imports: [
        CommonModule,
        HomePageRoutingModule
    ],
    declarations: [
        HomePageComponent,
        SudokuListComponent
    ]
})
export class HomePageModule {}
