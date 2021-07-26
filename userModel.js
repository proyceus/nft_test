const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: String,
  nfts: [{
    image: String,
    name: String,
    buyLink: String,
    description: String
  }]
})

module.exports = mongoose.model('userModel', userSchema);