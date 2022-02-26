module.exports = function(req, res, next) {  //O next serve para executar a próxima instrução
    if(!req.session.usuario) {
    return res.redirect('/')
    }
    return next()
    }
    /*
    quando criamos uma rota, após informar no primeiro parâmetro a sua string, no segundo parâmetro em
    diante é possível incluir callbacks que são executados de forma ordenada, por exemplo:
    app.get('/', callback1, callback2, callback3)
    */