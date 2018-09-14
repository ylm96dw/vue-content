var express = require('express');
var router = express.Router();
// var cors = require('cors')
var http = require('http')
var proxy = require('http-proxy-middleware')
router.use('/api',proxy({
  target:'http://localhost:3001',
  changeOrigin:true,
  pathRewrite:{
    '/api':'/'
  }
}
));
//  /api/demo2  首先当匹配到了/api开发的地址会去转发到B服务器，同时，带上整个路径，所以，请求的地址变成了 http://localhost:3001/api/demo2 ,所以要用到pathRewrite :{'/api':'/'}
// const corsOpitions = {
//   origin: 'http://localhost:8080',
//   withCredentials:true
// }
// router.use(corsOpitions)   
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/getJsonp',(req,res)=>{
  res.header('Access-Control-Allow-Oringin','http://localhost:8080')
  res.jsonp({
    data:'一些信息',
    msg:'吃饭睡觉打豆豆',
    code:200
  }) 
})

router.get('/getMsg',(req,res)=>{
  //简单请求
  res.header('Access-Control-Allow-Oringin','http://localhost:8080')
  res.json({
    data:'一些信息',
    msg:'吃饭睡觉打豆豆',
    code:200
  })
})
router.get('/proxy',(req,response)=>{
  http.get('http://localhost:3001/demo2',function(res){
    // console.log(res)
    //另一个服务端的信息
    let rawData = ''
    res.on('data',(chunk)=>{
      return rawData += chunk
    })
    res.on('end',()=>{
      try{
        const parsedData = JSON.parse(rawData);
        console.log(parsedData)
        response.json(parsedData)
      }catch(err){
        console.error(err.message)
      }
      
    })
  })
  // res.json({
  //   code:200
  // })
})

router.post('/noSimple',(req,res)=>{
  res.header('Access-Control-Allow-Oringin','http://localhost:8080')
  res.json({
    data:'一些信息',
    msg:'吃饭睡觉打豆豆',
    code:200
  })
})
module.exports = router;
