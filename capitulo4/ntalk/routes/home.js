module.exports = function(app) {
  //actions
  var home = app.controllers.home
  app.get('/', home.index)
  app.post('/entrar', home.login)
  app.get('/sair', home.logout)
  }
/*
GET, os parâmetros são passados no cabeçalho da requisição.
POST, ao contrário do GET, envia os parâmetros no corpo da requisição HTTP.
As requisições do tipo GET são recomendadas para obter dados de um determinado recurso.
Já as requisições POST são mais utilizadas para para enviar informações para serem processadas.
 */