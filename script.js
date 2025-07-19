function sendMessage() {
    const input = document.getElementById("user-input");
    const chatLog = document.getElementById("chat-log");
  
    const userMessage = document.createElement("p");
    userMessage.textContent = "You: " + input.value;
    chatLog.appendChild(userMessage);
  
    const aiReply = document.createElement("p");
    aiReply.textContent = "AI Friend: Hello! (dummy reply)";
    chatLog.appendChild(aiReply);
  
    input.value = "";
  }