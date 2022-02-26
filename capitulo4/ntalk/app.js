var express = require('express')
, load = require('express-load') //para caregar os módulos sem utilizar vários require
, app = express()
// ...stack de configurações do servidor...
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.use(express.cookieParser('ntalk')) //Para login
app.use(express.session()) //utilizado pelo express.cookieParser() para codiicar e ou decodiicar o SessionID
app.use(express.json()) //responsáveis por criar objetos JSON vindos de um formulário HTML
app.use(express.urlencoded()) //responsáveis por criar objetos JSON vindos de um formulário HTML
app.use(express.methodOverride()) // permite utilizar um mesmo path entre os métodos do HTTP, fazendo uma sobrescrita de métodos
app.use(app.router) //gerencia as rotas da aplicação, permitindo a implementação de rotas para páginas de erros e rotas para arquivos estáticos, sem conflitar com as rotas da aplicação.
app.use(express.static(__dirname + '/public'))
//Adicionando recursos, seguir essa ordem: models,controller e routes
load('models')  
  .then('controllers')
  .then('routes')
  .into(app)
//Escutand na porta 3000
app.listen(3000, function(){
console.log("Ntalk no ar.")
})
