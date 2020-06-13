function hola(nombre, miCallback) {
  setTimeout(() => {
    console.log("Hola, " + nombre);
    miCallback(nombre);
  }, 1500);
}

function adios(nombre, otroCalllback) {
  setTimeout(() => {
    console.log("Adiós, " + nombre);
    otroCalllback();
  }, 1000);
}

console.log("Iniciando proceso");
hola("Agustín", (nombre) => {
  adios(nombre, function () {
    console.log("Terminando proceso");
  });
});

//MAL
/* hola("Agustin", () => {});
adios("Agustin", () => {}); */
