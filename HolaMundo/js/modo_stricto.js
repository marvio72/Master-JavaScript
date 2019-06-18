"use strict";

// Modo correcto al declarar una variable con 'use strict'
var pais = "México";

//Sin el uso de 'use strict' es posible declarar una variable de este modo.
//Con el uso de 'use strict' nos daría un error.
pais = "España";

//Para corregir lo anterios tendriamos que tener lo siguiente:
var pais;
pais = "España";

console.log(pais);