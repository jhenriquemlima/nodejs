module.exports = function(app) {
    var ContatoController = {
    //Action
    index: function(req, res) {
    var usuario = req.session.usuario
    , params = {usuario: usuario}
    res.render('contatos/index', params)
    }
    }
    return ContatoController;
    }
/*
Ele basicamente vai pegar os dados de um usuário logado através da variável req.session.usuario 
e vai enviá-los para view através da função:
res.render()
*/