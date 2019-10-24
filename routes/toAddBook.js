var express = require('express');
var router = express.Router();
/* 添加图书 */
router.get('/', function(req, res, next) {
  res.render('addBook',{title:'添加图书'});
});

module.exports = router;
