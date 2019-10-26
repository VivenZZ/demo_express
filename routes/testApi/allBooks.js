var express = require('express');
var router = express.Router();
const db =require('../../mydb/db');

// 查询所有图书 返回给页面 json接口
// router.get('/', function(req, res, next) {
//     let sql = 'select * from book';
//     db.base(sql, null, (result)=>{
//         res.json(result);
//     })
// });

// 查询所有图书 返回给页面 jsonp接口
router.get('/', function(req, res, next) {
    let sql = 'select * from book';
    db.base(sql, null, (result)=>{
        res.jsonp(result);
    })
});
module.exports = router;