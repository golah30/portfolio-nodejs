const nodemailer = require('nodemailer');
const config = require('../config.json');
const http = require('request');
const crypto = require('crypto');
const formidable = require('formidable');
const fs = require('fs');
const path = require('path');

module.exports.getWorks = (req, res, next) => {
  res.render('pages/works', { title: 'Express' });
};

module.exports.sendEmail = (req, res) => {
  //требуем наличия имени, обратной почты и текста
  if (!req.body.name || !req.body.mail || !req.body.text) {
    //если что-либо не указано - сообщаем об этом
    return res.status(500).json({ message: 'Все поля нужно заполнить' });
  }
  //инициализируем модуль для отправки писем и указываем данные из конфига
  let transporter = nodemailer.createTransport(config.mail.smtp);
  const mailOptions = {
    from: config.mail.from,
    to: config.mail.to,
    subject: config.mail.subject,
    text: req.body.text + `\n Отправлено с: <${req.body.mail}>`
  };

  //отправляем почту
  transporter.sendMail(mailOptions, function(error, info) {
    //если есть ошибки при отправке - сообщаем об этом
    if (error) {
      console.log(error);
      return res.status(501).json({
        message: 'При отправке письма произошла ошибка:' + error.message
      });
    }
    res.status(200).json({ message: 'Сообщение отправлено' });
  });
};
