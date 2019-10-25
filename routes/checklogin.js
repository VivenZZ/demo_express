var express = require('express');
var router = express.Router();
const db =require('../mydb/db');

router.post('/', function(req, res, next) {
    let param = req.body;
    let sql = 'select count(*) as total from user where username=? and password=?';
    let data = [param.username,param.password];
    console.log(data);
    db.base(sql, data,(result)=>{
        if (result[0].total== 1) {
            res.send('登录成功！');
        } else {
            res.send('登录失败！');
        }
    });
});

module.exports = router;
