'use strict';

//Funciones anonimas
//Es una funcion que no tiene nombre

var pelicula = function(nombre){
    return "La película es: "+nombre; 
};

//Otro ejemplo

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}

sumame(7,6,function(dato){
    console.log("La suma es:" + dato);
},
function(dato){
    console.log("La suma por dos es: " + dato*2);
});

//función flecha
sumame(23, 54, dato => {
        console.log("La suma es:" + dato);
    },
    dato => {
        console.log("La suma por dos es: " + dato * 2);
    });