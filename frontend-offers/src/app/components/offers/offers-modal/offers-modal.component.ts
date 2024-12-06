import { ClientService } from './../../../services/client.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ProjectService } from '../../../services/project.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../../services/auth.service';
import { ResponsibleService } from '../../../services/responsible.service';
import { CompanyService } from '../../../services/company.service';

@Component({
  selector: 'app-offers-modal',
    templateUrl: './offers-modal.component.html',
    styleUrls: ['./offers-modal.component.scss']
})
export class OffersModalComponent implements OnInit {
  form: FormGroup;
  clients: any[] = [];
  projects: any[] = [];
  responsibles: any[] = [];
  companies: any[] = [];

  constructor(private fb: FormBuilder, private http: HttpClient, private dialogRef: MatDialogRef<OffersModalComponent>, private clientService: ClientService,
    private projectService: ProjectService, private companiesService: CompanyService,private userService: ResponsibleService, @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.fb.group({
      offer_title: [''],
      offer_amount: [''],
      offer_reference: [''],
      offer_client: [''],
      offer_project: [''],
      offer_responsible: [''],
      offer_company: [''],
    });
  }

  ngOnInit(): void {
    this.fetchClients();
    this.fetchProjects();
    this.fetchResponsibles();
    this.fetchCompanies();
  }

  fetchClients(): void {
    this.clientService.getClients().subscribe({
      next: (data) => (this.clients = data),
      error: (err) => console.error('Error fetching clients:', err),
    });
  }

  fetchProjects(): void {
    this.projectService.getProjects().subscribe({
      next: (data) => (this.projects = data),
      error: (err) => console.error('Error fetching projects:', err),
    });
  }

  fetchResponsibles(): void {
    this.userService.getResponsibles().subscribe({
      next: (data) => (
        this.responsibles = data
      ),
      error: (err) => console.error('Error fetching projects:', err),
    });
  }
  fetchCompanies(): void {
    this.companiesService.getCompanies().subscribe({
      next: (data) => (
        this.companies = data
      ),
      error: (err) => console.error('Error fetching projects:', err),
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }
}
