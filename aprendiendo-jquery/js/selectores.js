$(document).ready(function() {
    'use strict';

    /*==============================================================================================
    SELECTOR DE ID
    ==============================================================================================*/

    $("#rojo").css("background", "red")
        .css("color", "white");

    $("#amarillo").css("background", "yellow")
        .css("color", "green");

    $("#verde").css("background", "green")
        .css("color", "white");

     /*==============================================================================================
     SELECTOR DE CLASES
     ==============================================================================================*/

    var mi_clase = $(".zebra");
    //ver todos los elementos que tiene la clase .zebra
    console.log(mi_clase);
    // Nos muestra como un objeto uno de los elementos que contiene la clase .zebra
    console.log(mi_clase.eq(1));
    // Nos muestra el elemento de forma selectiva como si fuera un elemento de un array
    console.log(mi_clase[0]);
    
    //Agregandole estilos.
  
    $(".sin_borde").click(function(){
        console.log("Click dado!");
        $(this).addClass("zebra");
    });


});