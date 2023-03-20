class Livro{
    //método construtor, é um método evocado ao gerar objeto da classe
    constructor(pNome, pPreco){
        this.nome = pNome
        this.preco = pPreco
    }

    get Nome(){return this.nome}
    set Nome(pNome){this.nome = pNome}

    get Preco(){return this.preco}
    set Preco(pPreco){this.preco = pPreco}
}

var obj_livro1 = new Livro("Use a cabeça Java", 200)
//console.log("Nome do Livro: " + obj_livro1.nome)
console.log("O Livro: " + obj_livro1.nome + " custa " + obj_livro1.preco + " reais ")