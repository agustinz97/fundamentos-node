const os = require("os");

function kb(bytes) {
  return bytes / 1024;
}

function mb(bytes) {
  return kb(bytes) / 1024;
}

function gb(bytes) {
  return mb(bytes) / 1024;
}

console.log(os.arch());
console.log(os.platform());
console.log(os.cpus().length);
/* console.log(os.constants); */
console.log(`Memoria libre: ${gb(os.freemem()).toFixed(2)}gb`);
console.log(`Memoria total: ${gb(os.totalmem()).toFixed(2)}gb`);

console.log(os.homedir());
console.log(os.tmpdir());

console.log(os.hostname());
console.log(os.networkInterfaces());
