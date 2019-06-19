'use strict';

 // Operadores 
//  +,-,/-*-%
 var numero1 = 7;
 var numero2 = 12;
 var operacion = numero1 * numero2;

 alert("El resultado de la operación es: "+operacion); 

 //tipos de datos
var numero_entero = 44;
var cadena_texto = "Hola 'que' tal";
var verdadero_falso = true; //false

var numero_falso = "33";

// funciones
console.log(Number(numero_falso)+7);
// para este mismo caso se puede usar parseInt, y parseFloat

//para convertir un numero a una cadena de texto
console.log(String(numero_entero)+4); //El resultado se 444

//typeof es una funcion que nos informa que tipo de variable es
console.log(typeof numero_entero);
console.log(typeof cadena_texto);
console.log(typeof verdadero_falso);
console.log(typeof numero_falso);