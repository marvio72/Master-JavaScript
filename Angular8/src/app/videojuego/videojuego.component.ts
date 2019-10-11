import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'videojuego',
  templateUrl: './videojuego.component.html'

})

export class VideoJuegoComponent implements OnInit, DoCheck, OnDestroy {
  public titulo: string;
  public listado: string;

  constructor() {
    this.titulo = 'Componente de Videojuegos';
    this.listado = 'listado de juegos mas populares';

    // console.log('Se ha cargado el componente: videojuego.component.ts');
  }

  ngOnInit(): void {
    // console.log("OnInit ejecutado");
  }

  ngDoCheck(): void {
    // console.log("DoCheck ejecutado");
  }

  ngOnDestroy(): void {
    // console.log("OnDestroy en ejecución");
  }

  cambiarTitulo(): void {
    this.titulo = "Nuevo titulo del componente";
  }

}
