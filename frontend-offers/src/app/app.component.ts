import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mensaje: string = '';
  data: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    // this.apiService.getMensaje().subscribe(
    //   (response) => {
    //     this.data = response;
    //     this.mensaje = this.data.mensaje; // Asignar el mensaje desde la respuesta de la API
    //   },
    //   (error) => console.error('Error al conectar con la API:', error)
    // );
  }
}



// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss'
// })
// export class AppComponent {
//   title = 'frontend-offers';
// }
