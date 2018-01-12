module.exports.getAbout = (req, res, next) => {
  res.render('pages/about', { title: 'Express' });
};
