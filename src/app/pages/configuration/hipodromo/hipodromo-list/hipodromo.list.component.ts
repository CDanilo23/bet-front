import { Component, OnInit } from '@angular/core';



import { Router } from '@angular/router';
import { Hipodromo } from '../hipodromo';
import { HipodromoService } from '../../../../service/hipodromo.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hipodromos',
  templateUrl: './hipodromo.list.component.html'
})
export class HipodromoListComponent implements OnInit {

  hipodromos: Hipodromo[] = [];

  constructor(private hipodromoservice: HipodromoService, private router: Router) { }

  ngOnInit() {
    console.log('entro');
    return this.hipodromoservice.findAll().subscribe(p => {
      this.hipodromos = p 
    });
  }

}
