import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-projects-modal',
  templateUrl: './projects-modal.component.html',
  styleUrls: ['./projects-modal.component.scss']
})
export class ProjectsModalComponent implements OnInit {
  ngOnInit(): void {

  }
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ProjectsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // Inicializar el formulario con datos recibidos o valores predeterminados
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

  onSubmit() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value); // Retorna los datos al padre
    }
  }

  onClose() {
    this.dialogRef.close(); // Cierra el modal sin guardar
  }

}
