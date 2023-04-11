(function () {
  console.log("hola mundo");

  let mensaje = "romeo";
  let numero = 0;

  const nombre = "yhors";
  const apellido = "brayan";
  const edad = 25;
  console.log(`hola ${nombre} ${apellido}, tienes ${edad} años`);

  function activar(quien: string, objeto: string = "mazo", momento?: string) {
    if (momento) {
      console.log(`${quien} activo la ${objeto} en la ${momento}`);
    } else {
      console.log(`${quien} activo la ${objeto}`);
    }
  }
  activar("yo", "lanza", "mañana");

  function mayus(x: string) {
    return x.toLocaleUpperCase();
  }
  console.log(mayus("nana"));

  const mayusf = (x: string) => {
    return x.toLocaleUpperCase();
  };
  console.log(mayusf("nene"));

  const avenger = {
    nombreA: "stive",
    claveA: "cap america",
    poderA: "pepas",
  };
  console.log(avenger.claveA);
  const { nombreA } = avenger;
  console.log(nombreA);

  const extraer = ({ nombreA }: any) => console.log(nombreA);
  extraer(avenger);
})();

(function () {
  // promesa
  console.log("inicio");
  const prom1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("se termino el setTimeout");
    }, 1000);
  });
  prom1
    .then((mensaje) => console.log(mensaje))
    .catch((err) => console.warn(err));
  console.log("fin");

  const retirarDinero = (monto: number) => {
    let dineroActual: number = 300;
    return new Promise((resolve, reject) => {
      if (monto > dineroActual) {
        reject("no hay fondos suficientes");
      } else {
        dineroActual -= monto;
        resolve(dineroActual);
      }
    });
  };
  retirarDinero(400)
    .then((montoActual) => console.log(`disponible ${montoActual}`))
    .catch((err) => console.warn(err));
})();
