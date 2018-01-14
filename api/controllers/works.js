const mongoose = require('mongoose');

module.exports.getWorks = (req, res) => {
  const Work = mongoose.model('work');
  Work.find().then(items => {
    res.status(200).json({ articles: items });
  });
};

module.exports.createWork = (req, res) => {
  const Model = mongoose.model('work');
  console.log(111);
  let form = new formidable.IncomingForm();
  let upload = '../../public/img/works';

  form.uploadDir = upload;
  form.parse(req, function(err, fields, files) {
    if (err) {
      return res.status(400).json({ message: 'Неудалось загрузить картинку' });
    }
    if (!fields.tech) {
      fs.unlink(files.file.path);
      return res.status(400).json({ message: 'Не указаны технологии!' });
    }
    if (!fields.title) {
      fs.unlink(files.file.path);
      return res.status(400).json({ message: 'Не указано название!' });
    }
    let fileName = path.join(
      upload,
      crypto.randomBytes(20).toString('hex') + '.png'
    );
    fs.rename(files.file.path, fileName, function(err) {
      if (err) {
        console.log(err);
        fs.unlink(fileName);
        fs.rename(files.file.path, fileName);
      }
      let item = new Model({
        title: fields.title,
        tech: fields.tech,
        link: '',
        img: files.file.path
      });
      item
        .save()
        .then(item => {
          return res.status(201).json({ message: 'Запись успешно добавлена' });
        })
        .catch(err => {
          res.status(400).json({
            message: `При добавление записи произошла ошибка:  + ${err.message}`
          });
        });
    });
  });
};

module.exports.saveImage = (req, res, next) => {
  console.log(111);
};
