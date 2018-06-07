var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/first', function(req, res, next) {
//   res.json({name:'aaa',pwd:'123'});
// });

router.post('/login', function(req, res, next) { 
  console.log(req.body);
  username=req.body.username;
  password=req.body.password;
  if(username=='12345'&password=='12345'){
    res.json(JSON.stringify({'type':1}))
  }else{
    res.json(JSON.stringify({'type':2}))
  }  
});
module.exports = router;
