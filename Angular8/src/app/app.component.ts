 import { Component } from '@angular/core';
 import { Configuracion } from './models/configuracion';

 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public titulo = 'Angular8';
  public mostrarVideojuegos: boolean = true;
  public descripcion: string;
  public config;

  constructor() {
    this.titulo = Configuracion.titulo;
    this.descripcion = Configuracion.descripcion;
    this.config = Configuracion;
  }

  ocultarVideojuegos(value) {
    this.mostrarVideojuegos = value;
  }
}
