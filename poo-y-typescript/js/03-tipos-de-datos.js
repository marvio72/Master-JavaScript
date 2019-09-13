// string
var cadena = "mruvalcaba.tl";
// number
var numero = 12;
// Booleano
var verdadero_falso = true;
//Any
var cualquiera = "hola";
cualquiera = 87;
//Arrays
var lenguajes = ["PHP", "JavaScript", "Java", "CSS"];
var years = [12, 13, 14, 15];
var variosTipos = [1, 3, 4, 5, "seis"];
// Podemos crear una variable con multiple tipos de datos
var cadena2 = "128";
cadena2 = "Buenos dias";
var personal = 8776;
console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, years, variosTipos, cadena2, personal);
// var vs let 
var numero1 = 10;
var numero2 = 12;
if (numero1 == 10) {
    var numero1_1 = 44;
    var numero2 = 55;
    console.log(numero1_1, numero2);
}
console.log(numero1, numero2);
