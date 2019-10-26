var express = require('express');
var router = express.Router();
const db =require('../mydb/db');
// const data = require('../data/data.json');
/* GET home page. */
router.get('/', function(req, res, next) {
  let sql  = 'select * from book';
  db.base(sql, null, (result)=>{
    // res.render('index', {title:'图书管理系统', list: result});
      res.json({'title':'图书管理系统',result});
  });
});

module.exports = router;
