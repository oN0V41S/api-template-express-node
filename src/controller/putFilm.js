// Importando modelos
const Film = require('../model/film.js')

// Tratamento de requisição PUT
async function putFilm(res,req){
  // Procura e atualiza o dado
  const film = await Film.findAndUpdate(req.params.id, {
   title:        req.body.title,
   description:  req.body.description,
   image_url:    req.body.image_url,
   trailer_url:  req.body.trailer_url
 },  
  {
    new: true
  })

  return res.send(film);
}

module.exports = putFilm;