import { Component, OnInit } from '@angular/core';



import { Router } from '@angular/router';
import { Hipodromo } from '../hipodromo';
import { HipodromoService } from '../../../../service/hipodromo.service';


@Component({
  selector: 'app-hipodromos',
  templateUrl: './hipodromo.list.component.html'
})
export class HipodromoListComponent implements OnInit {

  hipodromos: Hipodromo[] = [];

  constructor(private hipodromoservice: HipodromoService, private router: Router) { }

  ngOnInit() {
    let hipo = new Hipodromo(1, 'Hipodromo medellin');
    this.hipodromos[0] = hipo; 
    return this.hipodromos;
    
  }

  crearHipodromo(){
    //this.router.navigateByUrl('hipodromo');
  }

}
