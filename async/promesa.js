function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("Hola, " + nombre);
      resolve(nombre);
    }, 1500);
  });
}

function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Bla bla bla..");
      /* resolve(nombre); */
      reject("Error");
    }, 1000);
  });
}

function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Adiós, " + nombre);
      resolve();
    }, 1000);
  });
}

//--
console.log("Iniciado el proceso");

hola("Agustín")
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then((nombre) => {
    console.log("Teminado el proceso");
  })
  .catch((error) => {
    console.error("Ha habido un error");
    console.error(error);
  });
