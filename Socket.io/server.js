const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const { join } = require("path");
const app = express();
const port = process.env.PORT || 3000;
const server = createServer(app);
const io = new Server(server);

// Server the assets
app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "index.html"));
});
// Listen to connection from client
io.on("connection", (socket) => {
  console.log("a user connected");
  // Emit message to client
  socket.emit("messageFromServer", "Hello from the server");

  // Emit message from client
  socket.on("messageFromClient", (message) => {
    console.log("Received message from client :- ", message);
  });
});

// Start the server
server.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
