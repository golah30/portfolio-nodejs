'use strict';

const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  workSchema = new Schema({
    title: {
      type: String,
      required: [true, 'Укажите название работы']
    },
    tech: {
      type: String,
      required: [true, 'Укажите описание работы']
    },
    link: {
      type: String,
      required: [true, 'Укажите ссылку на работу']
    },
    img: {
      type: String,
      required: [true, 'Укажите ссылку на картинку']
    }
  });

//просим mongoose сохранить модель для ее дальнейшего использования
mongoose.model('work', workSchema);
