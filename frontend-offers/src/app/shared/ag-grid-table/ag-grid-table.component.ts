import { Component, Input } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-ag-grid-table',
  templateUrl: './ag-grid-table.component.html',
  styleUrl: './ag-grid-table.component.scss'
})
export class AgGridTableComponent {
  @Input() columnDefs: ColDef[] = []; // Para definir columnas
  @Input() rowData: any[] = [];


  onRowClicked(event: any) {
    const clickedRowData = event.data; // Obtiene los datos de la fila clicada
    console.log('Row clicked:', clickedRowData);
    // Aquí puedes redirigir a otra página o mostrar un detalle, etc.
  }
}
