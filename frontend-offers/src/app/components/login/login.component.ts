// src/app/login/login.component.ts

import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  message: string = '';

  constructor(private _authService: AuthService, private router: Router) {}

  onLogin(): void {
    this._authService.login(this.username, this.password).subscribe(
      response => {
        console.log('Inicio de sesión exitoso!', response);

        // Puedes agregar mensajes de éxito o redirecciones aquí
        this.router.navigate(['/offers']); // Cambia '/offers' según sea necesario
      },
      error => {
        this.message = 'Error en inicio de sesión: ' + error.error.message; // Mensaje de error
        console.error('Error en inicio de sesión', error);
      }
    );
  }

}
