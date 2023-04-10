const express = require('express')
const router = require('./routes/index')

//rotas (quando o servidor for acessado, para onde ele vai?)
const router = express.Router();
router.get('/', (req, res) => {
    res.send("Olá Mundo 2023");
})

router.get('/contato', (req, res) => {
    res.send("Olá contato");
})

router.get('/', (req, res) => {
    res.send('Olá ' + req.query.nome + ' , você tem ' + req.query.idade + ' anos de idade.');
})

router.get('/posts/.id', (req, res) => {
    let id = req.params.id;
    res.send('ID do post: ' + id)
})

router.get('/posts/.slug', (req, res) => {
    let slug = req.params.slug;
    res.send('Slug do post: ' + slug)
})

module.exports = router