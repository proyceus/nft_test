const path = require('path');

const User = require('./userModel');

module.exports = (app) => {
  app.get('/api', (req, res) => {
    res.json("Hello world");
  })

  app.post('/api/addFavoriteNFT', (req, res) => {
    console.log(req.body);
  })

}