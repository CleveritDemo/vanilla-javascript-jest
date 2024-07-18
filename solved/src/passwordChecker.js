// src/passwordChecker.js

/**
 * Analyzes a password and determines if it is strong or weak.
 * @param {string} password - The password to be analyzed.
 * @returns {boolean} - True if the password is strong, false if it is weak.
 */
function checkPassword(password) {
  // Perform various checks on the password
  // and return a boolean indicating its strength
  // Add your implementation here

  // Analyze if password is a string if not throw an error
  if (typeof password !== "string") {
    throw new Error("Password must be a string");
  }
  // Analyze if password is empty, if it is return an error
  if (password.length === 0) {
    throw new Error("Password cannot be empty");
  }
  // Analyze if password is less than 8 characters, if it is return an error
  if (password.length < 8) {
    throw new Error("Password must be at least 8 characters");
  }

  // Analyze if password is more than 15 characters, if it is return an error
  if (password.length > 15) {
    throw new Error("Password must be at most 15 characters");
  }

  // Analyze if password contains common patterns, if it does return an error
  if (password.match(/password/i)) {
    throw new Error('Password cannot contain the word "password"');
  }

  // Analyze if password contains only letters, if it does return an error
  if (/^[a-zA-Z]+$/.test(password)) {
    throw new Error("Password must contain at least one number");
  }

  // Analyze if password contains only numbers, if it does return an error
  if (/^\d+$/.test(password)) {
    throw new Error("Password must contain at least one letter");
  }
}

function checkPasswordWithOutRegEx(password) {
  // Perform various checks on the password
  // and return a boolean indicating its strength
  // Add your implementation here

  // Analyze if password is a string if not throw an error
  if (typeof password !== "string") {
    throw new Error("Password must be a string");
  }
  // Analyze if password is empty, if it is return an error
  if (password.length === 0) {
    throw new Error("Password cannot be empty");
  }
  // Analyze if password is less than 8 characters, if it is return an error
  if (password.length < 8) {
    throw new Error("Password must be at least 8 characters");
  }

  // Analyze if password is more than 15 characters, if it is return an error
  if (password.length > 15) {
    throw new Error("Password must be at most 15 characters");
  }

  // Analyze if password contains common patterns, if it does return an error
  if (password.toLowerCase().includes("password")) {
    throw new Error('Password cannot contain the word "password"');
  }

  // Analyze if password contains only letters, if it does return an error
  let hasNumber = false;
  for (let i = 0; i < password.length; i++) {
    if (!isNaN(parseInt(password[i]))) {
      hasNumber = true;
      break;
    }
  }
  if (!hasNumber) {
    throw new Error("Password must contain at least one number");
  }

  // Analyze if password contains only numbers, if it does return an error
  let hasLetter = false;
  for (let i = 0; i < password.length; i++) {
    if (isNaN(parseInt(password[i]))) {
      hasLetter = true;
      break;
    }
  }
  if (!hasLetter) {
    throw new Error("Password must contain at least one letter");
  }
}

module.exports = {
  checkPassword,
  checkPasswordWithOutRegEx,
};
