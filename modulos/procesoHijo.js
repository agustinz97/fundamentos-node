const { exec, spawn } = require("child_process");

console.log(exec);

//Ejecuta comando del SO
/* exec("dir", (err, stdout, sterr) => {
  if (err) {
    console.error(err);
    return false;
  }

  console.log(stdout);
}); */

//Ejecutar otro proceso Node
/* exec("node modulos/consola.js", (err, stdout, sterr) => {
  if (err) {
    console.error(err);
    return false;
  }

  console.log(stdout);
}); */

let proceso = spawn("dir" /* ['params'] */);

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on("data", function (dato) {
  console.group("¿El proceso esta muerto?");
  console.log(proceso.killed);
  console.groupEnd("¿El proceso esta muerto?");
  console.log(dato.toString());
});

proceso.on("exit", function () {
  console.log("Proceso terminado");
});
