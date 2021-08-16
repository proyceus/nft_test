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
          res.send("Successfully authenticated");
          console.log(user);
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

  app.get("/getuser", (req, res) => {
    res.send(req.user);
  });

  app.get("/logout", (req, res) => {
    req.logout();
    res.send("Successfully logged out");
  });
}