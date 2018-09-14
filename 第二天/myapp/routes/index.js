var express = require('express');
var router = express.Router();
//定义用户名
  const users = [
    {
      username:"good",
      password:"123456"
    },
    {
      username:"张三",
      password:"654321"
    }
  ]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/login',(req,res)=>{
  const {username,password} = req.body
  let loginSuccess = false
  // console.log(username,password)

  users.forEach(item=>{
    if(item.username === username && item.password === password )
    loginSuccess = true
  })
  if(loginSuccess){
    res.json({
      code:200,
      msg:'登录成功'
    })
  }
})

module.exports = router;
