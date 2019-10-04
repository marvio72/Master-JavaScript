 import { Component } from '@angular/core';

 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public titulo = 'Angular8';
  public mostrarVideojuegos: boolean = true;

  ocultarVideojuegos(value) {
    this.mostrarVideojuegos = value;
  }
}
