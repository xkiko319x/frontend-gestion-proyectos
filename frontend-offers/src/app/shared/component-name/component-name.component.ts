import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-component-name',
  templateUrl: './component-name.component.html',
  styleUrls: ['./component-name.component.scss']
})

export class ComponentNameComponent implements OnInit {
  @Input() title: string = '';
  constructor() { }
  @Input() buttonLabel: string = 'Añadir'; // Etiqueta del botón, con un valor por defecto

  @Output() buttonClick = new EventEmitter<void>(); // Emite un evento cuando se hace clic en el botón

  onButtonClick() {
    this.buttonClick.emit(); // Emite el evento al padre
  }
  ngOnInit() {
  }

}
