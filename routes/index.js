var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'Express' });
});
router.get('/index', function(req, res, next) {
  res.render('pages/index', { title: 'Express' });
});
router.get('/home', function(req, res, next) {
  res.render('pages/index', { title: 'Express' });
});
router.get('/index.html', function(req, res, next) {
  res.render('pages/index', { title: 'Express' });
});
router.get('/home.html', function(req, res, next) {
  res.render('pages/index', { title: 'Express' });
});
//works page
router.get('/works.html', function(req, res, next) {
  res.render('pages/works', { title: 'Express' });
});
router.get('/works', function(req, res, next) {
  res.render('pages/works', { title: 'Express' });
});

//about page
router.get('/about.html', function(req, res, next) {
  res.render('pages/about', { title: 'Express' });
});
router.get('/about', function(req, res, next) {
  res.render('pages/about', { title: 'Express' });
});

//blog page
router.get('/blog.html', function(req, res, next) {
  res.render('pages/blog', { title: 'Express' });
});
router.get('/blog', function(req, res, next) {
  res.render('pages/blog', { title: 'Express' });
});

module.exports = router;
