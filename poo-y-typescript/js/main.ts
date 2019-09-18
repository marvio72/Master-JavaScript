import {Carro} from './camisetas';

class Main{
  constructor(){
    console.log("Aplicación JS cargada!!");
  }

  getCarro(){
    return new Carro("Blanco", "Atos", "2007", "78000");
  }
}

var main = new Main();