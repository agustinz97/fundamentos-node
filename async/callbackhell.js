function hola(nombre, miCallback) {
  setTimeout(() => {
    console.log("Hola, " + nombre);
    miCallback(nombre);
  }, 1500);
}

function hablar(callbackHablar) {
  setTimeout(() => {
    console.log("Bla bla bla..");
    callbackHablar();
  }, 1000);
}

function adios(nombre) {
  setTimeout(() => {
    console.log("Adiós, " + nombre);
  }, 1000);
}

function conversacion(nombre, veces, callback) {
  if (veces > 0) {
    hablar(function () {
      conversacion(nombre, --veces, callback);
    });
  } else {
    callback(nombre);
  }
}

// --

console.log("Iniciando proceso");
hola("Carlos", (nombre) => {
  conversacion(nombre, 3, adios);
});

/* hola("Carlos", function (nombre) {
  adios(function (nombre) {
    console.log(nombre, function () {
      console.log("Terminamos");
    });
  });
}); */

/* hola("Agustín", (nombre) => {
  hablar(() => {
    hablar(() => {
      hablar(() => {
        adios(nombre, function () {
          console.log("Terminando proceso");
        });
      });
    });
  });
}); */
