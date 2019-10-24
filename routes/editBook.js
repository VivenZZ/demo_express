var express = require('express');
var router = express.Router();
const path = require('path');
const fs = require('fs');
const data = require('../data/data.json');
/* 添加图书 */
router.post('/', function(req, res, next) {
  // 获取表单数据
  let info = req.body;
  let book = {};
  data.forEach((item)=>{
    if (item.id === info.id){
      for(let key in info){
        item[key] = info[key]
      }
    }
  });
  // 需要把内存中数据写入文件
  fs.writeFile(path.join(__dirname,'../data/data.json'),JSON.stringify(data,null, 4), (err)=>{
    if (err) {
      res.send('server error');
    }
    //文件写入成功，重新跳转主页面
    res.redirect('/');
  });

});

module.exports = router;
