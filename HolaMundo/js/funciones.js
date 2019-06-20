'use strict';

//parametros


function calculadora(numero1,numero2){
    console.log("Suma:           "+(numero1+numero2));
    console.log("Resta:          "+(numero1-numero2));
    console.log("Multiplicación: "+(numero1*numero2));
    console.log("División:       "+(numero1/numero2));
    console.log('**********************************');
}

for (let i = 0; i <= 10; i++) {
    console.log(i);
    calculadora(i,10);
}
