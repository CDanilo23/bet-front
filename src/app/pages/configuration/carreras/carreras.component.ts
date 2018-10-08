import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as _moment from 'moment';
import { CarreraService, HipodromoService } from '../../../service/service.index';
import { Hipodromo } from './model/hipodromo';
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
  optionsMap: any;
  board: any;
  hipodromos: Hipodromo[] = [];

  flagCreateBoard = false;

  constructor(private carreraservice: CarreraService, private hipodromoService: HipodromoService) { }

  onChangeHipodromo() {
    console.log(this.hipodromos);
  }

  onChangeHourses(event) {
    this.numHourses = event.source.value;
    this.checksX = new Array(this.numHourses);
  }
  onChangeRaces(event) {
    this.numRaces = event.source.value;
    this.checksY = new Array(this.numRaces);
  }

  makeBoard() {

    let stringBuild = '{"optionsMap":[[ ';
    for (let i = 0; i < this.numRaces; i++) {

      for (let j = 0; j < this.numHourses; j++) {
        if (j === (this.numHourses - 1)) {
          stringBuild += 'false';
        } else if (j < this.numHourses) {
          stringBuild += 'false,';
        }
      }

      if (i < (this.numRaces - 1)) {
        stringBuild += ' ] , [';
      } else {
        stringBuild += ' ] ';
      }
    }
    stringBuild += ' ]}';
    this.optionsMap = JSON.parse(stringBuild)['optionsMap'];
    console.log(this.optionsMap);
    this.flagCreateBoard = true;
  }

  saveBoard() {
    let json = '[ ';
    for (let i = 0; i < this.optionsMap.length; i++) {
      json += ' {"hourses": [{';

      for (let j = 0; j < this.optionsMap[i].length; j++) {

        if (j === (this.optionsMap[i].length - 1)) {
          json += '"hourse' + (j + 1) + '":' + this.optionsMap[i][j];

        } else {
          json += '"hourse' + (j + 1) + '":' + this.optionsMap[i][j] + ' , ';
        }

      }

      if (i === (this.optionsMap.length - 1)) {
        json += ' }]} ';
      } else {
        json += ' }]} , ';
      }

    }
    json += ' ] ';
    console.log(json);
    this.carreraservice.createBoard(json);
  }



  updateCheckedOptions(optionx, optiony, event) {
    this.optionsMap[optiony][optionx] = event.target.checked;
    console.log(this.optionsMap);
  }

  ngOnInit() {
    this.hipodromoService.getAllHipodromos().subscribe((data: Hipodromo[]) => {
      this.hipodromos = data;
    },
      error => {
        console.log('Error fetching data', error);
      }
    );
    this.races = [
      { value: 1 },
      { value: 2 },
      { value: 3 },
      { value: 4 },
      { value: 5 },
      { value: 6 },
      { value: 7 },
      { value: 8 },
      { value: 9 },
      { value: 10 },
    ];

    this.hourses = [
      { value: 1 },
      { value: 2 },
      { value: 3 },
      { value: 4 },
      { value: 5 },
      { value: 6 },
      { value: 7 },
      { value: 8 },
      { value: 9 },
      { value: 10 },
      { value: 11 },
      { value: 12 },
      { value: 13 },
      { value: 14 },
      { value: 15 },
      { value: 16 }
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
