// Importando modelos
const Film = require('../model/film.js')

// Tratamento de Requisição DELETE
async function deleteFilm(req,res){
  // Procura e Deletando Filme por ID
  const film = await Film.findByIdAndDelete(req.params.id)
  return res.send(film)
}

module.exports = deleteFilm;