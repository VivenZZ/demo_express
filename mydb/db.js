/*
    封装通用的数据库api
 */
const mysql = require('mysql');
exports.base = (sql, data, callback)=>{
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'root',
        database : 'book'
    });

    connection.connect();

    connection.query(sql, data, function (error, results, fields) {
        if (error) throw error;
        callback(results);
    });

    connection.end();
};