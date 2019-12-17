import { Component, OnInit } from '@angular/core';
import { Ganador } from './ganador';

const ELEMENT_DATA: Ganador [] = [
  {date: '12-12-18', tipo: 'pick3', detalle: 'detail', hipodromo: 'los alamitos',
carrera: '1', retencion: '0.00', total: '62,000.00', usuario: 'admin' }
];

@Component({
  selector: 'app-ganadores',
  templateUrl: './ganadores.component.html'
})
export class GanadoresComponent implements OnInit {

  winners: Ganador[] = [];
  winner: Ganador;
  displayedColumns: string[] = ['date', 'tipo', 'detalle', 'hipodromo',
'carrera', 'retencion', 'total', 'usuario'];


  constructor() { }

  ngOnInit() {

      this.winners = ELEMENT_DATA;
  }

}
