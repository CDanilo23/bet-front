import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule} from '@angular/forms';
import {  MatCardContent, MatCard, MatRippleModule } from '@angular/material';
import { CoreModule } from '../../core.module';

@NgModule({
  imports: [
    CommonModule,
    MatCheckboxModule,
    FormsModule,
    MatRippleModule,
    CoreModule
  ],
  declarations: [CheckboxComponent, MatCard, MatCardContent],
  exports: [CheckboxComponent]
})
export class CheckboxModule { }
