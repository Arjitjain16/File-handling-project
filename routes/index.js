var express = require('express');
var router = express.Router();
var  fs = require('fs')
var path = require('path')

const globalpath = path.join(__dirname , "../" , "public" , "uploads")

/* GET home page. */
router.get('/', function(req, res, next) {
  const filename = fs.readdirSync(globalpath)
  res.render('index', {filename : filename , fileread : ""});
});


router.get('/file/:filename', function(req, res, next) {
  const fileread = fs.readFileSync(path.join(globalpath, req.params.filename), "utf8")

  const files = fs.readdirSync(globalpath)
  res.render('index', {files : files , fileread : fileread})
});

// router.get('/:filename', function(req, res, next) {
//   const fileread = fs.readFileSync(path.join(globalpath,req.params.filename), "utf-8")
//   const filename = fs.readdirSync(globalpath)
//   res.render('index', {filename : filename , fileread : fileread});
// });

router.post('/createfile', function(req,res,next){
  // const filename = req.body.filename
  const {filename} = req.body
  fs.writeFileSync(path.join( globalpath , filename),"")

  res.redirect(`/${filename}`)
})



module.exports = router;
