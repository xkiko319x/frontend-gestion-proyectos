import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-companies-modal',
  templateUrl: './companies-modal.component.html',
  styleUrls: ['./companies-modal.component.scss']
})
export class CompaniesModalComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CompaniesModalComponent>
  ) {
    this.form = this.fb.group({
      company_name: [''],
      company_address: [''],
      company_reference: [''],
    });
  }

  ngOnInit(): void {}

  onClose(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
      this.dialogRef.close(this.form.value);
    }
  }
}
