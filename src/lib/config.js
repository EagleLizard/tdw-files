const fs = require('fs');
const config = JSON.parse(
  fs.readFileSync('src/config/config.json')
);
module.exports = Object.assign(config, {
  PORT: process.env.EXPRESS_PORT
});
