'use strict';

// La diferencia entre let y var es el alcance de las variables.

// Prueba con var
var numero = 40; 
console.log(numero); //clg 40

if (true) {
    var numero = 50;
    console.log(numero); //valor 50
}

console.log(numero); // valor 50

// Prueba con let

let texto = "Curso JS";
console.log(texto); // valor curso JS

if (true) {
    let texto = "Curso Laravel";
    console.log(texto); //valor Laravel
}

console.log(texto); // valor curso JS