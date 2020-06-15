let i = 0;
let interval = setInterval(function () {
  if (i === 3) {
    clearInterval(interval);
  }
  i++;
  console.log("Hola");
}, 1000);

console.log(global);
console.log(process);
console.log(__dirname);
console.log(__filename);

global.miVariable = "EL valor que yo quiera";

console.log(miVariable);
