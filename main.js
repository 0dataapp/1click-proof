const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;

require('http').createServer((req, res) => {
  const date = new Date();

  const destination = path.join(process.env.DATA_DIRECTORY || __dirname, '__local', date.valueOf() + '.txt');

  if (!fs.existsSync(path.dirname(destination))){
    fs.mkdirSync(path.dirname(destination));
  }

  fs.writeFileSync(destination, '');

  res.writeHead(200, {
    'Content-Type': 'text/plain',
  });
  res.end([
    'Hello!',
    'Request time: ' + date.toJSON(),
    'Local Files: ' + fs.readdirSync(path.dirname(destination)).filter(e => e.endsWith('.txt')).length,
  ].join('\n\n'));
}).listen(port);

console.log(`Listening on port ${ port }`);
