import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as _moment from 'moment';
import { Board } from './model/board';
import { MatCheckbox } from '@angular/material';

@Component({
  selector: 'app-carreras',
  templateUrl: './carreras.component.html',
})
export class CarrerasComponent implements OnInit {

  picker = new FormControl(_moment());
  hourses: number[];
  numHourses: number;
  boards: Board[];
  races: number[];

  constructor() { }

  ngOnInit() {
    this.hourses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

   /* this.races = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const race1 = [
      {
        id: 1,
        ho1: 'ho1',
        ho2: 'ho2',
      }
    ];
    const race2 = [
      {
        id: 2,
        ho1: 'ho1',
        ho2: 'ho2',
      }
    ];
    this.boards = [
      {
        id: 1, races: race1
      },
      {
        id: 2, races: race2
      },
      {
        id: 3, races: race2
      },
      {
        id: 4, races: race2
      },
      {
        id: 5, races: race2
      },
      {
        id: 6, races: race2
      },
      {
        id: 7, races: race2
      },
      {
        id: 8, races: race2
      },
      {
        id: 9, races: race2
      },
      {
        id: 10, races: race2
      },
      {
        id: 11, races: race2
      },
      {
        id: 12, races: race2
      },
      {
        id: 13, races: race2
      },
      {
        id: 14, races: race2
      },
      {
        id: 15, races: race2
      },
      {
        id: 16, races: race2
      }
    ];
    */
  }

  onChange() {
    console.log(this.numHourses);
  }

  algo(): void {
    console.log(this.picker);
  }
}
