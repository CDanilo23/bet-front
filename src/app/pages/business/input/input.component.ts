import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from './errorstatematcher';

@Component({
  selector: 'showcase-input',
  templateUrl: './input.component.html',
  styles: []
})
export class InputComponent implements OnInit {

  value = 'Clear me';

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  matcher = new  MyErrorStateMatcher();

  constructor() { }

  ngOnInit() {
  }

}
