import { Component, OnInit } from '@angular/core';
import { ResponsibleService } from '../../../services/responsible.service';  // Asegúrate de tener este servicio
import { MatDialog } from '@angular/material/dialog';
import { ResponsiblesModalComponent } from '../responsibles-modal/responsibles-modal.component'; // Modal de responsables

@Component({
  selector: 'app-responsibles-table',
  templateUrl: './responsibles-table.component.html',
  styleUrls: ['./responsibles-table.component.scss']
})
export class ResponsiblesTableComponent implements OnInit {
  rowData: any[] = [];
  selectedRow: any = null;

  constructor(private _responsibleService: ResponsibleService, private dialog: MatDialog) { }

  // Definir las columnas de la tabla de responsables
  columnDefs = [
    { headerName: 'Id', field: 'responsible_id', flex: 1, hide: true },
    { headerName: 'Nombre', field: 'responsible_name', flex: 1 },
    { headerName: 'Username', field: 'responsible_username', flex: 1 }
  ];

  ngOnInit() {
    this.getData()
  }

  getData(){
    this._responsibleService.getResponsibles().subscribe({
      next: (value) => {
        console.log(value);
        this.rowData = value;
      },
      error: (err) => {
        console.error("Error fetching responsibles:", err);
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
    const dialogRef = this.dialog.open(ResponsiblesModalComponent, {
      width: '800px',
      height: '600px',
      data: {
        responsible_user_id: '',
        responsible_name: '',
        responsible_username: '',
      },
      panelClass: 'centered-modal'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Resultado del modal:', result);
        this.createResponsible(result);
      }
    });
  }

  updateResponsibleInfo() {
    if (this.selectedRow) {
      this._responsibleService.updateResponsible(this.selectedRow.responsible_id, this.selectedRow).subscribe({
        next: (value) => {
          console.log('Responsable actualizado', value);
          this.getData()
          this.selectedRow = null
        },
        error: (error) => {
          console.error('Error al actualizar el responsable', error);
        }
      });
    }
  }

  deleteResponsible() {
    if (this.selectedRow && this.selectedRow.responsible_id) {
      this._responsibleService.deleteResponsible(this.selectedRow.responsible_id).subscribe({
        next: (value) => {
          console.log('Responsable eliminado', value);
          this.getData()
          this.selectedRow = null
        },
        error: (error) => {
          console.error('Error al eliminar el responsable', error);
        }
      });
    }
  }

  createResponsible(data: any) {
    const that = this
    this._responsibleService.createResponsible(data).subscribe({
      next(value) {
        console.log(value);
        that.getData()
      },
    });
  }
}
