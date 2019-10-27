// 请求页面
const http = require('http');
const path = require('path');
const fs = require('fs');
let options = {
    hostname: 'www.bqg99.com',
    port: 80,
    path: '/book/68449193/'
};
let req = http.request(options, res => {
    let info = '';
    res.on('data', chunk => {
        info+=chunk;
    });
    res.on('end', ()=>{
        fs.writeFile(path.join(__dirname, 'book.html'), info, (err)=>{
            console.log(1);
        })
    })
});
req.end();