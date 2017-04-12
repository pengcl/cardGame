var express = require('express');
var request = require('request');
var router = express.Router();

/* GET api listing. */
router.get('/', function (req, res, next) {
    res.send("接口准备好了");
});

function each(objArray, funName) {
//功能: 用函数 funName 对数组 objArray 中的每个值进行处理一次，
    for (var i = 0; i < objArray.length; i++) {
        funName(objArray[i], i);
    }
}

//获取订单信息

router.get('/findRechargeProducts', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST");
    res.header("Cache-Control: no-cache, must-reva lidate");
    //以上两行设置跨域请求
    request("http://m.yfq.cn/yfqcz/czProdProductsController.do?findRechargeProducts", function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body);
        }
    });
});

module.exports = router;
