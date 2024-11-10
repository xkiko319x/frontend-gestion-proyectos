import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) {}

  getCompanies(): Observable<any> {
    const apiUrl = 'https://backend-gestion-proyectos-jnz9.onrender.com/api/companies/';
    return this.http.get(apiUrl);
  }

}
