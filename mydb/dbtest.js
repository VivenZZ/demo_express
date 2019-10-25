/*
    测试通用api
 */
const db = require('./db');

// 插入
// let sql = 'insert into book set ?';
// let data = {
//     name: '射雕英雄传',
//     author: '金庸',
//     category: '武侠',
//     description: '保家卫国的故事',
// }
// db.base(sql, data, (result)=>{
//     console.log(result);
// });

// 更新
// let sql = 'update book set name=?,author=?,category=?,description=? where id=?';
// let data = ['雪山飞狐','金庸','文学','两个男人的故事','10'];
// db.base(sql,data,(result)=>{
//     if (result.affectedRows == 1) {
//         console.log('更新成功');
//     } else {
//         console.log('更新失败');
//     }
// });

// 删除

// let sql = 'delete from book where id=?';
// let data = ['10'];
// db.base(sql,data,(result)=>{
//    if (result.affectedRows==1){
//        console.log('删除成功');
//     } else {
//         console.log('删除失败');
//     }
// });

// 查询

let sql = 'select * from book where id=?';
let data = ['6'];
db.base(sql, data, (result)=>{
    console.log('查询成功');
    console.log(result);
});
