'use strict';

var numero1 = parseInt(prompt("Introduce el primer numero", 0));
var numero2 = parseInt(prompt('Introduce el segundo numero', 0));


document.write("<h1>De " + numero1 + " a " + numero2 + " están estos numeros Impares:</h1>");
if (isNaN(numero1) || isNaN(numero2)) {
    document.write("Datos incorrectos");
} else {
    if (numero1 < numero2) {
        for (let i = numero1; i <= numero2; i++) {
            if (i%2 != 0) {
                document.write(i + "<br/>");
            }
        }
    } else {
        for (let j = numero1; j >= numero2; j--) {
            if (j%2 != 0){
                document.write(j + "<br/>");
            }
        }
    }
}

