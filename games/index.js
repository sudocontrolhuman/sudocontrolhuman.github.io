// Import libraries
const CryptoJS = require('crypto-js');
const aes = require('crypto-js/aes');

// Set password and salt (optional)
const password = 'password';
const salt = 'my_secret_salt';

// Hash password
const hashedPassword = CryptoJS.PBKDF2(password, salt, { keySize: 256, iterations: 1000 });

// Encrypt hashed password
const encryptedHash = aes.encrypt(hashedPassword, 'my_secret_key');

// Store encrypted hash in a hidden input field
document.getElementById('hidden-input').value = encryptedHash.toString();

// Validation function
function validatePassword() {
  const userInput = prompt('Enter password');
  const encryptedInput = aes.encrypt(userInput, 'my_secret_key');
  if (encryptedInput.toString() === document.getElementById('hidden-input').value) {
    // Grant access to protected content
    location.href = ".";
  } else {
    // Deny access
    location.href = "..";
  }
}

validatePassword()