let mensaje = "tope";
let numer = 10;
let xcualquiera: any = true;
(function () {
  console.warn("hola mundox2");
  console.log(mensaje);
  console.log(numer);

  console.warn(xcualquiera);
  xcualquiera = "frase";
  console.warn(xcualquiera);
  xcualquiera = 999;
  console.warn(xcualquiera);
})();

// tsc {nombre del archivo} //crea archivo .js
// tsc -init //crear el archivo tsconfi
// tsc -w //modo observador,
