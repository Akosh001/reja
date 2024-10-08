const http = require("http");

const mongodb = require("mongodb");
let db;
const connectionString =
  "mongodb+srv://Akhrorbek:Akhrorbek..1@cluster0.o0g8w.mongodb.net/Reja?authSource=admin&";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDB connectin succed");
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = process.env.PORT || 6003;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
