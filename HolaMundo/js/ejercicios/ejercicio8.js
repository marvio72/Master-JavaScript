'use strict';

/*
Calculadora:
- Pida dos numeros por pantalla
- Si metemos uno mal que nos los vuelva a pedir
- en el cuerpo de la pagina, en una alerta y por la consola el resultado de 
sumar, restar, multiplicar y dividir.
*/


var numero1 = parseInt(prompt('Dame el primer numero',1));
var numero2 = parseInt(prompt('Dame el segundo numero',1));

while (isNaN(numero1) || isNaN(numero2) || numero1 < 0 || numero2 < 0) {
    numero1 = parseInt(prompt('Dame el primer numero', 1));
    numero2 = parseInt(prompt('Dame el segundo numero', 1));
}

//Cuerpo de la pagina
var cuerpo =    (numero1+' + '+numero2+' = '+(numero1 + numero2)+'<br/>')+
                (numero1+' - '+numero2+' = '+(numero1 - numero2)+'<br/>')+
                (numero1+' * '+numero2+' = '+(numero1 * numero2)+'<br/>')+
                (numero1+' / '+numero2+' = '+(numero1 / numero2)+'<br/>');

//Alerta
var alerta =    (numero1+' + '+numero2+' = '+(numero1 + numero2)+'\n')+
                (numero1+' - '+numero2+' = '+(numero1 - numero2)+'\n')+
                (numero1+' * '+numero2+' = '+(numero1 * numero2)+'\n')+
                (numero1+' / '+numero2+' = '+(numero1 / numero2)+'\n');

document.write(cuerpo);
console.log(alerta);
alert(alerta);


