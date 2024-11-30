import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-client-modal',
  templateUrl: './clients-modal.component.html',
  styleUrls: ['./clients-modal.component.scss']
})
export class ClientsModalComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ClientsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.fb.group({
      client_name: [data.client_name || ''],
      client_reference: [data.client_reference || ''],
    });
  }

  ngOnInit(): void {}

  onClose(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Formulario enviado', this.form.value);
      this.dialogRef.close(this.form.value); // Cierra el modal y pasa los datos
    }
  }
}
