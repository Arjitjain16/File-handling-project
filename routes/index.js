var express = require('express');
var router = express.Router();
var  fs = require('fs')
var path = require('path')

const globalpath = path.join(__dirname , "../" , "public" , "uploads")

/* GET home page. */
router.get('/', function(req, res, next) {
  const files = fs.readdirSync(globalpath)
  res.render('index', {files : files , fileread : ""});
});


// reading fils and directoy
router.get('/file/:filename', function(req, res, next) {
  const fileread = fs.readFileSync(path.join(globalpath, req.params.filename),"utf-8")

  const files = fs.readdirSync(globalpath)
  res.render('index', {files : files , fileread : fileread})
});


// writing files 
router.post('/createfile', function(req,res,next){
  // const filename = req.body.filename
  const {filename} = req.body
  fs.writeFileSync(path.join( globalpath , filename),"")

  res.redirect(`/file/${filename}`)
})

// deleting files and dir
router.get('/delete/:filename', function(req, res, next) {
  fs.unlinkSync(path.join(globalpath, req.params.filename))
  res.redirect("/")
});



module.exports = router;
