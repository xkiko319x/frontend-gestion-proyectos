
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { OffersComponent } from './components/offers/offers.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SharedModule } from './shared/shared.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    OffersComponent,
    CompaniesComponent,
    ProjectsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  // Aquí importamos AppRoutingModule
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { AppComponent } from './app.component';
// import { HttpClientModule } from '@angular/common/http';
// import { AppRoutingModule } from './app-routing.module';

// @NgModule({
//   declarations: [AppComponent],  // Declara el componente principal
//   imports: [BrowserModule, HttpClientModule, AppRoutingModule],  // Importa BrowserModule y HttpClientModule
//   bootstrap: [AppComponent]  // Define el componente principal de inicio
// })
// export class AppModule { }
