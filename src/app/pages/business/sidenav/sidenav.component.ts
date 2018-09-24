import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'showcase-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: []
})
export class SidenavComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;
  showAcumulado = false;
  showGanadores = false;
  showApuestas = false;
  showHipodromos = false;
  showCarreras = false;
  showVentas = false;
  showMoneda = false;

  constructor() { }

  ngOnInit() {
  }

  sectionSelected(selection: string) {
    this.showAcumulado = false;
    this.showAcumulado = false;
    this.showApuestas = false;
    this.showHipodromos = false;
    this.showCarreras = false;
    this.showVentas = false;
    this.showMoneda = false;

    if (selection === 'acumulado') {
      console.log(selection);
      this.showAcumulado = true;
    } else if (selection === 'ganadores') {
      this.showAcumulado = true;
      console.log(selection);
    } else if (selection === 'apuestas') {
      this.showApuestas = true;
      console.log(selection);
    } else if (selection === 'hipodromos') {
      this.showHipodromos = true;
      console.log(selection);
    } else if (selection === 'carreras') {
      this.showCarreras = true;
      console.log(selection);
    } else if (selection === 'ventas') {
      this.showVentas = true;
      console.log(selection);
    } else if (selection === 'moneda') {
      this.showMoneda = true;
      console.log(selection);
    }

    this.sidenav.close();
  }

}
