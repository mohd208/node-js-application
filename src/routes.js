const path = require('path'); // unused import
const { getGreeting } = require('./utils');

// Defined but never called
function logRequest(req) {
  console.log(`Incoming request: ${req.url}`);
}

function handleRequest(req, res) {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok' }));
    return;
  }

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(getGreeting());
}

module.exports = { handleRequest };
