import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../services/client.service';  // Asegúrate de tener este servicio
import { MatDialog } from '@angular/material/dialog';
import { ClientsModalComponent } from '../clients-modal/clients-modal.component';  // Modal de clientes

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.scss']
})
export class ClientsTableComponent implements OnInit {
  rowData: any[] = [];
  selectedRow: any = null;

  constructor(private _clientService: ClientService, private dialog: MatDialog) { }

  // Definir las columnas de la tabla de clientes
  columnDefs = [
    { headerName: 'Id', field: 'client_id', flex: 1, hide: true },
    { headerName: 'Nombre', field: 'client_name', flex: 1 },
    { headerName: 'Referencia', field: 'client_reference', flex: 1 }
  ];

  ngOnInit() {
    this._clientService.getClients().subscribe({
      next: (value) => {
        console.log(value);
        this.rowData = value;
      },
      error: (err) => {
        console.error("Error fetching clients:", err);
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
    const dialogRef = this.dialog.open(ClientsModalComponent, {
      width: '800px',
      height: '600px',
      data: {
        client_name: '',
        client_reference: '',
      },
      panelClass: 'centered-modal'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Resultado del modal:', result);
        this.createClient(result);
      }
    });
  }

  updateClientInfo() {
    if (this.selectedRow) {
      this._clientService.updateClient(this.selectedRow.client_id, this.selectedRow).subscribe({
        next: (value) => {
          console.log('Cliente actualizado', value);
        },
        error: (error) => {
          console.error('Error al actualizar el cliente', error);
        }
      });
    }
  }

  deleteClient() {
    if (this.selectedRow && this.selectedRow.client_id) {
      this._clientService.deleteClient(this.selectedRow.client_id).subscribe({
        next: (value) => {
          console.log('Cliente eliminado', value);
        },
        error: (error) => {
          console.error('Error al eliminar el cliente', error);
        }
      });
    }
  }

  createClient(data: any) {
    this._clientService.createClient(data).subscribe({
      next(value) {
        console.log(value);
      },
    });
  }
}
