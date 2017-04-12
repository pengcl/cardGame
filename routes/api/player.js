var express = require('express');
var request = require('request');
var router = express.Router();

// mongodb
var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:3000';

console.log("Api is ready!");

/* GET api listing. */
router.get('/', function (req, res, next) {
  res.send("Players Api is ready!");
});

var insertData = function (db, callback) {
  //连接到表 site
  var collection = db.collection('site');
  //插入数据
  var data = [{"name": "菜鸟教程", "url": "www.runoob.com"}, {"name": "菜鸟工具", "url": "c.runoob.com"}];
  collection.insert(data, function (err, result) {
    if (err) {
      console.log('Error:' + err);
      return;
    }
    callback(result);
  });
};

MongoClient.connect(DB_CONN_STR, function (err, db) {
  insertData(db, function (result) {
    console.log(result);
    db.close();
  });
});

router.get('/add', function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST");
  //以上两行设置跨域请求
  res.send("ok");
  /*request("http://m.yfq.cn/yfqcz/czProdProductsController.do?findRechargeProducts", function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  });*/
});

module.exports = router;
