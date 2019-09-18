// Interface
interface CarroBase{
  setColor(color);
  getColor();
}

//Decorador
function estampar(logo: string){
  return function (target: Function) {
    target.prototype.estampado = function():void{
      console.log("Auto estampado con el logo de: " + logo);
    }
  }
}

//Clase (molde del objeto)
@estampar("Texaco")
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


//Clase Hija
class Deportivo extends Carro{
  public superCargado: boolean;

  setSuperCargado(superCargado: boolean){
    this.superCargado = superCargado;
  }

  getSuperCargado():boolean{
    return this.superCargado;
  }

}

var auto = new Carro("Negro","Fiesta",2016,255000);
console.log(auto);
auto.estampado();

var superCargado = new Deportivo("Blanco","Neon", 2005, 25000);
superCargado.setSuperCargado(true);
superCargado.setColor("Rojo");

console.log(superCargado);
