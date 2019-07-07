$(document).ready(function(){
    'use strict';

    /*==============================================================================================
    MOUSEOVER Y MOUSEOUT
    ==============================================================================================*/
    
    var caja = $("#caja");

    // caja.mouseover(function () { 
    //     $(this).css("background","red");
    // });

    // caja.mouseout(function () { 
        // $(this).css("background", "yellow");
    // });

    /*==============================================================================================
    HOVER
    ==============================================================================================*/

    // caja.hover(function () {
    //         $(this).css("background","red");
            
    //     }, function () {
    //         $(this).css("background", "yellow");
    //     }
    // );

    //Otra manera de hacerlo
    
    function cambiaRojo() {
        $(this).css("background", "red");
    }

    function cambiaVerde() {
        $(this).css("background", "green");
    }

    caja.hover(cambiaRojo,cambiaVerde);
});