import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent implements OnInit {

  public titulo: string = 'Zapatillas de temporada';
  public zapatillas: Array<Zapatilla>;

  constructor() {
    this.zapatillas = [
      new Zapatilla('Rebook Classic', 'Rebook', 'Blanco', 80, true),
      new Zapatilla('Aero', 'Nike', 'Negro', 87, true),
      new Zapatilla('Samba', 'Adidas', 'Negro', 129, true)
    ];
  }

  ngOnInit(): void {
    console.log(this.zapatillas);
  }

}
