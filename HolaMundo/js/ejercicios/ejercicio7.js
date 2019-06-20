'use strict';

/*
Tabla de multiplicar de un numero introducido por pantalla
*/


var numero = parseInt(prompt('Ingrese el numero de la tabla',1));

if (!isNaN(numero) && numero >= 1) {
    for (let i = 0; i <= 10; i++) {
        document.write(numero+' * '+i+' = '+(numero*i)+'<br/>');
    }
}else{
    alert('Agrega un numero valido mayor a 1');
}