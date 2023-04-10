const app = require('./app');

require('dotenv').config({ path: 'variaveis.env' }) //para o arquivo de variaveis que criamos

app.set('port', process.env.PORT); //escolher uma porta padrão
const server = app.listen(app.get('port'), () => {
    console.log("Servidor rodando na porta: " + server.address().port);
});