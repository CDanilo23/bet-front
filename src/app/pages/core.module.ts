import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule, MatButtonModule, MatNativeDateModule, MatTableModule, MatCardModule, MatInputModule, MatCheckboxModule } from '@angular/material';
import { MatMenuModule, MatIconModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatCardModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatInputModule
  ],
  exports: [
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatInputModule
  ],
  declarations: []
})
export class CoreModule { }
