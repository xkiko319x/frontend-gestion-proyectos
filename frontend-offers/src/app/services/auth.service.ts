// src/app/auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  apiUrl = 'https://backend-gestion-proyectos-jnz9.onrender.com/api/login/'

  constructor(private http: HttpClient, private router: Router) {}

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
  getUsers(): Observable<any[]> {
    let apiurl = 'https://backend-gestion-proyectos-jnz9.onrender.com/api/users/'
    return this.http.get<any[]>(apiurl);
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('access_token');
    return !!token;
  }
}
