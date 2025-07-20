function sendMessage() {
    const input = document.getElementById("userInput");
    const message = input.value.trim();
    if (!message) return;
  
    addMessage(message, "user");
    input.value = "";
  
    const aiReplies = [
      "Hello! How can I help you today?",
      "That's interesting. Tell me more!",
      "I'm just a demo AI for now 😊",
      "Can you rephrase that?",
      "Nice to hear from you!",
      "Stay motivated and keep building!"
    ];
  
    const aiDiv = addMessage("Typing...", "ai");
  
    setTimeout(() => {
      const randomReply = aiReplies[Math.floor(Math.random() * aiReplies.length)];
      aiDiv.textContent = randomReply;
    }, 1000);
  }
  
  function addMessage(text, sender) {
    const chat = document.getElementById("chat");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);
    messageDiv.textContent = text;
    chat.appendChild(messageDiv);
    chat.scrollTop = chat.scrollHeight;
    return messageDiv;
  }