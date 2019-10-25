var express = require('express');
var router = express.Router();
const db =require('../mydb/db');
// const path = require('path');
// const fs = require('fs');
// const data = require('../data/data.json');
/* 添加图书 */
router.get('/', function(req, res, next) {
  let id = req.query.id;
  let sql = 'delete from book where id=?';
  let data = [id];
  db.base(sql, data, (result)=>{
    if (result.affectedRows == 1) {
      console.log('删除成功');
      res.redirect('/');
    } else {
      console.log('删除失败');
    }
  });
  // data.forEach((item, index)=>{
  //   if (id === item.id){
  //     data.splice(index, 1);
  //   }
  // });
  // // 需要把内存中数据写入文件
  // fs.writeFile(path.join(__dirname,'../data/data.json'),JSON.stringify(data,null, 4), (err)=>{
  //   if (err) {
  //     res.send('server error');
  //   }
  //   //文件写入成功，重新跳转主页面
  //   res.redirect('/');
  // });

});

module.exports = router;
