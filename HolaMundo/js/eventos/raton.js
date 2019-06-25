'use strict';

//Eventos

window.addEventListener('load',()=>{
    //Raton
    var boton = document.querySelector("#boton");

    //Hacemos la solicitud si se esta usando el navegador firefox
    var navegador = navigator.userAgent.toLowerCase().indexOf('firefox');

    function cambiarColor() {
        var bg = boton.style.background;
        if (navegador > -1) {
            if (bg == "green none repeat scroll 0% 0%") {
                boton.style.background = "red";
            } else {
                boton.style.background = "green";
            }
        } else {
            if (bg == "green") {
                boton.style.background = "red";
            } else {
                boton.style.background = "green";
            }
        }
        boton.style.padding = "10px";
        boton.style.border = "1px solid #ccc";

        return true;
    }

    //Raton
    var boton = document.querySelector("#boton");

    //Evento click
    boton.addEventListener('click', function () {
        cambiarColor();
    });

    //Mouse over
    boton.addEventListener('mouseover', function () {
        boton.style.background = "#ccc";
        boton.style.color = "black";
    });

    //Mouseout
    boton.addEventListener('mouseout', function () {
        boton.style.background = "black";
        boton.style.color = "white";
    });

    // Focus
    var input = document.querySelector('#campo_nombre');
    input.addEventListener('focus', function () {
        console.log('Estas dentro del input');
    });
    // Blur
    input.addEventListener('blur', function () {
        console.log('Estas fuera del input');
    });
    // Keydown
    input.addEventListener('keydown', function (event) {
        console.log('[keydown]Pulsando esta tecla ', String.fromCharCode(event.keyCode));
    });

    // Keypress
    input.addEventListener('keydown', function (event) {
        console.log('[keypress] Tecla presionada ', String.fromCharCode(event.keyCode));
    });
    // Keyup
    input.addEventListener('keyup', function (event) {
        console.log('[keyup] Tecla soltada ', String.fromCharCode(event.keyCode));
    });
});


//Raton
var boton = document.querySelector("#boton");

//Hacemos la solicitud si se esta usando el navegador firefox
var navegador = navigator.userAgent.toLowerCase().indexOf('firefox');

function cambiarColor() {
    var bg = boton.style.background;
    if (navegador > -1) {
        if(bg == "green none repeat scroll 0% 0%"){
            boton.style.background = "red";
        }else{
            boton.style.background = "green";
        }
    }else{
        if (bg == "green") {
            boton.style.background = "red";
        }else{
            boton.style.background = "green";
        }
    }
    boton.style.padding = "10px";
    boton.style.border = "1px solid #ccc";

    return true;
}

//Raton
var boton = document.querySelector("#boton");

//Evento click
boton.addEventListener('click',function(){
    cambiarColor();
});

//Mouse over
boton.addEventListener('mouseover',function(){
    boton.style.background = "#ccc";
    boton.style.color = "black";
});

//Mouseout
boton.addEventListener('mouseout', function () {
    boton.style.background = "black";
    boton.style.color      = "white";
});

// Focus
var input = document.querySelector('#campo_nombre');
input.addEventListener('focus',function(){
    console.log('Estas dentro del input');
});
// Blur
input.addEventListener('blur', function () {
    console.log('Estas fuera del input');
});
// Keydown
input.addEventListener('keydown', function (event) {
console.log('[keydown]Pulsando esta tecla ', String.fromCharCode(event.keyCode));
});

// Keypress
input.addEventListener('keydown', function (event) {
    console.log('[keypress] Tecla presionada ', String.fromCharCode(event.keyCode));
});
// Keyup
input.addEventListener('keyup', function (event) {
    console.log('[keyup] Tecla soltada ', String.fromCharCode(event.keyCode));
});