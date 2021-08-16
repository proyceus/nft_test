const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema ({
  username: String,
  password: String,
  nfts: [{
    image: String,
    name: String,
    buyLink: String,
    description: String
  }]
});

module.exports = mongoose.model('User', user);