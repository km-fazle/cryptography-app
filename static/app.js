document.addEventListener("DOMContentLoaded", function() {
  // Get references to the DOM elements
  const encryptBtn = document.getElementById("encryptBtn");
  const decryptBtn = document.getElementById("decryptBtn");
  const inputMessage = document.getElementById("inputMessage");
  const outputMessage = document.getElementById("outputMessage");

  // Function to handle encryption
  encryptBtn.addEventListener("click", function() {
    const message = inputMessage.value;
    if (message) {
      fetch('/encrypt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: message }),
      })
      .then(response => response.json())
      .then(data => {
        outputMessage.value = data.encrypted;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  });

  // Function to handle decryption
  decryptBtn.addEventListener("click", function() {
    const message = inputMessage.value;
    if (message) {
      fetch('/decrypt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: message }),
      })
      .then(response => response.json())
      .then(data => {
        outputMessage.value = data.decrypted;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  });
});
