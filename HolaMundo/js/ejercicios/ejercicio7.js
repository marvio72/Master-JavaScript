'use strict';

/*
Tabla de multiplicar de un numero introducido por pantalla
*/


var numero = parseInt(prompt('Ingrese el numero de la tabla',1));

document.write("<h1>Resultados de la Tabla del "+numero+"</h1>")
if (!isNaN(numero) && numero >= 1) {
    for (let i = 0; i <= 10; i++) {
        document.write(numero+' * '+i+' = '+(numero*i)+'<br/>');
    }
}else{
    alert('Agrega un numero valido mayor a 1');
}

//Todas las tablas

for (let c = 0; c <= 10; c++) {
    document.write("<h1>Resultados de la Tabla del " + c + "</h1>")
    for (let i = 0; i <= 10; i++) {
        document.write(c+' * '+i+' = '+(c*i)+'<br/>');
    }
}