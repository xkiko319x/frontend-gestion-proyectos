import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-responsibles-modal',
  templateUrl: './responsibles-modal.component.html',
  styleUrls: ['./responsibles-modal.component.scss']
})
export class ResponsiblesModalComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ResponsiblesModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.fb.group({
      responsible_user_id: [data.responsible_user_id || ''],
      responsible_name: [data.responsible_name || ''],
      responsible_username: [data.responsible_username || ''],
    });
  }

  ngOnInit(): void { }

  onClose(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }
}
