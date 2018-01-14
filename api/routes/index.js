const express = require('express');
const router = express.Router();

const ctrlWorks = require('../controllers/works');

// router.get('/blog', ctrlBlog.getArticles);
// router.post('/blog', ctrlBlog.createArticle);
// router.put('/blog/:id', ctrlBlog.editArticle);
// router.delete('/blog/:id', ctrlBlog.deleteArticle);

router.post('/works', ctrlWorks.createWork);
module.exports = router;
