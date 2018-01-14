const mongoose = require('mongoose');

function init(config){
  console.log(`Trying to connect to mongodb://localhost:${config.DB_PORT}/${config.DB_NAME}`);
  let options = {
    useMongoClient: true,
    promiseLibrary: global.Promise
  };
  let connString = `mongodb://mongo:${config.DB_PORT}/${config.DB_NAME}`;
  mongoose.connect(connString, options);
  let conn = mongoose.connection;
  conn.on('error', (err)=>{
    console.error('connection error:',err);
  });
  conn.on('open', ()=>{
    console.log('db connection open');
  })
  return conn;
}

module.exports = {
  init: init
};