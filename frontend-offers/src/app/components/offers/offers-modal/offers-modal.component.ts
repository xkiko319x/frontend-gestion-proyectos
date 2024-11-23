import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-offers-modal',
  templateUrl: './offers-modal.component.html',
  styleUrls: ['./offers-modal.component.scss']
})
export class OffersModalComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<OffersModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.fb.group({
      offer_title: [data?.offer_title || '', Validators.required],
      offer_amount: [data?.offer_amount || '', [Validators.required, Validators.min(0)]],
      offer_client: [data?.offer_client || '', Validators.required],
      offer_reference: [data?.offer_reference || '', Validators.required],
      offer_project: [data?.offer_project || '', Validators.required],
    });
  }
  ngOnInit(): void {

  }
  onSubmit(): void {
    if (this.form.valid) {
      console.log('Formulario enviado', this.form.value);
      // Aquí puedes hacer la lógica de guardar los datos
      this.dialogRef.close(this.form.value); // Cierra el modal y pasa los datos
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }

}
