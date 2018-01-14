const Datafile = require('./models/Datafile');
const config = require('./lib/config');
const db = require('./lib/database');

db.init(config);


new Datafile({
  name: 'balogne.js',
  type:'text/javascript'
}).save((err)=>{
  if(err){
    console.error('DB seed error:', err);
  }else{
    console.log('data initialized');
  }
});