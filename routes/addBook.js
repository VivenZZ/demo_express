var express = require('express');
var router = express.Router();
const db =require('../mydb/db');
// const path = require('path');
// const fs = require('fs');
// const data = require('../data/data.json');
// // 自增图书编号
// let maxBookCode = () => {
//   let arr = [];
//   data.forEach((item)=>{
//     arr.push(item.id);
//   });
//   return Math.max.apply(null, arr);
// };
/* 添加图书 */
router.post('/', function(req, res, next) {
  // 获取表单数据
  let info = req.body;
  let book = {};
  for(let key in info) {
    book[key] = info[key];
  }
  let sql = 'insert into book set ?';
  db.base(sql, book, (result)=>{
    if (result.affectedRows == 1) {
      res.json({flag: 1});
    } else {
      res.json({flag: 2});
    }
  });
  // book.id = (maxBookCode() + 1).toString();
  // data.push(book);
  // 需要把内存中数据写入文件
  // fs.writeFile(path.join(__dirname,'../data/data.json'),JSON.stringify(data,null, 4), (err)=>{
  //   if (err) {
  //     res.send('server error');
  //   }
  //   //文件写入成功，重新跳转主页面
  //   res.redirect('/');
  // });

});

module.exports = router;
