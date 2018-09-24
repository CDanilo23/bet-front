import { Component, OnInit } from '@angular/core';
import { Moneda } from './moneda';

@Component({
  selector: 'app-moneda',
  templateUrl: './moneda.component.html',
  styles: []
})
export class MonedaComponent implements OnInit {

  displayedColumns: string[] = ['name', 'value', 'dolarValue'];

  monedas: Moneda[];

  constructor() { }

  ngOnInit() {
    this.monedas = [
      { id: 1, name: '$100', value: '300000', dolarValue: '100'},
      { id: 2, name: '$50', value: '150000', dolarValue: '50'}
    ];
  }

}

