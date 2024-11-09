import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsibleService {

  constructor(private http: HttpClient) {}

  getResponsibles(): Observable<any> {
    const apiUrl = 'http://127.0.0.1:8000/api/responsibles/';
    return this.http.get(apiUrl);
  }

}
