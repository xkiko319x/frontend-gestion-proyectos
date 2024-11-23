import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) {}
  apiUrl = 'https://backend-gestion-proyectos-jnz9.onrender.com/api/projects/'

  getProjects(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createProject(data:any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  updateProject(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}${id}/`, data);
  }

  deleteProject(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}${id}/`);
  }

}
