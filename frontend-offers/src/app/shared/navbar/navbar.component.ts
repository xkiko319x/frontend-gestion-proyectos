import { RoleService } from './../../services/role.service';
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private authService: AuthService, public roleService: RoleService) {}
  username: string | null = '';
  rol: string | null = '';

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
    this.rol = localStorage.getItem('rol');
  }

  logout(): void {
    this.authService.logout();
  }
}
