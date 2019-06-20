'use strict';

// Mostrar todos los numeros divisores de un numero

var numero = parseInt(prompt('Mete un numero',1));

for (let i = 1; i <= numero; i++) {
    if (numero%i == 0) {
        console.log("Divisor: "+ i+'<br/>');
    }
}