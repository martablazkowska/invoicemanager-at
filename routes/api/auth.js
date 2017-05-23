var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var bcrypt = require('bcrypt-nodejs');
var jwt    = require('jsonwebtoken');
var db = mongojs('mongodb://marta:testtest@ds147789.mlab.com:47789/mbl-mean-app', ['users']);



router.post('/authenticate', function (req, res) {

  // find the user
  db.users.findOne({username: req.body.username}, function (err, user) {

    if (err) {
      res.status(400);
      res.send(err);
    } else {
      if (!user) {
        res.status(400);
        res.json({success: false, message: 'Authentication failed. User not found.'});
      } else if (user) {

        // check if password matches
        if (!bcrypt.compareSync(req.body.password, user.password)) {
          res.status(400);
          res.json({success: false, message: 'Authentication failed. Wrong login or password.'});
        } else {

          // if user is found and password is right
          // create a token
          var token = jwt.sign(user, 'superSecret', {
            expiresIn: 1440 // expires in 24 hours
          });

          // return the information including token as JSON
          res.json({
            success: true,
            message: 'Enjoy your token!',
            token: token
          });
        }

      }
    }
  });
});

// Save User
router.post('/user', function(req, res, next){
  var user = req.body;
  user.password = bcrypt.hashSync(user.password);
  if(!user.username || !user.password){
    res.status(400);
    res.json({
      "error": "Bad Data"
    });
  }else {
    db.users.save(user, function(err, user){
      if(err){
        res.send(err);
      }else {
        res.status(200).json(user);
      }
    });
  }
});

router.use(function(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['authorization'];

  token = token.replace('Bearer ', '');

  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, 'superSecret', function(err, decoded) {
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        next();
      }
    });
  } else {
    // if there is no token
    // return an error
    return res.status(403).send({
      success: false,
      message: 'No token provided.'
    });

  }
});

module.exports = router;