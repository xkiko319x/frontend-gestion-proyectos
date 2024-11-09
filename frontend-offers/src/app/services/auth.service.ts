// src/app/auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api/login/'; // Asegúrate de que esta URL es correcta

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
      const body = { username, password };
      return this.http.post(this.apiUrl, body);
  }
}
