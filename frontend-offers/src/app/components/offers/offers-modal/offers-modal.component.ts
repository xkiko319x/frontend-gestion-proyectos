import { ClientService } from './../../../services/client.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ProjectService } from '../../../services/project.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-offers-modal',
    templateUrl: './offers-modal.component.html',
    styleUrls: ['./offers-modal.component.scss']
})
export class OffersModalComponent implements OnInit {
  form: FormGroup;
  clients: any[] = [];
  projects: any[] = [];

  constructor(private fb: FormBuilder, private http: HttpClient, private dialogRef: MatDialogRef<OffersModalComponent>, private clientService: ClientService,
    private projectService: ProjectService, @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.fb.group({
      offer_title: [''],
      offer_amount: [''],
      offer_reference: [''],
      offer_client: [''],
      offer_project: [''],
    });
  }

  ngOnInit(): void {
    this.fetchClients();
    this.fetchProjects();
  }

  fetchClients(): void {
    this.clientService.getClients().subscribe({
      next: (data) => (this.clients = data),

        // (this.clients = data),
      error: (err) => console.error('Error fetching clients:', err),
    });
  }

  fetchProjects(): void {
    this.projectService.getProjects().subscribe({
      next: (data) => (this.projects = data),

        // this.projects = data),
      error: (err) => console.error('Error fetching projects:', err),
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    console.log(this.form.value);
    if (this.form.valid) {
            console.log('Formulario enviado', this.form.value);
            // Aquí puedes hacer la lógica de guardar los datos
            this.dialogRef.close(this.form.value); // Cierra el modal y pasa los datos
          }
  }
}



// import { Component, Inject, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

// @Component({
//   selector: 'app-offers-modal',
//   templateUrl: './offers-modal.component.html',
//   styleUrls: ['./offers-modal.component.scss']
// })
// export class OffersModalComponent implements OnInit {

//   form: FormGroup;

//   constructor(
//     private fb: FormBuilder,
//     private dialogRef: MatDialogRef<OffersModalComponent>,
//     @Inject(MAT_DIALOG_DATA) public data: any
//   ) {
//     this.form = this.fb.group({
//       offer_title: [data?.offer_title || '', Validators.required],
//       offer_amount: [data?.offer_amount || '', [Validators.required, Validators.min(0)]],
//       offer_client: [data?.offer_client || '', Validators.required],
//       offer_reference: [data?.offer_reference || '', Validators.required],
//       offer_project: [data?.offer_project || '', Validators.required],
//     });
//   }
//   ngOnInit(): void {

//   }
//   onSubmit(): void {
//     if (this.form.valid) {
//       console.log('Formulario enviado', this.form.value);
//       // Aquí puedes hacer la lógica de guardar los datos
//       this.dialogRef.close(this.form.value); // Cierra el modal y pasa los datos
//     }
//   }

//   onClose(): void {
//     this.dialogRef.close();
//   }

// }
