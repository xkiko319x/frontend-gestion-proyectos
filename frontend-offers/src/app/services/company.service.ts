import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) {}
  apiUrl = 'https://backend-gestion-proyectos-jnz9.onrender.com/api/companies/'

  getCompanies(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createCompany(data:any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  updateCompany(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}${id}/`, data);
  }

  deleteCompany(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}${id}/`);
  }

}
