/**
 * 操作数据库
 */
//加载数据库驱动
const mysql      = require('mysql');
// 创建链接
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'book'
});

// 执行链接操作
connection.connect();
//查询
connection.query('SELECT count(*) as total from book', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].total);
});
//插入
/*
let sql = 'insert into book set ?';
let data = {
    name: '明朝那些事',
    author: '当前明月',
    category: '文学',
    description: '明朝历史！'
};
connection.query(sql, data, function (error, results, fields) {
    if (error) throw error;
    if (results.affectedRows == 1) {
        console.log('插入成功');
    } else {
        console.log('插入失败！');
    }
});
*/

//修改
/*
let sql = 'update book set name=?,author=?,category=?,description=? where id=?';
let data = ['浪潮之巅','吴军','计算机','IT巨头兴衰史','9'];
connection.query(sql, data, function (error, results, fields) {
    if (error) throw error;
    if (results.affectedRows == 1) {
        console.log('更新成功');
    } else {
        console.log('更新失败！');
    }
});
 */

//删除
/*
let sql = 'delete from book where id=?';
let data = ['9'];
connection.query(sql, data, function (error, results, fields) {
    if (error) throw error;
    if (results.affectedRows == 1) {
        console.log('删除成功');
    } else {
        console.log('删除失败！');
    }
});
 */

//查询

let sql = 'select * from book where id=?';
let data = ['6'];
connection.query(sql, data, function (error, results, fields) {
    if (error) throw error;
    console.log('查询成功');
    console.log(results);
});


connection.end();