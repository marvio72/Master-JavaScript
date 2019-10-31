import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable()
export class ZapatillaService {
  public zapatillas: Array<Zapatilla>;

  constructor() {
    this.zapatillas = [
      new Zapatilla("Rebook Classic", "Rebook", "Blanco", 80, true),
      new Zapatilla("Aero", "Nike", "Negro", 87, false),
      new Zapatilla("Samba", "Adidas", "Negro", 129, true),
      new Zapatilla("Durango", "Nike", "Gris", 67, false)
    ];
  }

  getTexto() {
    return "Hola Mundo desde un servicio";
  }
  getZapatillas(): Array<Zapatilla> {
    return this.zapatillas;
  }
}
