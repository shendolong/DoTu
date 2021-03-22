var express = require('express');
var router = express.Router();

var tinh = require('../utilies/my_modules')

router.get('/',function(req, res, next){
  res.redirect('/category')
});




module.exports = router;
