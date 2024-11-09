import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8000/api/ejemplo/';

  constructor(private http: HttpClient) { }

  // getMensaje(): Observable<any> {
  //   return this.http.get<any>(this.apiUrl);
  // }
  // getMensaje() {
  //   return this.http.get('http://localhost:8000/api/ejemplo/'); // Cambia aquí si es necesario
  // }

}
