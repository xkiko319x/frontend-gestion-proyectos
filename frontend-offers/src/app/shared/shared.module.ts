import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AgGridTableComponent } from './ag-grid-table/ag-grid-table.component';
import { AgGridModule } from 'ag-grid-angular';
import { ComponentNameComponent } from './component-name/component-name.component';



@NgModule({
  declarations: [
    NavbarComponent,
    AgGridTableComponent,
    ComponentNameComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AgGridModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NavbarComponent,
    AgGridTableComponent,
    ComponentNameComponent
  ]
})
export class SharedModule { }
