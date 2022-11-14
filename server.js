const http = require("http");
const server = http.createServer((req, res) => {
  res.end("voila le serveur a bien demarrer ");
});
server.listen(process.env.PORT || 3300);
