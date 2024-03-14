document.addEventListener('DOMContentLoaded', function () {
    const encryptBtn = document.getElementById('encryptBtn');
    const decryptBtn = document.getElementById('decryptBtn');
    const inputMessage = document.getElementById('inputMessage');
    const outputMessage = document.getElementById('outputMessage');

    encryptBtn.addEventListener('click', function () {
        const message = inputMessage.value;
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
    });

    decryptBtn.addEventListener('click', function () {
        const message = inputMessage.value;
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
    });
});
