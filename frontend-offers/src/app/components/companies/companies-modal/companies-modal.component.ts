import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-companies-modal',
  templateUrl: './companies-modal.component.html',
  styleUrls: ['./companies-modal.component.scss']
})
export class CompaniesModalComponent implements OnInit {
  offerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Inicialización del formulario
    this.offerForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.maxLength(200)]],
      price: [null, [Validators.required, Validators.min(1)]],
    });
  }
  ngOnInit(): void {

  }

  // Manejar la acción de envío del formulario
  onSubmit() {
    if (this.offerForm.valid) {
      const offerData = this.offerForm.value;
      console.log('Nueva Oferta:', offerData);
      // Aquí puedes hacer la llamada al servicio para enviar los datos al backend
    }
  }
  // form: FormGroup;

  // constructor(
  //   private fb: FormBuilder,
  //   private dialogRef: MatDialogRef<CompaniesModalComponent>,
  //   @Inject(MAT_DIALOG_DATA) public data: any
  // ) {
  //   this.form = this.fb.group({
  //     company_name: [data.company_name || '', Validators.required],
  //     company_address: [data.company_address || '', Validators.required],
  //     company_reference: [data.company_reference || '', Validators.required],
  //   });
  // }
  // ngOnInit(): void {

  // }
  // onSubmit(): void {
  //   if (this.form.valid) {
  //     console.log('Formulario enviado', this.form.value);
  //     // Aquí puedes hacer la lógica de guardar los datos
  //     this.dialogRef.close(this.form.value); // Cierra el modal y pasa los datos
  //   }
  // }

  // onClose(): void {
  //   this.dialogRef.close();
  // }
}
