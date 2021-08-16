const passport = require('passport');
const Account = require('./account.js');

module.exports = function(app) {
  app.post('/api/register', function(req, res) {
    Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
        if (err) {
            console.error(err);
        }

        passport.authenticate('local')(req, res, function () {
          res.send('User created')
        });
    });
  });

  app.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
  });

  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

}