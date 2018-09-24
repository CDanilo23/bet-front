import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'showcase-checkbox',
  templateUrl: './checkbox.component.html',
  styles: []
})
export class CheckboxComponent implements OnInit {

  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;

  constructor() { }

  ngOnInit() {
  }

}
