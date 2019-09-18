// Interface
interface CarroBase{
  setColor(color);
  getColor();
}

class Carro implements CarroBase{
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

var auto = new Carro("Negro","Fiesta",2016,255000);
console.log(auto);