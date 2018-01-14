var express = require('express');
var router = express.Router();

const ctrlHome = require('../controllers/home');
const ctrlBlog = require('../controllers/blog');
const ctrlWorks = require('../controllers/works');
const ctrlAbout = require('../controllers/about');

/* GET home page. */
router.get('/', ctrlHome.getIndex);
router.get('/index', ctrlHome.getIndex);
router.get('/home', ctrlHome.getIndex);
router.get('/index.html', ctrlHome.getIndex);
router.get('/home.html', ctrlHome.getIndex);
//works page
router.get('/works.html', ctrlWorks.getWorks);
router.get('/works', ctrlWorks.getWorks);
router.post('/works/email', ctrlWorks.sendEmail);
//about page
router.get('/about.html', ctrlAbout.getAbout);
router.get('/about', ctrlAbout.getAbout);

//blog page
router.get('/blog.html', ctrlBlog.getBlog);
router.get('/blog', ctrlBlog.getBlog);

module.exports = router;
