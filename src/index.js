// Importando pacotes
const express = require("express");
const mongoose = require("mongoose");

// Iniciando variáveis
const app = express();

// Formatando resposta para JSON
app.use(express.json());

// Iniciando variável para porta que será hospedada a aplicação
const port = 3000;

// const Cat = mongoose.model('Cat', { name: String });
// Modelo do Filme que será buscado no banco de dados
const Film = mongoose.model("Film", {
  title: String,
  description: String,
  image_url: String,
  trailer_url: String,
});

// Tratamento de requisição GET
app.get("/", async (req, res) => {
  // Buscando todos os filmes no banco de dados
  const films = await Film.find();
  return res.send(films);
});

// Tratamento de requisição POST
app.post("/", async (req, res) => {
  // Iniciando um objeto do Tipo Filme para inserir no banco
  const film = new Film({
    title: req.body.title,
    description: req.body.description,
    image_url: req.body.image_url,
    trailer_url: req.body.trailer_url,
  });

  await film.save();
  return res.send(film);
});

// Tratamento de requisição DELETE
app.delete("/:id", async (req, res) => {
  // Procura e Deletando Filme por ID
  const film = await Film.findByIdAndDelete(req.params.id);
  return res.send(film);
});

app.put("/:id", async (res, req) => {
  // Procura e atualiza o dado
  const film = await Film.findAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      description: req.body.description,
      image_url: req.body.image_url,
      trailer_url: req.body.trailer_url,
    },
    {
      new: true,
    },
  );

  return res.send(film);
});

// Aplicação escuta a porta iniciada e roda a aplicação
app.listen(port, () => {
  // String de Conexão com Banco
  mongoose.connect(
    "mongodb+srv://rafaelaugustonnovais:gyqUlIy0Pq8IP9Ps@grupo-novais.xi2iqza.mongodb.net/",
  );
  console.log(`API rodando na porta ${port}`);
});
