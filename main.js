const port = process.env.PORT || 3000;

require('http').createServer((req, res) => {
  const date = new Date();
  res.writeHead(200, {
    'Content-Type': 'text/plain',
  });
  res.end('Hello!\n\nRequest time: ' + date.toJSON());
}).listen(port);

console.log(`Listening on port ${ port }`);
