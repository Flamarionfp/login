//Configurações do sever

const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

//Dados

const dados = {
  email: 'steve@apple.com',
  password: 12345,
  erro: 'E-mail ou Senha inválido!',
  sucesso: 'Login bem sucedido!'
}

//Configurações do body-parser

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Rotas
 
app.post('/login', (req, res) => {
  const _email = req.body.email;
  const _password = req.body.senha;
  console.log(_email)
  console.log(_password)
  if(_email != dados.email || _password != dados.password) {
    //console.log('Entrou no laço dos dados inválidos')
    res.send({ msg: dados.erro, logado: 0 });
  }else{
    //console.log('Entrou no laço do login bem sucedido')
    res.send({msg: dados.sucesso, logado: 1})
  }
  
});

//Startando o Servidor

app.listen(port, () => console.log(`Listening on port ${port}`));
