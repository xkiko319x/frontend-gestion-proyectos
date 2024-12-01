import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../../services/company.service';
import { MatDialog } from '@angular/material/dialog';
import { CompaniesModalComponent } from '../companies-modal/companies-modal.component';


@Component({
  selector: 'app-companies-table',
  templateUrl: './companies-table.component.html',
  styleUrls: ['./companies-table.component.scss']
})
export class CompaniesTableComponent implements OnInit {
  rowData: any[] = [];
  selectedRow: any = null;

  constructor(private _companyService: CompanyService, private dialog: MatDialog) {}

  columnDefs = [
    { headerName: 'ID', field: 'company_id', flex: 1, hide: true },
    { headerName: 'Company Name', field: 'company_name', flex: 1 },
    { headerName: 'Company Addres', field: 'company_address', flex: 1 },
    { headerName: 'Reference', field: 'company_reference', flex: 1 },
  ];

  ngOnInit() {
    this.getData()
  }

  getData(){
    this._companyService.getCompanies().subscribe({
      next: (value) => {
        console.log(value);
        this.rowData = value;
      },
      error: (err) => {
        console.error('Error fetching companies:', err);
      }
    });
  }
  onRowSelected(event: any) {
    if (event.node.selected) {
      this.selectedRow = event.data;
      console.log(this.selectedRow);
    }
  }

  openModal(): void {
    const dialogRef = this.dialog.open(CompaniesModalComponent, {
      width: '800px',
      height: '600px',
      data: {
        company_name: '',
        company_address: '',
        company_reference: '',
      },
      panelClass: 'centered-modal'
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Modal result:', result);
        this.createCompany(result);
      }
    });
  }

  updateCompanyInfo() {
    if (this.selectedRow) {
      this._companyService.updateCompany(this.selectedRow.company_id, this.selectedRow).subscribe({
        next: (value) => {
          console.log('Company updated:', value);
          this.getData()
          this.selectedRow = null;
        },
        error: (error) => {
          console.error('Error updating company:', error);
        }
      });
    }
  }

  deleteCompany() {
    if (this.selectedRow && this.selectedRow.company_id) {
      this._companyService.deleteCompany(this.selectedRow.company_id).subscribe({
        next: (value) => {
          console.log('Company deleted:', value);
          this.getData()
          this.selectedRow = null;
        },
        error: (error) => {
          console.error('Error deleting company:', error);
        }
      });
    }
  }

  createCompany(data: any) {
    const that = this
    this._companyService.createCompany(data).subscribe({
      next(value) {
        console.log('Company created:', value);
        that.getData()
      },
      error(error) {
        console.error('Error creating company:', error);
      }
    });
  }
}
