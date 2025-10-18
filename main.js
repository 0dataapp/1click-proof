const port = process.env.PORT || 3000;

require('http').createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain',
  });
  res.end('Hello!\n\nThe time of this request is ' + new Date().toJSON());
}).listen(port);

console.log(`Server running on port ${ port }`);
