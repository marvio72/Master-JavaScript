

export class Carro{
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
