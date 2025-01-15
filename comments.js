// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the comments.html file from the previous exercise.
const http = require('http');
const fs = require('fs').promises;

const server = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  const data = await fs.readFile('./comments.html');
  res.end(data);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
