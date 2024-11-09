// src/app/login/login.component.ts

import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  message: string = '';

  constructor(private _authService: AuthService, private router: Router) {}

  onLogin(): void {
    this._authService.login(this.username, this.password).subscribe(
      response => {
        this.message = response.message;
        console.log('Inicio de sesión exitoso!', response);
        // Aquí puedes redirigir a la página deseada después del inicio de sesión
        this.router.navigate(['/offers']); // Cambia '/dashboard' a la ruta que desees
      },
      error => {
        this.message = error.error.message; // Manejo de errores
        console.log('Error en inicio de sesión', error);
      }
    );
  }
}
