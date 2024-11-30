import { Component, OnInit } from '@angular/core';
import { OfferService } from '../../../services/offer.service';
import { MatDialog } from '@angular/material/dialog';
import { OffersModalComponent } from '../offers-modal/offers-modal.component';

@Component({
  selector: 'app-offers-table',
  templateUrl: './offers-table.component.html',
  styleUrls: ['./offers-table.component.scss']
})
export class OffersTableComponent implements OnInit {
  rowData: any[] = []
  selectedRow: any = null;

  constructor(private _offerService: OfferService,  private dialog: MatDialog) { }
  columnDefs = [
    { headerName: 'Id', field: 'offer_id', flex:1, hide:true },
    { headerName: 'Client Company', field: 'offer_client_company', flex:1 },
    { headerName: 'offer_title', field: 'offer_title', flex:1 },
    { headerName: 'offer_responsible', field: 'offer_responsible', flex:1 },
    { headerName: 'offer_reference', field: 'offer_reference', flex:1 },
    { headerName: 'offer_client', field: 'offer_client', flex:1 },
    { headerName: 'offer_amount', field: 'offer_amount', flex:1 },
  ];

  ngOnInit() {
    this._offerService.getOffers().subscribe({
      next: (value) => {
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
      console.log(this.selectedRow);

    }
  }

  openModal(): void {
    const dialogRef = this.dialog.open(OffersModalComponent, {
      width: '800px',
      height: '600px',
      data: {
        offer_title: '',
        offer_amount: '',
        offer_client: '',
        offer_reference: '',
        offer_project: '',
      },
      panelClass: 'centered-modal'
    });

    // Lógica después de que el modal se cierre
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Resultado del modal:', result);
        this.createOffer(result);
      }
    });
  }

  updateOfferInfo() {
    if (this.selectedRow) {
      this._offerService.updateOffer(this.selectedRow.of_ia_id, this.selectedRow).subscribe({
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
  deleteOffer() {
    if (this.selectedRow && this.selectedRow.of_ia_id) {
      this._offerService.deleteOffer(this.selectedRow.of_ia_id).subscribe({
        next: (value) => {
          console.log('offer eliminada', value);
        },
        error: (error) => {
          console.error('Error al eliminar la offer', error);
        }
      });
    }
  }


  createOffer(data:any){
    this._offerService.createOffer(data).subscribe({
      next(value) {
        console.log(value)
      },
    })
  }

}
