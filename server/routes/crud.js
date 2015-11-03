var express = require('express');
var router = express.Router();
var models = require('../models');

// get all goods
router.get('/api/goods', function(req, res) {
  console.log('/api/goods');
  res.json({result: 200});
  //models.Goods.findAll({}).then(function(goods) {
  //  res.json(goods);
  //});
});

// get single good
router.get('/api/goods/:id', function(req, res) {
  console.log('/api/goods/'+req.params.id);
  res.json({result: 200});
  //models.Goods.find({
  //  where: {
  //    id: req.params.id
  //  }
  //}).then(function(good) {
  //  res.json(good);
  //});
});

// add new good
router.post('/api/goods', function(req, res) {
  console.log('/api/goods put');
  res.json({result: 200});
  //models.Goods.create({
  //  title: req.body.title,
  //  price: req.body.price
  //}).then(function(good) {
  //  res.json(good);
  //});
});

// update single good
router.put('/api/goods/:id', function(req, res) {
  console.log('/api/goods/'+req.params.id+' put');
  res.json({result: 200});
  //models.Goods.find({
  //  where: {
  //    id: req.params.id
  //  }
  //}).then(function(good) {
  //  if(good){
  //    good.updateAttributes({
  //      title: req.body.title,
  //      price: req.body.price
  //    }).then(function(good) {
  //      res.send(good);
  //    });
  //  }
  //});
});

// delete a single good
router.delete('/goods/:id', function(req, res) {
  console.log('/api/goods/'+req.params.id+' delete');
  res.json({result: 200});
  //models.Goods.destroy({
  //  where: {
  //    id: req.params.id
  //  }
  //}).then(function(good) {
  //  res.json(good);
  //});
});

module.exports = router;
