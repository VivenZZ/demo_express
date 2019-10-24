var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let data = {
        title: '水果',
        list: ['apple', 'orange', 'banana']
    }
    res.render('list', data);
});

module.exports = router;