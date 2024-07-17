// Import the checkPassword function from passwordChecker.js
const { checkPassword } = require('./passwordChecker');

// Sample password to analyze
const password = 'MyPassword123';

// Analyze the password using the checkPassword function
const isStrongPassword = checkPassword(password);

// Print the result
console.log(`Is the password strong? ${isStrongPassword}`);