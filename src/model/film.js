const mongoose = require('mongoose')

// Modelo do objeto de Filme que será utilizado no banco
const Film = mongoose.model('Film', {
  title:        String,
  description:  String,
  image_url:    String,
  trailer_url:  String
});

module.exports = Film;