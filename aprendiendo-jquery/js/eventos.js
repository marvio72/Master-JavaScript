$(document).ready(function(){
    'use strict';

    /*==============================================================================================
    MOUSEOVER Y MOUSEOUT
    ==============================================================================================*/
    
    var caja = $("#caja");

    caja.mouseover(function () { 
        $(this).css("background","red");
    });

    caja.mouseout(function () { 
        $(this).css("background","yellow");
    });

});