import { Component, OnInit } from '@angular/core';
import { OfferService } from '../../services/offer.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  rowData: any[] = []

  constructor(private _offerService: OfferService) { }
  columnDefs = [
    { headerName: 'Id', field: 'offer_id' },
    { headerName: 'Client Company', field: 'offer_client_company' },
    { headerName: 'offer_title', field: 'offer_title' },
    { headerName: 'offer_responsible', field: 'offer_responsible' },
    { headerName: 'offer_reference', field: 'offer_reference' },
    { headerName: 'offer_client', field: 'offer_client' },
    { headerName: 'offer_amount', field: 'offer_amount' },
  ];

  // rowData = [
  //   { make: 'Toyota', model: 'Celica', price: 35000 },
  //   { make: 'Ford', model: 'Mondeo', price: 32000 },
  //   { make: 'Porsche', model: 'Boxster', price: 72000 }
  // ];

  ngOnInit() {
    this._offerService.getOffers().subscribe({
      next: (value) => {  // Usamos función flecha para mantener el contexto de `this`
        console.log(value);
        this.rowData = value;
      },
      error: (err) => {
        console.error("Error fetching offers:", err);
      }
    });
  }

}
