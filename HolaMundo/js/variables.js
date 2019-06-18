var pais = "España";
var continente = "Europa";
var antiguedad = 2019;
var pais_y_continente = pais+' '+continente;

//para modificar el contenido de una variable ya no es necesario el prefijo var
pais = "México";
continente = "Latinoamerica";

console.log(pais, continente, antiguedad);
//En esta salidad de pantalla el resultado es diferente a la modificación de las variables pais y continente.
//esto es porque la variable pais_y_continente se declaro antes de la modificación de las variables pais y continente.
//es por esto que cuando se declara la variable toma los datos anteriores a la modificacion.
console.log(pais_y_continente);