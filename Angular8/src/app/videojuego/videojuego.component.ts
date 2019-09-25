import { Component } from '@angular/core';

@Component({
  selector: 'videojuego',
  templateUrl: './videojuego.component.html'

})

export class VideoJuegoComponent {
  public titulo: string;
  public listado: string;

  constructor(){
    this.titulo = 'Componente de Videojuegos';
    this.listado = 'listado de juegos mas populares';

    console.log('Se ha cargado el componente: videojuego.component.ts');
  }
}