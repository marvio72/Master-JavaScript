// De esta manera tenemos el poder de controlar en las variables que tipos de datos entran y que 
// Tipo de datos salen
function getNumero(numero) {
    if (numero === void 0) { numero = 12; }
    return "El numero es: " + numero;
}
console.log(getNumero(55));
