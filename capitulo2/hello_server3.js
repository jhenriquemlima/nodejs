
var http = require('http')
//cria o servidor e uma function para atender as requisições
var server = http.createServer(function(request, response){
response.writeHead(200, {"Content-Type": "text/html"});
if(request.url == "/"){ //rota padrão
response.write("<h1>Página principal</h1>");
}else if(request.url == "/bemvindo"){ //rota bem vindo
response.write("<h1>Bem-vindo :)</h1>");
}else{
response.write("<h1>Página não encontrada :(</h1>"); //outra rota
}
response.end();
});
server.listen(3000, function(){ //fica escutando requisições na porta 3000
console.log('Servidor rodando!');
});
