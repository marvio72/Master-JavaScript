'use strict';

/*
Que nos diga si un numero es par o impar.
1. Ventana prompt
2. si no es valido que nos pida de nuevo el numero
*/

var numero = parseInt(prompt("introduce un numero",0));

while (isNaN(numero) || numero < 1) {
    numero = prompt("introduce un numero", 0);
}

if (numero%2 == 0) {
    alert('El numero: '+numero+' es par');
}else{
    alert('El numero: ' + numero + ' es impar');
}