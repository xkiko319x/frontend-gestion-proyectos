import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  // private apiUrl = 'http://127.0.0.1:8000/api/offer/'; // Asegúrate de que esta URL es correcta

  constructor(private http: HttpClient) {}

  getOffers(): Observable<any> {
    const apiUrl = 'http://127.0.0.1:8000/api/offers/';
    return this.http.get(apiUrl);
  }
}
