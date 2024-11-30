import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiblesTableComponent } from './responsibles-table/responsibles-table.component';
import { ResponsiblesModalComponent } from './responsibles-modal/responsibles-modal.component';
import { SharedModule } from '../../shared/shared.module';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    ResponsiblesTableComponent,
    ResponsiblesModalComponent
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
    MatIconModule,
    MatSelectModule
  ],
  exports: [
    ResponsiblesTableComponent,
    ResponsiblesModalComponent
  ]
})
export class ResponsiblesModule { }
