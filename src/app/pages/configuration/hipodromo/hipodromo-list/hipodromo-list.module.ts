import { HipodromoListComponent } from './hipodromo.list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/pages/core.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [HipodromoListComponent],
  exports: [HipodromoListComponent]
})
export class HipodromoListModule { }
