process.on("exit", function () {
  console.log("El proceso terminó");

  setTimeout(() => {
    console.log("Esto no se verá nunca");
  });
});

process.on("beforeExit", function () {
  console.log("El proceso va a terminar");
});

process.on("uncaughtException", function (err, origin) {
  console.log(`Error: ${err.message} en ${origin}`);
});

setTimeout(() => {
  console.log("Esto si se verá");
});

seRompe();

console.log("Esto si el error no se recoje no sale");
