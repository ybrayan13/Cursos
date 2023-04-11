interface Producto {
  id: string;
  nombre: string;
  precio: number;
  cantidadDisponible: number;
  cantidadSolicitada: number;
  descripcion: string;
  urlImagen: string;
}

const products: Producto[] = [
  {
    id: "1u",
    nombre: "Nike Dunk High Retro",
    precio: 120,
    cantidadSolicitada: 0,
    cantidadDisponible: 5,
    descripcion: "Really good Nike shoes",
    urlImagen:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/608d6f2b-f6eb-4a5f-8535-6f24b081e011/dunk-high-retro-zapatillas-tjf3hZ.png",
  },
  {
    id: "2u",
    nombre: "Nike Zoom Fly 5",
    precio: 150,
    cantidadSolicitada: 0,
    cantidadDisponible: 3,
    descripcion: "good Nike shoes",
    urlImagen:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cdb4e7b0-7772-41aa-82c0-4306f53050b6/zoom-fly-5-zapatillas-de-running-carretera-6PMLS5.png",
  },
  {
    id: "3u",
    nombre: "Nike Streetgato",
    precio: 180,
    cantidadSolicitada: 0,
    cantidadDisponible: 2,
    descripcion: "Really Nike shoes",
    urlImagen:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c526742e-8259-44bd-a37e-d27cf4e29194/streetgato-botas-de-futbol-zhWVgz.png",
  },
  {
    id: "4u",
    nombre: "Zoom Freak 4",
    precio: 150,
    cantidadSolicitada: 3,
    cantidadDisponible: 3,
    descripcion: "Really good Nike shoes",
    urlImagen:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/dd30bba7-ae65-4fc3-975c-454f9b8d7ddd/zoom-freak-4-zapatillas-de-baloncesto-8Hdw9M.png",
  },
  {
    id: "5u",
    nombre: "Nike SB Zoom Blazer Mid",
    precio: 90,
    cantidadSolicitada: 0,
    cantidadDisponible: 10,
    descripcion: "Skate Shoes",
    urlImagen:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c8be464d-7fb7-4984-a161-f0359af04dd4/sb-zoom-blazer-mid-skate-shoes-qX3MZV.png",
  },
  {
    id: "6u",
    nombre: "Nike Air VaporMax 2021 Flyknit",
    precio: 210,
    cantidadSolicitada: 0,
    cantidadDisponible: 5,
    descripcion: "Men s Shoes",
    urlImagen:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e1b7e386-a0d6-4a13-b946-f4a2a1b52539/air-vapormax-2021-flyknit-mens-shoes-NpTfFz.png",
  },
];

// every- El método prueba si todos los elementos en una matriz pasan la prueba implementada por la función proporcionada
console.log(
  products.every((item) => {
    return item.precio > 200;
  })
);

// pop() Elimina el último elemento de la matriz y devuelve ese elemento
console.log(products.pop());

// push() Agrega nuevos elementos a la matriz y devuelve la nueva longitud de la matriz
const nuevoProducto = {
  id: "7u",
  nombre: "Nike Air VaporMax 2021 Flyknit",
  precio: 210,
  cantidadSolicitada: 0,
  cantidadDisponible: 5,
  descripcion: "Men s Shoes",
  urlImagen:
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e1b7e386-a0d6-4a13-b946-f4a2a1b52539/air-vapormax-2021-flyknit-mens-shoes-NpTfFz.png",
};
console.log(products.push(nuevoProducto));

// sort() Ordena todos los elementos de la matriz
// concat() Une dos matrices y devuelve el resultado combinado

// indexOf() Devuelve el índice de la primera coincidencia de un valor en la matriz (-1 si no se encuentra)
const array = [2, 9, 9];
console.log(array.indexOf(2)); // 0
console.log(array.indexOf(7)); // -1
console.log(array.indexOf(9, 2)); // 2
console.log(array.indexOf(2, -1)); // -1
console.log(array.indexOf(2, -3)); // 0

console.log(products.map((item) => item.id).indexOf("3u"));

// copyWithin() Copia una secuencia de elementos dentro de la matriz
// fill() Rellena la matriz con un valor estático desde el índice inicial proporcionado hasta el índice final

// shift() Elimina y devuelve el primer elemento de la matriz
console.log(products.shift());

// splice() Agrega o elimina elementos de la matriz

// unshift() Agrega uno o más elementos al comienzo de la matriz
// incluye () Comprueba si la matriz contiene un determinado elemento
// join() Une todos los elementos de la matriz en una cadena
// lastIndexOf() Devuelve el último índice de un elemento en la matriz
// slice() Extrae una sección de la matriz y devuelve la nueva matriz
// toString() Devuelve una representación de cadena de la matriz
// toLocaleString() Devuelve una cadena localizada que representa la matriz

// some
console.log(
  products.some((item) => {
    return item.id == "2u";
  })
);

// fill() Rellena los elementos de una matriz con un valor estático
// console.log(
//   products.fill("qq",)
// );

// filter() Crea una nueva matriz con cada elemento de una matriz que pasa una prueba
console.log(
  products.filter((item) => item.id == "3u" && item.cantidadDisponible < 3)
);

// find() Devuelve el valor del primer elemento en una matriz que pasa una prueba
console.log(
  products.find((item) => {
    return item.id == "2u";
  })
);

// findIndex() Devuelve el índice del primer elemento en una matriz que pasa una prueba
console.log(
  products.findIndex((item) => {
    return item.id == "3u";
  })
);

// forEach() Llama a una función para cada elemento de la matriz
// from() Crea una matriz a partir de un objeto
// incluye () Comprueba si una matriz contiene el elemento especificado
// indexOf() Busca en la matriz un elemento y devuelve su posición
// isArray() Comprueba si un objeto es una matriz
// join() Une todos los elementos de una matriz en una cadena
// keys() Devuelve un objeto de iteración de matriz, que contiene las claves de la matriz original
// lastIndexOf() Busca en la matriz un elemento, comenzando por el final, y devuelve su posición
// length Establece o devuelve el número de elementos en una matriz
// map() Crea una nueva matriz con el resultado de llamar a una función para cada elemento de la matriz
// pop() Elimina el último elemento de una matriz y devuelve ese elemento
// push() Agrega nuevos elementos al final de una matriz y devuelve la nueva longitud
// reduce () Reduce los valores de una matriz a un solo valor (de izquierda a derecha)
console.log(products.filter((item) => item.cantidadDisponible > 0).length);
console.log(products.reduce(
  (pre,acu)=>{return pre=pre+(acu.cantidadSolicitada*acu.precio)},0
));


// reduceRight() Reduce los valores de una matriz a un solo valor (yendo de derecha a izquierda)
// reverse() Invierte el orden de los elementos en una matriz
// shift() Elimina el primer elemento de una matriz y devuelve ese elemento
// slice() Selecciona una parte de una matriz y devuelve la nueva matriz
// some() Comprueba si alguno de los elementos de una matriz pasa una prueba
// sort() Ordena los elementos de una matriz
// splice() Agrega/elimina elementos de una matriz
// toString() Convierte una matriz en una cadena y devuelve el resultado
// unshift() Agrega nuevos elementos al comienzo de una matriz y devuelve la nueva longitud
// valueOf() Devuelve el valor primitivo de una matriz
