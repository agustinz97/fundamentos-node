const http = require("http");

function router(req, res) {
  console.group("Nueva peticion");
  console.log(req.url);
  console.groupEnd("Nueva peticion");

  switch (req.url) {
    case "/hola":
      res.write("Hola, Que tal?");
      res.end();
      break;
    default:
      res.write("Error 404: No se lo que quieres");
      res.end();
  }

  /* res.writeHead(201, { "Content-Type": "text/plain" });

  res.write("Hola, ya se usar http de NodeJS");

  res.end(); */
}

http.createServer(router).listen(3000);
