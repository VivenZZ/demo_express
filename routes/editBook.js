var express = require('express');
var router = express.Router();
const db =require('../mydb/db');
// const path = require('path');
// const fs = require('fs');
// const data = require('../data/data.json');
/* 修改 */
router.put('/', function(req, res, next) {
  // 获取表单数据
  let info = req.body;
  let sql = 'update book set name=?,author=?,category=?,description=? where id=?';
  let data = [info.name, info.author, info.category, info.description, info.id];
  db.base(sql, data, (result)=>{
    if (result.affectedRows == 1) {
      console.log('修改成功');
      // res.redirect('/');
      res.json({flag: 1});
    } else{
      res.json({flag: 2});
      console.log('修改失败');
    }
  });

  // data.forEach((item)=>{
  //   if (item.id === info.id){
  //     for(let key in info){
  //       item[key] = info[key]
  //     }
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
