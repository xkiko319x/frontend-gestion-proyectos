import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  rowData: any[] = []

  constructor(private _projectService: ProjectService) { }

  columnDefs = [
    { headerName: 'Project ID', field: 'projects_id' },
    { headerName: 'Project Name', field: 'project_name' },
    { headerName: 'Project Responsible ID', field: 'project_responsible_id' },
    { headerName: 'Project Client', field: 'project_client' },
    { headerName: 'Project Budget', field: 'project_budget' }
  ];

  // rowData = [
  //   { make: 'Toyota', model: 'Celica', price: 35000 },
  //   { make: 'Ford', model: 'Mondeo', price: 32000 },
  //   { make: 'Porsche', model: 'Boxster', price: 72000 }
  // ];

  ngOnInit() {
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
}
