// Importando pacotes
const express = require('express')
const mongoose = require('mongoose')

// Importando Modelos
const Film = require('./src/model/film.js')

// Importando Funções de controle de Requisição
const getFilm = require('./src/controller/getFilm.js')
const postFilm = require('./src/controller/postFilm.js')
const deleteFilm = require('./src/controller/deleteFilm.js')
const putFilm = require('./src/controller/putFilm.js')

// Iniciando Variável da Aplicação
const app = express();

// Formatando resposta para JSON e adicionando Porta da aplicação
app.use(express.json());
const port = 3000;

// Tratamento de requisição GET
app.get('/', getFilm)

// Tratamento de requisição POST
app.post('/', postFilm)

// Tratamento de requisição DELETE
app.delete('/:id', deleteFilm)

// Tratamento de requisição PUT
app.put('/:id',putFilm)

// Executa aplicação na porta iniciada
app.listen(port, ()=>{
    // String de Conexão com Banco
    mongoose.connect(`mongodb+srv://rafaelaugustonnovais:9pQlF2hkrjSgzEYl@grupo-novais.xi2iqza.mongodb.net/`)
    
    console.log(`API rodando na porta ${port}`);
})