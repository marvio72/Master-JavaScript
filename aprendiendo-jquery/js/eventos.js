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

    /*==============================================================================================
    CLICK, DOBLE CLICK
    ==============================================================================================*/

    caja.click(function () { 
        $(this).css("background","blue")
               .css("color","white"); 
    });

    caja.dblclick(function () {
        $(this).css("background", "pink")
               .css("color", "yellow");
    });

    /*==============================================================================================
    EVENTO BLUR Y FOCUS
    ==============================================================================================*/

    var nombre = $('#nombre');
    var datos = $('#datos');
    // El método preventDefault () cancela el evento si es cancelable, lo que significa que la acción predeterminada que pertenece al evento no ocurrirá.
    nombre.focus(function (e) { 
        e.preventDefault();
        $(this).css("border","2px solid green");
    });

    //Con $(this).val() obtenemos el valor del input.
    nombre.blur(function (e) { 
        e.preventDefault();
        $(this).css("border", "2px solid #ccc");
        datos.text($(this).val()).show();
    });


    /*==============================================================================================
    MOUSEDOWN Y MOUSEUP
    ==============================================================================================*/

    datos.mousedown(function () { 
        $(this).css("border-color","gray");
    });

    datos.mouseup(function () { 
        $(this).css("border-color","black");
    });

    /*==============================================================================================
    MOUSEMOVE
    ==============================================================================================*/

    $(document).mousemove(function (e) { 
        // values: e.clientX, e.clientY, e.pageX, e.pageY
        //Ocultar el cursor
        $('body').css("cursor","none");
        $("#sigueme").css("left", event.clientX)
                     .css("top", event.clientY);
    });



});