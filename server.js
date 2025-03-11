const express = require("express");
const app = express();
const { Server } = require("socket.io");
const { createServer } = require("http");
const httpServer = createServer(app);

var cors = require("cors");
const { SocketAuth } = require("./middleware/socketMiddleware");
const { updateUser, socketInit } = require("./socket");
var corsOptions = {
  origin: process.env.FORNTEND_URL,
  optionsSuccessStatus: 200,
};

app.use(express.json());

app.use(cors(corsOptions));

app.use("/api/v1/whatsapp", require("./router/router"));

app.get("/", function (req, res) {
  res.send("Hello ali");
});

httpServer.listen(3002);
socketInit(httpServer);
