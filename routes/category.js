var express = require('express');
var router = express.Router();

var tinh = require('../utilies/my_modules')

var danhSach = [
  { id: 1, name: 'Men', amount: 10 },
  { id: 2, name: 'Women', amount: 10 },
  { id: 3, name: 'Kids', amount: 10 },
  { id: 4, name: 'Baby', amount: 10 }

]
//Get Home
router.get('/', function (req, res, next) {
  res.render('index', { list: danhSach });
});
//Get add new category
router.get('/add-category', function (req, res, next) {
  res.render('new-category');
});
//Post add  new category
router.post('/add-category', function (req, res, next) {
  
  var i = danhSach[danhSach.length - 1].id + 1;
  let { name, amount } = req.body
  let newCategory = {
    id: i,
    name: name,
    amount: amount
  }
  danhSach.push(newCategory)
  res.redirect('/category')
});
/* Get edit catrgory*/
router.get('/edit-category/:id', function (req, res, next) {
  let id = req.params.id
  let categ = danhSach.find(loai => loai.id == id)
  
  res.render('edit-category',{category:categ});
});
/* Post edit catrgory*/
router.post('/edit-category/:id', function (req, res, next) {
  let id = req.params.id
  let { name, amount } = req.body
  danhSach.forEach(cate => {
    if(cate.id ==id){
      cate.name = name
      cate.amount = amount
    }
  })
  res.redirect('/category')
});
/*Del catrgory*/
router.delete('/delete/:id', function (req, res, next) {
  let id = req.params.id
  danhSach= danhSach.filter(cate => cate.id != id )
  res.send({res: true})
});









//get 
router.get('/maytinh', function (req, res, next) {
  res.render('calculator', { tt: '' });
});
//post
router.post('/maytinh', function (req, res, next) {
  if(req.body.dau == "="){
    var kq = req.body.num;
    console.log(kq)
    res.render("calculator", { tt: tinh.tinh(kq) })
  }
});




module.exports = router;
