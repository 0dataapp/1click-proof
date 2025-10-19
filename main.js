const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;

const data = {
  count: 0,
};
const dataPath = path.join(process.env.DATA_DIRECTORY || __dirname, '__local', 'data.json');

const restartDate = new Date();

function uSerial2 (inputData) {
  return inputData.reduce(async function (coll, e) {
    return (await coll).concat(await new Promise(function (res, rej) {
      try {
        res(e());
      } catch (error) {
        rej(error);
      }
    }));
  }, Promise.resolve([]));
};

const mod = {

  handle (req, res) {
    data.count += 1;

    res.writeHead(200, {
      'Content-Type': 'text/plain',
    });
    res.end([
      'Hello!',
      'Request time: ' + new Date().toJSON(),
      'Total requests: ' + data.count,
      'Last restart: ' + restartDate.toJSON(),
    ].join('\n\n'));
    fs.writeFileSync(dataPath, JSON.stringify(data));
  },

  setupData () {
    if (!fs.existsSync(path.dirname(dataPath))){
      fs.mkdirSync(path.dirname(dataPath));
    }

    if (!fs.existsSync(dataPath)){
      fs.writeFileSync(dataPath, JSON.stringify(data));
    }

    Object.assign(data, JSON.parse(fs.readFileSync(dataPath, 'utf8')));
  },

  setupServer () {
    require('http').createServer(mod.handle).listen(port);

    console.log(`Listening on port ${ port }`);
  },

};

uSerial2(Object.keys(mod).filter(e => e.startsWith('setup')).map(e => mod[e]));

