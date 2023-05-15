const db = require('../db');

module.exports = {
    buscarTodos: () =>{
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM carros', (error, results)=>{
                if(error) {rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    buscarUm: (codigo) => {
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM carros WHERE codigo = ?',[codigo], (error, results)=>{
                if(error) { rejeitado(error); return; }
                if(results.lenght > 0){
                    aceito(results[0]);
                }
                else{
                    aceito(false);
                }
                aceito(results);
            });
        });
    }
};

