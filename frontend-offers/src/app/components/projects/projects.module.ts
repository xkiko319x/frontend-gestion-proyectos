import { ProjectsModalComponent } from './projects-modal/projects-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsTableComponent } from './projects-table/projects.component';
import { SharedModule } from '../../shared/shared.module';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ProjectsModalComponent,
    ProjectsTableComponent
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
    ProjectsModalComponent,
    ProjectsTableComponent,
  ]
})
export class ProjectsModule { }
