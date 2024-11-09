import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  rowData: any[] = []

  constructor(private _companiesService: CompanyService) { }

  columnDefs = [
    { headerName: 'Company ID', field: 'company_id' },
    { headerName: 'Company Name', field: 'company_name' },
    { headerName: 'Company Address', field: 'company_address' },
    { headerName: 'Company Reference', field: 'company_reference' }
  ];

  // rowData = [
  //   { make: 'Toyota', model: 'Celica', price: 35000 },
  //   { make: 'Ford', model: 'Mondeo', price: 32000 },
  //   { make: 'Porsche', model: 'Boxster', price: 72000 }
  // ];

  ngOnInit() {
    this._companiesService.getCompanies().subscribe({
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
