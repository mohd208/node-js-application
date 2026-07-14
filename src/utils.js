function getGreeting() {
  return 'Hello from node-js-application!';
}

// Never called anywhere - dead code for testing PR review detection
function formatUsername(username) {
  return username.trim().toLowerCase();
}

// Exported but never imported/used elsewhere
function calculateTax(amount, rate) {
  return amount * rate;
}

function unusedHelper() {
  const unusedVar = 'this variable is never used';
  return 42;
}

module.exports = { getGreeting, formatUsername, calculateTax, unusedHelper };
