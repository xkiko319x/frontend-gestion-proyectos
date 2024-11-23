import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  constructor(private http: HttpClient) {}
  apiUrl = 'https://backend-gestion-proyectos-jnz9.onrender.com/api/offers/'

  getOffers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createOffer(data:any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  updateOffer(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}${id}/`, data);
  }

  deleteOffer(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}${id}/`);
  }
}
