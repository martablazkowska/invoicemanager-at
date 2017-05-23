import {Component, OnInit, Input} from '@angular/core';

import {SudokuService} from '../../components/sudoku/sudoku.service';
import {Sudoku} from '../../components/sudoku/sudoku.service';

@Component({
  selector: 'app-sudoku-list',
  templateUrl: 'sudoku-list.component.html',
  providers: [SudokuService]
})
export class SudokuListComponent implements OnInit {

  public sudokuList: Sudoku[];

  constructor(private sudokuService: SudokuService) {
  }

  ngOnInit() {
    this.sudokuService.getTasks()
      .subscribe(tasks => {
        this.sudokuList = tasks;
      })
  }
}

