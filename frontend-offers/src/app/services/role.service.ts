import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private role: string | null;

  constructor() {
    // Asegúrate de manejar 'null' y aplica .trim() solo si no es null
    this.role = localStorage.getItem('rol') ? localStorage.getItem('rol')!.trim() : null;
  }

  canViewOffers(): boolean {
    return this.role === 'Admin' || this.role === 'JefeProyecto' || this.role === 'Comercial';
  }

  canViewCompanies(): boolean {
    return this.role === 'Admin' || this.role === 'Comercial';
  }

  canViewProjects(): boolean {
    return this.role === 'Admin' || this.role === 'JefeProyecto';
  }
}
