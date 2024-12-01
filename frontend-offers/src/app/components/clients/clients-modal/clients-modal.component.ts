import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../../../services/client.service';


@Component({
  selector: 'app-client-modal',
  templateUrl: './clients-modal.component.html',
  styleUrls: ['./clients-modal.component.scss']
})
export class ClientsModalComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _clientService: ClientService,
    private dialogRef: MatDialogRef<ClientsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.fb.group({
      client_name: [this.data.client_name || '', [Validators.required]],
      client_reference: [this.data.client_reference || '', [Validators.required]],
    });
  }

  // Función para cerrar el modal
  onClose(): void {
    this.dialogRef.close();
  }

  // Función para enviar los datos del formulario
  onSubmit(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }
}
