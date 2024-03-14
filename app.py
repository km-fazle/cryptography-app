from flask import Flask, request, jsonify
from cryptography.fernet import Fernet

app = Flask(__name__)
# Generate a key for encrypting and decrypting
# Note: In a real app, you'd want to keep this key secure
key = Fernet.generate_key()
cipher_suite = Fernet(key)

@app.route('/encrypt', methods=['POST'])
def encrypt():
    data = request.json
    if 'message' in data:
        encrypted_message = cipher_suite.encrypt(data['message'].encode())
        return jsonify({'encrypted': encrypted_message.decode()})
    return jsonify({'error': 'Message is required'}), 400

@app.route('/decrypt', methods=['POST'])
def decrypt():
    data = request.json
    if 'message' in data:
        decrypted_message = cipher_suite.decrypt(data['message'].encode())
        return jsonify({'decrypted': decrypted_message.decode()})
    return jsonify({'error': 'Message is required'}), 400

if __name__ == '__main__':
    app.run(debug=True)
