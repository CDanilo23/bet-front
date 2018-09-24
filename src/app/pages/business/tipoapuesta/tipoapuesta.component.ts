import { Component, OnInit } from '@angular/core';
import { TipoApuesta } from './tipoapuesta';

@Component({
  selector: 'tipoapuesta',
  templateUrl: './tipoapuesta.component.html',
  styles: []
})
export class TipoApuestaComponent implements OnInit {

  tipos: TipoApuesta[];

  constructor() { }

  ngOnInit() {
    this.tipos = [
      {value: 'Pick-3', viewValue: 'Pick-3'},
      {value: 'Pick-4', viewValue: 'Pick-4'},
      {value: 'Trifecta', viewValue: 'Trifecta'}
    ];
  }

}
