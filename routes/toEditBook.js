var express = require('express');
var router = express.Router();
const db =require('../mydb/db');
// const data = require('../data/data.json');
/* 编辑图书 */
router.get('/', function(req, res, next) {
  let id = req.query.id;
  let book = null;
  let sql = 'select * from book where id=?';
  let data = [id];
  db.base(sql, data, (result)=>{
    // res.render('editBook',{title:'编辑图书', book: result[0]});
    res.json({title:'编辑图书', result: result[0]})
  });
  // data.forEach((item)=>{
  //   if (id === item.id){
  //     book = item;
  //     return;
  //   }
  // });
  // res.render('editBook',{title:'编辑图书', book});
});

module.exports = router;
