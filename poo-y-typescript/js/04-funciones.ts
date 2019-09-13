// De esta manera tenemos el poder de controlar en las variables que tipos de datos entran y que 
// Tipo de datos salen

function getNumero(numero: number = 12):string{
  return "El numero es: " + numero;
}

console.log(getNumero(55));