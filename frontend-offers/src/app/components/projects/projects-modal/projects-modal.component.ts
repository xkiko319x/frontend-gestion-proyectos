import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ResponsibleService } from '../../../services/responsible.service';
import { ClientService } from '../../../services/client.service';

@Component({
  selector: 'app-projects-modal',
  templateUrl: './projects-modal.component.html',
  styleUrls: ['./projects-modal.component.scss']
})
export class ProjectsModalComponent implements OnInit {
  form: FormGroup;
  responsables: any[] = [];  // Lista de responsables
  clientes: any[] = [];  // Lista de clientes

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ProjectsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private responsibleService: ResponsibleService,
    private clientService: ClientService
  ) {
    // Inicialización del formulario
    this.form = this.fb.group({
      project_name: [data?.project_name || '', Validators.required],
      project_budget: [
        data?.project_budget || '',
        [Validators.required, Validators.min(0)],
      ],
      project_client: [data?.project_client || '', Validators.required],
      project_responsible: [
        data?.project_responsible || '',
        [Validators.required, Validators.min(1)],
      ],
    });
  }

  ngOnInit(): void {
    // Cargar responsables y clientes al inicializar
    this.loadResponsibles();
    this.loadClients();
  }

  loadResponsibles() {
    this.responsibleService.getResponsibles().subscribe(
      (data) => {
        this.responsables = data;
      },
      (error) => {
        console.error('Error fetching responsibles', error);
      }
    );
  }

  loadClients() {
    this.clientService.getClients().subscribe(
      (data) => {
        this.clientes = data;
      },
      (error) => {
        console.error('Error fetching clients', error);
      }
    );
  }

  onSubmit() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);  // Retorna los datos al padre
    }
  }

  onClose() {
    this.dialogRef.close();  // Cierra el modal sin guardar
  }

}
