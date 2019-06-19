'use strict';

// Programa que pida dos numeros y que nos diga cual es el MSMediaKeyError, el menor y si son iguales
// PLUS: Si los numeros no son un numero o son menores o iguales a cero, no los vuelva a pedir


var numero1 = parseInt(prompt('Introduce el primer numero',0));
var numero2 = parseInt(prompt('Introduce el segundo numero', 0));

while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt('Introduce el primer numero', 0));
    numero2 = parseInt(prompt('Introduce el segundo numero', 0));
}

if (numero1 != numero2) {
    if (numero1 > numero2) {
        alert("numero 1 ("+numero1+") es mayor a numero 2 ("+numero2+")");
    }else{
        alert("numero 2 (" + numero2 + ") es mayor a numero 1 (" + numero1 + ")");
    }
}else{
    alert("numero1 ("+numero1+") es igual a numero 2 ("+numero2+")");
}