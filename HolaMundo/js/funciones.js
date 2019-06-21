'use strict';

//parametros

function porConsola(numero1,numero2){
    console.log("Suma:           " + (numero1 + numero2));
    console.log("Resta:          " + (numero1 - numero2));
    console.log("Multiplicación: " + (numero1 * numero2));
    console.log("División:       " + (numero1 / numero2));
    console.log('**********************************');
}

function porPantalla(numero1,numero2){
    document.write("Suma:           " + (numero1 + numero2) + '<br/>');
    document.write("Resta:          " + (numero1 - numero2) + '<br/>');
    document.write("Multiplicación: " + (numero1 * numero2) + '<br/>');
    document.write("División:       " + (numero1 / numero2) + '<br/>');
    document.write('**********************************<br/>');
}

function calculadora(numero1,numero2,mostrar = false){
    let resultado = '';
    if (mostrar == false){
        porConsola(numero1,numero2);
    }else{
        porPantalla(numero1,numero2);
    }    
    return true;
}

for (let i = 0; i <= 10; i++) {
    calculadora(i,10,true); //Aqui agregamos el parametro opcional
}
