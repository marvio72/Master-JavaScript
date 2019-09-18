// Clase (molde del objeto)
class Camiseta{
  // Propiedades (caracteristicas del objeto)
  public color: string;
  public modelo: string;
  public marca: string;
  public talla: string;
  public precio: number;

  // Métodos (funciones o acciones del objeto)

}

var camiseta = new Camiseta();

camiseta.color = "Rojo";
camiseta.modelo = "Polo";
camiseta.marca = "Lacoste";
camiseta.talla = "XL";
camiseta.precio = 350;

var playera = new Camiseta();

playera.color = "Azul";
playera.modelo = "Manga corta";
playera.marca = "Nike";
playera.talla = "lL";
playera.precio = 230;

console.log(camiseta, playera);

class Carro{
  private color: string;
  private marca: string;
  private modelo: number;
  private precio: number;

  //Métodos ( Funcioness o acciones del objeto)
  constructor(color, marca, modelo, precio){
    this.color = color;
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
  }

  public setColor(color){
    this.color = color;
  }

  public getColor(){
    return this.color;
  }
}

var auto = new Carro("rojo", "Fiesta", 2016, 255000);
auto.setColor("Negro");

console.log(auto);