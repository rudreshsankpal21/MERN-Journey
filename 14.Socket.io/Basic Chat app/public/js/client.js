// Instance of socket
const socket = io();

// select element
const sendButton = document.querySelector(".send-button");
const messageInput = document.getElementById("messageInput");
const messageArea = document.getElementById("messageArea");

// Add message
function addMessage(message, sender) {
  const messageElement = document.createElement("div");
  messageElement.className = `message ${sender}-message`;
  messageElement.textContent = message;
  messageArea.appendChild(messageElement);
  messageArea.scrollTop = messageArea.scrollHeight;
}

// Display server message
socket.on("messageFromServer", (message) => {
  addMessage(message, "server");
});

// Send message to server
sendButton.addEventListener("click", () => {
  const message = messageInput.value.trim();
  if (message) {
    socket.emit("messageFromClient", message);
    addMessage(message, "client");
    messageInput.value = "";
  }
});

// Handle server greeting with acknowledgement
socket.on("greeting", (message, callback) => {
  // addMessage(message, "server");
  console.log("Received greeting:", message);

  // Send acknowledgement back to the server
  callback({
    status: "received",
    message: "Thanks for the greeting!",
    timestamp: new Date().toLocaleString(),
  });
});
