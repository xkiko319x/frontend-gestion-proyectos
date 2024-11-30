import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CompaniesTableComponent } from './components/companies/companies-table/companies-table.component';
import { OffersTableComponent } from './components/offers/offers-table/offers-table.component';
import { ProjectsTableComponent } from './components/projects/projects-table/projects.component';
import { AuthGuard } from './guard/auth.guard';
import { ClientsTableComponent } from './components/clients/clients-table/clients-table.component';
import { ResponsiblesTableComponent } from './components/responsibles/responsibles-table/responsibles-table.component';

const routes: Routes = [
  { path: 'offers', component: OffersTableComponent, canActivate: [AuthGuard] },
  { path: 'companies', component: CompaniesTableComponent, canActivate: [AuthGuard] },
  { path: 'projects', component: ProjectsTableComponent, canActivate: [AuthGuard] },
  { path: 'clients', component: ClientsTableComponent, canActivate: [AuthGuard] },
  { path: 'responsibles', component: ResponsiblesTableComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/companies', pathMatch: 'full' },
  { path: '**', redirectTo: '/companies' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';



// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
// export class AppRoutingModule { }
