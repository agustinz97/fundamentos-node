function otraFuncion() {
  serompe();
}

function serompe() {
  return 3 + z;
}

function seRompeAsincrona(cb) {
  setTimeout(function () {
    try {
      return 3 + z;
    } catch (err) {
      console.error(`Error asincnrono: ${err.message}`);
      cb(err);
    }
  });
}

try {
  //otraFuncion();
  seRompeAsincrona(function (err) {
    console.log(err);
  });
} catch (err) {
  console.group("Algo salió mal");
  console.error(err.message);
  console.groupEnd("Algo salió mal");
}

console.log("Esto de aqui está al final");
