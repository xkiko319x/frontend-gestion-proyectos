import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {


  constructor(private http: HttpClient) {}

  getClients(): Observable<any> {
    const apiUrl = 'http://127.0.0.1:8000/api/clients/';
    return this.http.get(apiUrl);
  }
}

