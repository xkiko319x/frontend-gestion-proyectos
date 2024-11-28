import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../../services/company.service';
import { MatDialog } from '@angular/material/dialog';
import {CompaniesModalComponent} from '../companies-modal/companies-modal.component'

@Component({
  selector: 'app-companies-table',
  templateUrl: './companies-table.component.html',
  styleUrls: ['./companies-table.component.scss']
})
export class CompaniesTableComponent implements OnInit {
  rowData: any[] = []
  selectedRow: any = null;

  constructor(private _companiesService: CompanyService,
    private dialog: MatDialog
  ) { }

  columnDefs = [
    { headerName: 'Company ID', field: 'company_id', flex:1, hide:true },
    { headerName: 'Company Name', field: 'company_name', flex:1 },
    { headerName: 'Company Address', field: 'company_address', flex:1 },
    { headerName: 'Company Reference', field: 'company_reference', flex:1 }
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

  onRowSelected(event: any) {
    // Al seleccionar una fila, asignamos la fila seleccionada a `selectedRow`
    if (event.node.selected) {
      this.selectedRow = event.data;
    }
  }

  openModal(): void {
    const dialogRef = this.dialog.open(CompaniesModalComponent, {
      width: '800px',
    });

    // Lógica después de que el modal se cierre
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Resultado del modal:', result);
        this.createCompany(result);
      }
    });
  }

  updateCompanyInfo() {
    if (this.selectedRow) {
      this._companiesService.updateCompany(this.selectedRow.company_id, this.selectedRow).subscribe({
        next: (value) => {
          console.log('Empresa actualizada', value);
        },
        error: (error) => {
          console.error('Error al actualizar la empresa', error);

        }
      });
    }
  }


  // Método para eliminar la empresa
  deleteCompany() {
    if (this.selectedRow && this.selectedRow.company_id) {
      this._companiesService.deleteCompany(this.selectedRow.company_id).subscribe({
        next: (value) => {
          console.log('Empresa eliminada', value);
        },
        error: (error) => {
          console.error('Error al eliminar la empresa', error);
        }
      });
    }
  }


  createCompany(data:any){
    this._companiesService.createCompany(data).subscribe({
      next(value) {
        console.log(value)
      },
    })
  }


}
