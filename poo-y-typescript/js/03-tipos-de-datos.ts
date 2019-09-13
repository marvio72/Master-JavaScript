// string
let cadena: string = "mruvalcaba.tl";

// number
let numero: number = 12;

// Booleano
let verdadero_falso: boolean = true;

//Any
let cualquiera: any = "hola";
cualquiera = 87;

//Arrays
var lenguajes: Array<string> = ["PHP", "JavaScript", "Java", "CSS"];

let years: number[] = [12,13,14,15];

let variosTipos: any[] = [1,3,4,5,"seis"]; 

// Podemos crear una variable con multiple tipos de datos

let cadena2: string | number = "128";
cadena2 = "Buenos dias";

// Podemos crear nuestro tipo de dato personalizado
type alfanumerico = string | number;

let personal: alfanumerico = 8776;

console.log(cadena, numero, verdadero_falso,cualquiera, lenguajes, years, variosTipos,cadena2, personal);

// var vs let 

var numero1 = 10;
var numero2 = 12;

if (numero1 == 10) {
  let numero1 = 44;
  var numero2 = 55;

  console.log(numero1, numero2);
}

console.log(numero1,numero2);