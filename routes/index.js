var express = require('express');
var router = express.Router();
const data = require('../data/data.json');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title:'图书管理系统', list: data});
});

module.exports = router;
