/*
把data中的数据拼接成insert语句
 */
const path = require('path');
const fs = require('fs');

fs.readFile(path.join(__dirname,'../data/data.json'),'utf8',(err,content)=>{
    if (err) {
        console.log(err);
        return;
    }
    let arr = [];
    let list = JSON.parse(content);
    list.forEach((item)=>{
        let sql = `insert into book (name,author,category,description) values ('${item.name}','${item.author}','${item.category}','${item.desc}');`
        arr.push(sql);
    });
    fs.writeFile(path.join(__dirname,'data.sql'),arr.join(''),'utf8',(err)=>{
        console.log('init data finished');
    })
});