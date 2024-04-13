## 1 Estrutura de Pastas
> package.json - JSON com dados sobre o projeto
> src/ - pasta com conteúdo da aplicação
> src/index.js - arquivo principal da aplicação

## 2 Editando Index
> Importando pacotes
>>const express = require('express')
>>const mongoose = require('mongoose')

>Iniciando variáveis
>>const app = express();
>>
>Formatando resposta para JSON 
>>app.use(express.json());
>
>Iniciando variável para porta que será hospedada a aplicação
>>const port = 3000;
>
>Aplicação escuta a porta iniciada e roda a aplicação
>>app.listen(port, ()=>{
>
>>String de Conexão com Banco obtida no [Atlas MongoDB](https://cloud.mongodb.com/)
>>>String de Conexão
>>>
>>>    mongoose.connect('mongodb+srv://rafaelaugustonnovais:5VoSV8aLqTXfldv7@free-cluster.xkizxqe.mongodb.net/?retryWrites=true&w=majority&appName=Free-Cluster')
>>> 
>>>    console.log(`API rodando na porta ${port}`);
>>> 
>>>})
>>>
>>> ## Criando Tratamento de Requisições
>>> 
>>> ## Tratamento de requisição GET
>>>>app.get('/', async(req,res)=>{
>>>> ## Buscando todos os filmes no banco de dados
>>>>  const films = await Film.find();
>>>>  return res.send(films);
>>>>})
>>>
>>> ### Tratamento de requisição POST
>>>>app.post('/',async(req,res)=>{
>>>> #### Iniciando um objeto do Tipo Filme para inserir no banco 
>>>>  const film = new Film({
>>>>    title:        req.body.title,
>>>>    description:  req.body.description,
>>>>    image_url:    req.body.image_url,
>>>>    trailer_url:  req.body.trailer_url
>>>>  }) 
>>>
>>>  await film.save();
>>>  return res.send(film);
>>})
>>>
>>> ## Tratamento de requisição DELETE
>>>>app.delete('/:id', async(req,res)=>{
>>>>  // Procura e Deletando Filme por ID
>>>>  const film = await Film.findByIdAndDelete(req.params.id)
>>>>  return res.send(film)
>>>>})
>>> ## Tratamento de requisição  PUT
>>>>app.put('/:id', async(res,req)=>{
>>>>  // Procura e atualiza o dado
>>>>  const film = await film.findAndUpdate(req.params.id, {
>>>>   title:        req.body.title,
>>>>   description:  req.body.description,
>>>>   image_url:    req.body.image_url,
>>>>   trailer_url:  req.body.trailer_url
>>>> },  
>>>>  {
>>>>    new: true
>>>>  })
>>>>
>>>>  return res.send(film);
>>>>})