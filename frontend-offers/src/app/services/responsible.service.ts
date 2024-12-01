import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsibleService {
  apiUrl = 'https://backend-gestion-proyectos-jnz9.onrender.com/api/responsibles/'

  constructor(private http: HttpClient) {}

  getResponsibles(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Crear un nuevo responsable
  createResponsible(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  // Actualizar un responsable
  updateResponsible(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}${id}/`, data);
  }

  // Eliminar un responsable
  deleteResponsible(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}${id}/`);
  }
}
