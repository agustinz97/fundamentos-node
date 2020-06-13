async function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("Hola, " + nombre);
      resolve(nombre);
    }, 1500);
  });
}

async function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Bla bla bla..");
      resolve(nombre);
    }, 1000);
  });
}

async function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Adiós, " + nombre);
      resolve();
    }, 1000);
  });
}

async function main() {
  let nombre = await hola("Agustín");
  await hablar();
  await hablar();
  await hablar();
  await hablar();
  await adios(nombre);
}

console.log("Iniciamos el proceso");
main();
console.log("Terminamos el proceso");
