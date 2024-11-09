import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) {}

  getCompanies(): Observable<any> {
    const apiUrl = 'http://127.0.0.1:8000/api/companies/';
    return this.http.get(apiUrl);
  }

}
