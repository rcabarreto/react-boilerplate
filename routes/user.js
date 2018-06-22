const express = require('express');
const path = require('path');
const router = express.Router();


router.get('/', (req, res) => {
  res.status(200).json({ error: false, message: 'got to the api/user route!' });
});


router.post('/', (req, res) => {

  let user = {
    name: 'Rodrigo Barreto',
    email: 'rcabarreto@gmail.com',
    token: 'kljfsldkfwo3yur298ybv89'
  };

  res.status(200).json(user);

});


router.put('/', (req, res) => {

  let userId = req.user.get('id');
  let body = _.pick(req.body, 'email','gender','themeId');

  db.user.findById(userId).then(user => {
    if (user) {
      user.update(body).then(user => {
        res.json(user.toPublicJSON());
      }, err => {
        res.status(400).json(err);
      })
    } else {
      res.status(404).send();
    }
  }, err => {
    res.status(500).json(err);
  });

});


router.put('/setpassword', (req, res) => {

  let userId = parseInt(req.user.get('id'), 10);
  let body = _.pick(req.body, 'password');

  if(typeof body.password !== 'string'){
    res.status(500).send();
  }

  db.user.findById(userId).then(user => {
    if (user) {
      user.update(body).then(user => {
        res.json(user.toPublicJSON());
      }, err => {
        res.status(400).json(err);
      });
    } else {
      res.status(404).send();
    }
  }, err => {
    res.status(500).send(err);
  });

});



module.exports = router;
