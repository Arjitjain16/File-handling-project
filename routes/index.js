var express = require('express');
var router = express.Router();
var  fs = require('fs')
var path = require('path')

const globalpath = path.join(__dirname , "../" , "public" , "uploads")

/* GET home page. */
router.get('/', function(req, res, next) {
  const filename = fs.readdirSync(globalpath)
  res.render('index', {filename : filename});
});

router.get('/:filename', function(req, res, next) {
  const filename = fs.readdirSync(globalpath)
  res.render('index', {filename : filename});
});

router.post('/createfile', function(req,res,next){
  // const filename = req.body.filename
  const {filename} = req.body
  fs.writeFileSync(path.join( globalpath , filename),"")

  res.redirect(`/${filename}`)
})



module.exports = router;
