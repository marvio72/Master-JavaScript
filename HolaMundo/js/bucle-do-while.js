'use strict';
//Bucle Do While
//Este bucle es muy particular ya que nos permite que por lo menos el bucle se ejecute una vez

//Solo se ejecuta una ves
var years = 20;
do {
    alert("SOLO CUANDO SEA DIFERENTE A 20");
    years = 20;
} while (years != 20);

//Se ejecuta 5 veces.
var years = 25;
do {
    alert("SOLO CUANDO SEA DIFERENTE A 20 "+years);
    years--;  
    if (years == 22) {
        break;
    }
} while (years > 20);