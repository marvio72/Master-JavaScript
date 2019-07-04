'use strict';
window.addEventListener('load', function(){

    var fecha = new Date();

    var year = fecha.getFullYear();
    var mes = fecha.getMonth();
    var dia = fecha.getDay();
    var hora = fecha.getHours();
    var minuto = fecha.getMinutes();

    var textoHora = `
        El año es: ${year}
        el mes es: ${mes}
        el dia es: ${dia}
        La hora es: ${hora}
        el minuto es: ${minuto}
    
    `;
    console.log(fecha);
    console.log(textoHora);

});