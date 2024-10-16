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

// Function to populate input field with predefined queries
function populateInput(query) {
  document.getElementById('user-input').value = query;
}

// Event listener for the send button
document.addEventListener('DOMContentLoaded', function() {
  const sendButton = document.querySelector('.chat-input button');
  sendButton.addEventListener('click', sendMessage);

  // Event listener for Enter key in the input field
  const inputField = document.getElementById('user-input');
  inputField.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
          sendMessage();
      }
  });
});
