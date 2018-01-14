const express = require('express');

const config = require('./src/lib/config');
const db = require('./src/lib/database');
console.log('config:');
console.log(config);
const app = express();

let conn = db.init(config);
console.log(conn);
console.log(db);



app.get('/', (req, res)=>{
  res.send('status: ok');
});

app.listen(config.PORT, config.HOST);

console.log(`Running on http://${config.HOST}:${config.PORT}`);