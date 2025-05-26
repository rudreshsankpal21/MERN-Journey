const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const app = express();
const port = process.env.PORT || 3000;
const server = createServer(app);
const io = new Server(server);

// Listen to connection from client
io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

// Start the server
server.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
