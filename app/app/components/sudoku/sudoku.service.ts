import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export interface Sudoku {
  id: number;
  name: string;
}

@Injectable()

export class SudokuService {

  constructor(private authHttp: AuthHttp) {
  }

  getTasks() {
    return this.authHttp.get('/api/tasks').map((res) => res.json());
  }
}
