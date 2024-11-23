import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersModalComponent } from './offers-modal/offers-modal.component';
import { SharedModule } from '../../shared/shared.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OffersTableComponent } from './offers-table/offers-table.component';


@NgModule({
  declarations: [
    OffersModalComponent,
    OffersTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatIconModule
  ],
  exports: [
    OffersModalComponent,
    OffersTableComponent,
  ]
})

export class OffersModule { }
