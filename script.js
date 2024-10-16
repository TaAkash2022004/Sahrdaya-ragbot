// Send message function
function sendMessage() {
    const inputField = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');
  
    const userMessage = inputField.value.trim();
    if (!userMessage) return;
  
    addMessage(userMessage, 'user');
    inputField.value = '';
  
    // Simulate bot response (replace this with actual RAG logic)
    setTimeout(() => {
      const botResponse = generateBotResponse(userMessage);
      addMessage(botResponse, 'bot');
    }, 1000);
  }
  
  // Add message to the chat box
  function addMessage(text, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message', sender);
    messageDiv.textContent = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  
  // Example bot response
  function generateBotResponse(message) {
    const responses = {
      admission: 'The admission process is straightforward. Visit the official portal to apply.',
      hostel: 'We offer separate hostels for boys and girls with great facilities.',
      placement: 'Our placement cell ensures excellent career opportunities for students.'
    };
  
    for (let key in responses) {
      if (message.toLowerCase().includes(key)) {
        return responses[key];
      }
    }
    return 'I am not sure about that. Please ask something else!';
  }
  function populateInput(query) {
    document.getElementById('user-input').value = query; // Set the input value to the clicked query
}

// Function to send message (existing code)
function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return; // Prevent sending empty messages

    // Display the user's message in the chat box
    const chatBox = document.getElementById('chat-box');
    const userMessage = document.createElement('div');
    userMessage.className = 'chat-message user';
    userMessage.textContent = userInput;
    chatBox.appendChild(userMessage);

    // Clear the input field
    document.getElementById('user-input').value = '';

    // Here you can add the logic to handle the user's message or query
}
