import { ResponsibleService } from './../../../services/responsible.service';
import { Component, OnInit } from '@angular/core';
import { OfferService } from '../../../services/offer.service';
import { MatDialog } from '@angular/material/dialog';
import { OffersModalComponent } from '../offers-modal/offers-modal.component';
import { ClientService } from '../../../services/client.service';
import { CompanyService } from '../../../services/company.service';
import { ProjectService } from '../../../services/project.service';

@Component({
  selector: 'app-offers-table',
  templateUrl: './offers-table.component.html',
  styleUrls: ['./offers-table.component.scss']
})
export class OffersTableComponent implements OnInit {
  rowData: any[] = []
  selectedRow: any = null;
  clients: any[] = [];
  projects: any[] = [];
  responsibles: any[] = [];
  companies: any[] = [];

  constructor(private _offerService: OfferService,  private dialog: MatDialog,private clientService: ClientService,
    private projectService: ProjectService, private companiesService: CompanyService,private userService: ResponsibleService) { }
  columnDefs = [
    { headerName: 'Id', field: 'offer_id', flex:1, hide:true },
    { headerName: 'Offer Title', field: 'offer_title', flex:1 },
    { headerName: 'Offer Reference', field: 'offer_reference', flex:1 },
    { headerName: 'Company', field: 'company_name', flex:1 },
    { headerName: 'Offer Client', field: 'client_name', flex:1 },
    { headerName: 'Offer Responsible', field: 'responsible_name', flex:1 },
    { headerName: 'Offer Amount', field: 'offer_amount', flex:1 },
  ];

  ngOnInit() {
   this.getData()
   this.fetchClients();
   this.fetchCompanies();
   this.fetchProjects();
   this.fetchResponsibles();
  }

  getData(){
    this._offerService.getOffers().subscribe({
      next: (value) => {
        this.rowData = value;
      },
      error: (err) => {
        console.error("Error fetching offers:", err);
      }
    });
  }

  onRowSelected(event: any) {
    if (event.node.selected) {
      this.selectedRow = event.data;
    }
  }

  openModal(): void {
    const dialogRef = this.dialog.open(OffersModalComponent, {
      width: '800px',
      height: '700px',
      data: {
        offer_title: '',
        offer_amount: '',
        offer_reference: '',
        offer_client: '',
        offer_project: '',
        offer_responsible:'',
        offer_company:'',
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.createOffer(result);
      }
    });
  }

  updateOfferInfo() {
    if (this.selectedRow) {
      this._offerService.updateOffer(this.selectedRow.offer_id, this.selectedRow).subscribe({
        next: (value) => {
          console.log('Empresa actualizada', value);
          this.getData()
          this.selectedRow = null
        },
        error: (error) => {
          console.error('Error al actualizar la empresa', error);

        }
      });
    }
  }

  deleteOffer() {
    if (this.selectedRow && this.selectedRow.offer_id) {
      this._offerService.deleteOffer(this.selectedRow.offer_id).subscribe({
        next: (value) => {
          console.log('offer eliminada', value);
          this.getData()
          this.selectedRow = null
        },
        error: (error) => {
          console.error('Error al eliminar la offer', error);
        }
      });
    }
  }

  createOffer(data:any){
    const that = this
    this._offerService.createOffer(data).subscribe({
      next(value) {
        that.getData()
      },
    })
  }

  fetchClients(): void {
    this.clientService.getClients().subscribe((data) => (this.clients = data));
  }

  fetchResponsibles(): void {
    this.userService.getResponsibles().subscribe((data) => (this.responsibles = data));
  }

  fetchCompanies(): void {
    this.companiesService.getCompanies().subscribe((data) => (this.companies = data));
  }

  fetchProjects(): void {
    this.projectService.getProjects().subscribe((data) => (this.projects = data));
  }

}
