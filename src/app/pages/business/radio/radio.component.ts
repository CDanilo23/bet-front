import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'showcase-radio',
  templateUrl: './radio.component.html',
  styles: []
})
export class RadioComponent implements OnInit {

  favoritelenguage: string;
  lenguages: string[] = ['Java', '.Net', 'Python', 'JavaScript'];

  constructor() { }

  ngOnInit() {
  }

}
