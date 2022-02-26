module.exports = function(app) {
    var ContatoController = {
     //Actions
     index: function(req, res) {
      var usuario = req.session.usuario
      , contatos = usuario.contatos
    //, params = {usuario: usuario}
      , params = {usuario: usuario //Para o armazenamento em memória a sessão de usuário
                , contatos: contatos}
      res.render('contatos/index', params)
     },
     create: function(req, res) {
        var contato = req.body.contato
        , usuario = req.session.usuario //Utilizaremos um simples array para persistir os contatos do usuário
        usuario.contatos.push(contato)
        res.redirect('/contatos')
        },
     show: function(req, res) {
        var id = req.params.id
        , contato = req.session.usuario.contatos[id]
        , params = {contato: contato, id: id}
        res.render('contatos/show', params)
        },
     edit: function(req, res) {
        var id = req.params.id
        , usuario = req.session.usuario
        , contato = usuario.contatos[id]
        , params = {usuario: usuario
        , contato: contato
        , id: id}
        res.render('contatos/edit', params)
        },
     update: function(req, res) {
        var contato = req.body.contato
        , usuario = req.session.usuario
        usuario.contatos[req.params.id] = contato //para atualizar no array o contato
        res.redirect('/contatos')
        },
     destroy: function(req, res) {
        var usuario = req.session.usuario
        , id = req.params.id
        usuario.contatos.splice(id, 1) //exclui o contato do arra
        res.redirect('/contatos')
        }
    }
    // fim do controller...
    return ContatoController
}
/*
Ele basicamente vai pegar os dados de um usuário logado através da variável req.session.usuario 
e vai enviá-los para view através da função:
res.render()
*/