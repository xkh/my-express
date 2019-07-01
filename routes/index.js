var express = require('express');
var router = express.Router();
const request = require('request');
const {changeStr} = require('../utils/tools');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('../views/index.html')
});

router.get('/getProducts', function(req, res) {
  request('http://maicai.api.y.dingdongxiaoqu.com/productApi/GetCategory?api_version=8.9.0&app_client_id=3&category_id=5901d11e936edf767a8bf07b&count=20&h5_source=&latitude=31.221596&longitude=121.464916&page=1&station_id=59e5b2f8936edf906a8dbc7d',function(error,response,body){
    let data = JSON.parse(changeStr(response.body))
    console.log('s_search...',data);
    res.json(data);
  })
});



module.exports = router;
