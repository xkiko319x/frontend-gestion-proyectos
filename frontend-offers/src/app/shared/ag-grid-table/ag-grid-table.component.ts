
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-ag-grid-table',
  templateUrl: './ag-grid-table.component.html',
  styleUrl: './ag-grid-table.component.scss'
})
export class AgGridTableComponent {
  @Input() columnDefs: ColDef[] = []; // Para definir columnas
  @Input() rowData: any[] = [];

  @Output() rowSelected: EventEmitter<any> = new EventEmitter<any>();  // Emitir el evento de selección de fila

  // Método para manejar la selección de filas
  onRowSelected(event: any) {
    const clickedRowData = event.data; // Obtiene los datos de la fila clicada
    if (event.node.selected) {
      this.rowSelected.emit(event);  // Emitir el evento cuando una fila es seleccionada
    }
  }

  onRowClicked(event: any) {
    const clickedRowData = event.data; // Obtiene los datos de la fila clicada
    // Aquí puedes redirigir a otra página o mostrar un detalle, etc.
  }
}
