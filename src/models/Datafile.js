const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const datafileSchema = Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('datafile', datafileSchema);
