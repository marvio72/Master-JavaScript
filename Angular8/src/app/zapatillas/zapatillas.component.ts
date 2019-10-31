import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { ZapatillaService } from '../services/zapatilla.service';

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
  providers: [ZapatillaService]
})

export class ZapatillasComponent implements OnInit {

  public titulo: string = 'Zapatillas de temporada';
  public zapatillas: Array<Zapatilla>;
  public marcas: string[];
  public color: string;
  public miMarca: string;

  constructor(
    private _zapatillaService: ZapatillaService
  ) {
    this.miMarca = "Reebook";
    this.color = 'blue';
    this.marcas = new Array();
  }

  ngOnInit(): void {
    this.zapatillas = this._zapatillaService.getZapatillas();
    // alert(this._zapatillaService.getTexto());
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

  get_Marca() {
    alert(this.miMarca);
  }

  addMarca() {
    this.marcas.push(this.miMarca);
  }

  borrarMarca(index) {
    // delete this.marcas[index];
    this.marcas.splice(index, 1);
  }

  onBlur() {
    console.log("Haz salido del input");
  }

  mostrarPalabra() {
    alert(this.miMarca);
  }

}
