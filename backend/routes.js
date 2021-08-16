const passport = require('passport');
const User = require('./user');
const bcrypt = require('bcryptjs');

module.exports = function(app) {
  app.post("/login", (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) throw err;
      if (!user) res.send("No user exists");
      else {
        req.logIn(user, err => {
          if (err) throw err;
          res.send(user);
        })
      }
    })(req, res, next);
  });

  app.post("/register", (req, res) => {
    User.findOne({username: req.body.username}, async (err, doc) => {
      if (err) throw err;
      if (doc) res.send("User already exists");
      if (!doc) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const newUser = new User({
          username: req.body.username,
          password: hashedPassword
        });

        await newUser.save();
        res.send("User created");
      }
    });
  });

  app.post("/favoritenfts", (req, res) => {
    User.updateOne({
      username: req.body.username
    }, {
      $push: {"nfts": {
        image: req.body.image,
        name: req.body.name,
        buyLink: req.body.buyLink,
        description: req.body.description
      }}
    }, (err, doc) => {
      if (err) console.error(err);
      res.send("Successfully favorited")
    });
  });

  app.get("/getuser", (req, res) => {
    res.json(req.user);
  });

  app.get("/logout", (req, res) => {
    req.logout();
    res.send("Successfully logged out");
  });
}