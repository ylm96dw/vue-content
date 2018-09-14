var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/demo2',(req,res)=>{
  res.json({
    msg:'厉害啊',
    code:200
  })
})
module.exports = router;
