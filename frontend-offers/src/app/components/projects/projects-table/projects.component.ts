import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { ProjectsModalComponent } from '../projects-modal/projects-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsTableComponent implements OnInit {
  rowData: any[] = []
  selectedRow: any = null;

  constructor(private _projectService: ProjectService, private dialog: MatDialog) { }

  columnDefs = [
    { headerName: 'Project ID', field: 'projects_id',flex:1, hide: true },
    { headerName: 'Project Name', field: 'project_name' },
    { headerName: 'Project Responsible ID', field: 'project_responsible_id',flex:1 },
    { headerName: 'Project Client', field: 'project_client', flex:1 },
    { headerName: 'Project Budget', field: 'project_budget', flex:1 }
  ];

  ngOnInit() {
    this.getData()
  }

  getData(){
    this._projectService.getProjects().subscribe({
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
      console.log(this.selectedRow);

    }
  }

  openModal(): void {
    const dialogRef = this.dialog.open(ProjectsModalComponent, {
      width: '800px',
      height: '600px',
      data: {
        project_name: '',
        project_budget: '',
        project_client: '',
        project_responsible: ''
      },
      panelClass: 'centered-modal'
    });

    // Lógica después de que el modal se cierre
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Resultado del modal:', result);
        this.createProject(result);
      }
    });
  }

  updateProjectInfo() {
    if (this.selectedRow) {
      this._projectService.updateProject(this.selectedRow.project_id, this.selectedRow).subscribe({
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


  // Método para eliminar la empresa
  deleteProject() {
    if (this.selectedRow && this.selectedRow.project_id) {
      this._projectService.deleteProject(this.selectedRow.project_id).subscribe({
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

  createProject(data:any){
    const that = this
    this._projectService.createProject(data).subscribe({
      next(value) {
        console.log(value)
        that.getData()
      },
    })
  }
}
