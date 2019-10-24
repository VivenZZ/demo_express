var express = require('express');
var router = express.Router();
const data = require('../data/data.json');
/* 编辑图书 */
router.get('/', function(req, res, next) {
  let id = req.query.id;
  let book = null;
  data.forEach((item)=>{
    if (id === item.id){
      book = item;
      return;
    }
  });
  res.render('editBook',{title:'编辑图书', book});
});

module.exports = router;
