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
