//fazer a importação do express
const express = require('express')

//rotas (quando o servidor for acessado, para onde ele vai?)
const router = express.Router();
router.get('/', (req, res) => {
    res.send('Olá ' + req.query.nome + ' , você tem ' + req.query.idade + ' anos de idade.');
})

//configurações basicas do aplicativo
const app = express();
app.use('/', router); //foi passado apenas uma rota pois apenas criamos 1

module.exports = app;