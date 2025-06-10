const express = require("express");
const { createServer, Server } = require("http");
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

// Start server
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
