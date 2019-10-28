// 请求页面
const http = require('http');
const path = require('path');
const fs = require('fs');
let options = {
    hostname: 'localhost',
    port: 3000,
    path: '/books'
};
let req = http.request(options, res => {
    let info = '';
    res.on('data', chunk => {
        info+=chunk;
    });
    res.on('end', ()=>{
        console.log(info)
    });
});
req.end();