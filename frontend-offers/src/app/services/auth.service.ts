// src/app/auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api/login/'; // Asegúrate de que esta URL es correcta

  constructor(private http: HttpClient, private router: Router) {}

  // login(username: string, password: string): Observable<any> {
  //     const body = { username, password };
  //     return this.http.post(this.apiUrl, body);
  // }
  login(username: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl, { username, password }).pipe(
      tap((response: any) => {
        // Guardar el token y datos en localStorage o sessionStorage
        localStorage.setItem('access_token', response.access);
        localStorage.setItem('refresh_token', response.refresh);
        localStorage.setItem('user_id', response.id);
        localStorage.setItem('username', response.username);
        localStorage.setItem('email', response.email);
        localStorage.setItem('name', response.name);
        localStorage.setItem('rol', response.rol);
        localStorage.setItem('is_active', response.is_active);
        localStorage.setItem('is_staff', response.is_staff);
      })
    );
  }

  logout(): void {
    localStorage.clear(); // Limpia el storage al cerrar sesión
    this.router.navigate(['/login']);
  }
  isLoggedIn(): boolean {
    const token = localStorage.getItem('access_token');
    // Verifica si existe un token
    return !!token;
  }
}
