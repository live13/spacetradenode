var express = require('express');
var router = express.Router();
var models = require('../models');

// get all goods
router.get('/goods', function(req, res) {
  models.Goods.findAll({}).then(function(goods) {
    res.json(goods);
  });
});

// get single good
router.get('/goods/:id', function(req, res) {
  models.Goods.find({
    where: {
      id: req.params.id
    }
  }).then(function(good) {
    res.json(good);
  });
});

// add new good
router.post('/goods', function(req, res) {
  models.Goods.create({
    title: req.body.title,
    price: req.body.price
  }).then(function(good) {
    res.json(good);
  });
});

// update single good
router.put('/goods/:id', function(req, res) {
  models.Goods.find({
    where: {
      id: req.params.id
    }
  }).then(function(good) {
    if(good){
      good.updateAttributes({
        title: req.body.title,
        price: req.body.price
      }).then(function(good) {
        res.send(good);
      });
    }
  });
});

// delete a single good
router.delete('/goods/:id', function(req, res) {
  models.Goods.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(good) {
    res.json(good);
  });
});

module.exports = router;
