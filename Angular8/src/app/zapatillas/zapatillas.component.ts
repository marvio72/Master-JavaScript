import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent implements OnInit {

  public titulo: string = 'Zapatillas de temporada';
  public zapatillas: Array<Zapatilla>;
  // tslint:disable-next-line: ban-types
  public marcas: String[];

  constructor() {
    this.marcas = new Array();
    this.zapatillas = [
      new Zapatilla('Rebook Classic', 'Rebook', 'Blanco', 80, true),
      new Zapatilla('Aero', 'Nike', 'Negro', 87, true),
      new Zapatilla('Samba', 'Adidas', 'Negro', 129, true),
      new Zapatilla('Durango', 'Nike', 'Gris', 67, false)
    ];
  }

  ngOnInit(): void {
    console.log(this.zapatillas);

    this.getMarcas();
  }

  getMarcas() {
    this.zapatillas.forEach((zapatilla, index) => {
      if (this.marcas.indexOf(zapatilla.marca) < 0) {

        this.marcas.push(zapatilla.marca);

      }
    });

    console.log(this.marcas);
  }

}
