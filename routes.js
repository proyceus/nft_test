const path = require('path');

const User = require('./userModel');

module.exports = (app) => {
  app.get('/api', (req, res) => {
    console.log(req.session);
  })

  // Add favorite Nfts when clicking on buttons, user must be signed in
  // app.post('/api/addFavoriteNFT', async (req, res) => {
  //   //add in post to server
  //   //having issues figuring out how to capture the current user's username to push to the post request
  //   console.log(req.body);

  //   const image = req.body.image;
  //   const name = req.body.name;
  //   const buyLink = req.body.buyLink;
  //   const description = req.body.description;

  //   try {
  //     // let findOne = await User.findOne({username: req.body.username});

  //     // if (findOne) {

  //     // }
  //     let newUser = new User({
  //       username:
  //     })

  //   } catch (err) {
  //     console.error(err);
  //     res.json(err);
  //   }
  // })

  app.post('/api/newuser', async (req, res) => {
    try {
      //check to see if username is already taken
      let findUser = await User.findOne({username: req.body.username});

      if (findUser) {
        //alert user if username is already taken, need to find out how to put small message on screen
        alert("Username already exists, choose another");
      } else {
        findUser = new User({
          username: req.body.username,
          password: req.body.password
        })

        await findUser.save();

        res.json("User successfully saved to database");
        res.redirect('/');
      }

    } catch (err) {
      console.error(err);
      res.json(err);
    }
  })

}