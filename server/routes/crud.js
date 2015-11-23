var express = require('express');
var router = express.Router();
var models = require('../models');

// get all goods
router.get('/', function(req, res) {
  console.log('/api/goods');
  //res.json({result: 200});
  models.Goods.findAll({
    attributes: ['id', 'title', 'price']
  }).then(function(goods) {
    //console.log(goods);
    res.json(goods);
  });
});

// get single good
router.get('/:id', function(req, res) {
  console.log('/api/goods/'+req.params.id);
  //res.json({result: 200});
  models.Goods.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'title', 'price']
  }).then(function(good) {
    //console.log(good);
    res.json(good);
  });
});

// add new good
router.post('/', function(req, res) {
  //console.log('/api/goods put');
  //res.json({result: 200});
  models.Goods.create({
    title: req.body.title,
    price: req.body.price
  }).then(function(good) {
    //console.log(good);
    res.json({id: good.id, title: good.title, price: good.price});
  });
});

// update single good
router.put('/:id', function(req, res) {
  console.log('/api/goods/'+req.params.id+' put');
  //res.json({result: 200});
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
        //console.log(good);
        res.send(good);
      });
    }
  });
});

// delete a single good
router.delete('/:id', function(req, res) {
  console.log('/api/goods/'+req.params.id+' delete');
//  res.json({result: 200});
  models.Goods.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(good) {
    //console.log(good);
    res.json({result:200});
  });
});

module.exports = router;
