const path = require('path');

const User = require('./userModel');

module.exports = (app) => {
  app.get('/api', async (req, res) => {
    res.json(await User.find());
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

  app.post('/api/signup', async (req, res) => {
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

        console.log(findUser);

        res.status(201).send({username: req.body.username, password: req.body.password});
      }

    } catch (err) {
      console.error(err);
      res.json(err);
    }
  })

  app.post('/api/login', async (req, res) => {
    try {
      const user = {username: req.body.username, password: req.body.password};
      //check if user exists
      let findUser = await User.findOne(user);

      //if user exists, send back success and redirect to home
      if (findUser) {
        res.send(user);
        console.log("found user");
      } else {
        res.status(404).send();
        console.log("no user found");
      }

    } catch (err) {
      res.json(err);
      console.log(err.message);
    }
  })

}