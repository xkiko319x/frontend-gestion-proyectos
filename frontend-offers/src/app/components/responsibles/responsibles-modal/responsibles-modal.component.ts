import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResponsibleService } from '../../../services/responsible.service';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-responsible-modal',
  templateUrl: './responsibles-modal.component.html',
  styleUrls: ['./responsibles-modal.component.scss']
})
export class ResponsiblesModalComponent implements OnInit {
  form: FormGroup;
  users: any[] = [];
  responsibleName: string = '';
  responsibleUsername: string = '';

  constructor(
    private fb: FormBuilder,
    private userService: AuthService,
    private dialogRef: MatDialogRef<ResponsiblesModalComponent>
  ) {
    // Inicializando el formulario
    this.form = this.fb.group({
      responsible_user: [null, Validators.required],
      responsible_name: ['', Validators.required],
      responsible_username: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // Cargar los usuarios desde el servicio
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  // Método que se ejecuta al seleccionar un usuario del selector
  onUserSelect(event: any): void {
    const selectedUserId = event.value;  // ID del usuario seleccionado
    const selectedUser = this.users.find(user => user.id === selectedUserId);

    if (selectedUser) {
      // Rellenar los campos con la información del usuario seleccionado
      this.responsibleName = selectedUser.name;
      this.responsibleUsername = selectedUser.username;

      // Opcional: también puedes actualizar el formulario si lo prefieres
      this.form.patchValue({
        responsible_name: selectedUser.name,
        responsible_username: selectedUser.username
      });
    }
  }

  // Método que se ejecuta cuando se envía el formulario
  onSubmit(): void {
    if (this.form.valid) {
      const responsibleData = this.form.value;
      this.dialogRef.close(responsibleData);
    }
  }

  // Cerrar el modal
  onClose(): void {
    this.dialogRef.close();
  }
}
