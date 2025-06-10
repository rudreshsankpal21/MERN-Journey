const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const { join } = require("path");
const app = express();
const server = createServer(app);
const io = new Server(server);
const PORT = process.env.PORT || 3000;

// serve static files from public folder
app.use(express.static(join(__dirname, "public")));

// Server the index.html file
app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

// Connection From client
io.on("connection", (socket) => {
  console.log("a user connected");

  // Emit message to client
  socket.emit("messageFromServer", "Hello from the server");

  // Listen a message from client
  socket.on("messageFromClient", (message) => {
    console.log("Message received from client:", message);

    // Broadcasting the message to all connected clients execpt the sender
    socket.broadcast.emit("messageFromServer", message);
  });

  // Acknowledgement
  // Send greeting with acknowledgement
  socket.emit("greeting", "Hello from the server", (response) => {
    console.log("Greeting sent", response);
  });
});

// Start server
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
