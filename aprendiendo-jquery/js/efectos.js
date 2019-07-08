$(document).ready(function(){
    'use strict';
    var caja = $('#caja');
    var ocultar = $("#ocultar");
    var mostrar = $("#mostrar");

    caja.hide();
    ocultar.hide();

    $("#mostrar").click(function(){
        caja.show('fats');
        $(this).hide();
        ocultar.show();
    });

    $("#ocultar").click(function () {
        caja.hide('fast');
        $(this).hide();
        mostrar.show();
        
    });

    
    /*
    metodo fadeIn y fadeOut, funciona como una disolución
    metodo show y hide muestran u ocultan el objeto
    metodo slideUp y slideDown sirve para crear un efecto tipo cortina de arriba a abajo.
    metodo fadeTo sirve como disulucion solo hay que asignarle el valor de 0 para ocultar y 1 para mostrar.

    Ejemplo fadeTo:
        $('#caja').fadeTo('slow',1);   Mostrar
        $('#caja').fadeTo('slow',0);   Ocultar

    */

    $("#todoEnUno").click(function(){
        var texto = $(this).text();
        var elemento = $(this);
        if (texto == "Abrir") {
            elemento.text('Cerrar');
        }else{
            elemento.text('Abrir');
        }
        caja.slideToggle('slow', function(){
            console.log("Cartel Ocultado");
        });
    });

    /*
    Para los efector realizados con un solo boton se usa toggle.
    toggle -> muestra y oculta
    slidetoggle -> sube y baja como si fuera una cortina.
    fadetoggle -> difuminado 
    */

    /*==============================================================================================
    ANIMACIONES PERSONALIZADAS
    ==============================================================================================*/

    //agregamos una callback al termino del efecto.

    $('#animar').click(function (e) { 
        e.preventDefault();
        caja.animate({
                        marginLeft: '500px',
                        fontSize: '40px',
                        height: '110px'
                    }, 'slow')
            .animate({
                        borderRadius: '900px',
                        marginTop: '80px'    
                    }, 'slow')       
            .animate({
                        marginLeft: '0px'    
                    }, 'slow')       
            .animate({
                        marginTop: '20px',
                        fontSize: '19px',
                        height: '50px',
                        borderRadius: '0px'    
                    }, 'slow', function(){
                        console.log('Terminamos');
                    });
    });
    
});

