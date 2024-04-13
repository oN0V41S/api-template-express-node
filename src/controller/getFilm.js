// Importando modelos
const Film = require('../model/film.js')

// Tratamento de requisição GET
async function getFilm(req,res){
  // Buscando todos os filmes no banco de dados
  const films = await Film.find();
  return res.send(films);
}

module.exports = getFilm;