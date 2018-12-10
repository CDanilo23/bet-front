import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ganadores',
  templateUrl: './ganadores.component.html'
})
export class GanadoresComponent implements OnInit {

  winners =  [];

  constructor() { }

  ngOnInit() {
    this.winners = [
      { date: '12-12-18' },
      { tipo: 'pick3' },
      { detalle: 'detail' },
      { hipodromo: 'los alamitos' },
      { noCarrera: '1' },
      { retencion: '0.00' },
      { total: '62,000.00' },
      { usuario: 'admin' }];
  }

}
