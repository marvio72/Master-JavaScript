'use strict';

//Plantillas de texto

var nombre = prompt('Ingresa tu nombre');
var apellido = prompt('Ingresa tus apellidos');

var texto = `
    <h1>Hola que tal</h1>
    <h3>Mi nombre es: <strong>${nombre}</strong></h3>
    <h3>Mis apellidos son: <strong>${apellido}</strong></h3>
`;

document.getElementById("resultado").innerHTML = texto;