import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, ContentChildren, QueryList, ViewChildren, ContentChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as _moment from 'moment';
import { Board } from './model/board';
import * as Collections from 'typescript-collections';

@Component({
  selector: 'app-carreras',
  templateUrl: './carreras.component.html',
})
export class CarrerasComponent implements OnInit {

  picker = new FormControl(_moment());
  races: any[];
  hourses: any[];
  numHourses: number;
  numRaces: number;
  checksX: any[];
  checksY: any[];

  @ViewChild('parrilla') parrilla: ElementRef;


  constructor() { }

  onChangeHourses(event) {
    this.numHourses = event.source.value;
    this.checksX = new Array<number>(this.numHourses);
  }
  onChangeRaces(event) {
    this.numRaces = event.source.value;
    this.checksY = new Array<number>(this.numRaces);
  }

  saveBoard() {
    const el = document.getElementsByName('casillas');
    console.log(el);
  }

  ngOnInit() {
    this.races =  [
    {value: 1 },
    {value: 2 },
    {value: 3 },
    {value: 4 },
    {value: 5 },
    {value: 6 },
    {value: 7 },
    {value: 8 },
    {value: 9 },
    {value: 10 },
  ];

  this.hourses =  [
    {value: 1 },
    {value: 2 },
    {value: 3 },
    {value: 4 },
    {value: 5 },
    {value: 6 },
    {value: 7 },
    {value: 8 },
    {value: 9 },
    {value: 10 },
    {value: 11 },
    {value: 12 },
    {value: 13 },
    {value: 14 },
    {value: 15 },
    {value: 16 }
  ];

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



  algo(): void {
    console.log(this.picker);
  }
}
