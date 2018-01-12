module.exports.getBlog = (req, res, next) => {
  res.render('pages/blog', { title: 'Express' });
};
