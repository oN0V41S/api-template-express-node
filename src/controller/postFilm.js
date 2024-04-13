// Importando modelos
const Film = require('../model/film.js')

// Tratamento de requisição POST
async function postFilm(req,res){
  // Iniciando um objeto do Tipo Filme para inserir no banco 
  const film = new Film({
    title:        req.body.title,
    description:  req.body.description,
    image_url:    req.body.image_url,
    trailer_url:  req.body.trailer_url
  }) 

  await film.save();
  return res.send(film);
}

module.exports = postFilm;