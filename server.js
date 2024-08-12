console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

// 1: Kirish codelar

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session codelar

// 3: View codelar
app.set("views", "views");
app.set("view ingine", "ejs");

// 4: Routing codelar
app.get("/Main", function (req, res) {
  res.end("<h1>HELLO WORLD</h1>");
});

app.get("/Gift", function (req, res) {
  res.end("<h1>Sovgalar qismi</h1>");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running successfully on port: ${PORT}`);
});
