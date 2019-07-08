$(document).ready(function(){
    'use strict';

    reloadLinks();
    /*Funcion append añade un elemento al final de la lista mientras que prepend lo hace al inicio de la
    lista*/
    $("#add_button")
        .removeAttr("disabled") //remueve el atributo que bloquea el boton Añadir
        .click(function(){ //funcion para añadir un link a nuestra lista
        var texto = $("#add_link").val();
        $("#menu").prepend('<li><a href="' + texto + '"></a></li>');
        $("#add_link").val(''); //deja el blanco el input.
        reloadLinks();
    });

    // Crea un loop para ingresar el nombre de href en el texto del enlace ancla
    
    function reloadLinks(){
        $('a').each(function (index) {
            var that = $(this);
            var enlace = that.attr("href");
            that.attr("target","_blank");
            that.text(enlace);
        });
    }


});