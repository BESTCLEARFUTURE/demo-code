var fs = require('fs');

console.log(JSON.parse(fs.readFileSync('./config.json')));
