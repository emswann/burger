var express = require('express');
var router = express.Router();

var burger = require('../models/burger');

router.get('/index', (req, res) => {
  burger.all(result => {
    var hbsObj = {burgers: result};
    res.render('index', hbsObj);
  })
});

router.post('/api/burgers', (req, res) => {
  var cols = ['name'];
  var vals = [req.body.name];

  burger.create(cols, vals, result => {
    res.json({ id: result.insertId });
  })
});

router.put('/api/burgers/:id', (req, res) => {
  var objColVals = {devoured: req.body.devoured};
  var condition = 'id = ' + req.params.id;

  burger.update(objColVals, condition, result => {
    result.changedRows == 0 ? res.status(404).end()
                            : res.status(200).end();
  })
});

module.exports = router;
