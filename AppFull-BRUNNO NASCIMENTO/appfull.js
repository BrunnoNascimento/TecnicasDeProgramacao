class Pessoa {
    constructor (Nome, Endereco){
        this.nome = Nome
        this.endereco = Endereco
    }

    get Nome() {return this.nome};
    set Nome(nome){this.nome = nome}
    
    get Endereco(){return this.endereco};
    set Endereco(endereco){this.Endereco = endereco}

    toString (){
        return "Nome: " + this.nome + "Endereço: " + this.endereco
    }

}

class Fisica extends Pessoa{
    constructor(Nome, Endereco, cpf, dtNascimento, renda){
        super(Nome, Endereco)
        this.renda = renda
        this.cpf = cpf
        this.dtNascimento = dtNascimento
    }

    get Cpf(){return this.cpf};
    set Cpf(cpf){this.cpf = cpf};

    get DtNascimento(){return this.dtNascimento};
    set DtNascimento (dtNascimento){this.dtNascimento = dtNascimento}

    get Renda(){return this.renda};
    set Renda(renda){this.renda = renda};

    toString(){
        dados = "Nome: " + this.nome + "Endereço: " + this.endereco + "CPF " + this.cpf + "Nascimento: " + this.dtNascimento
        return dados
    }

    verificaMaior(){
        if (this.DtNascimento >= 18){
            return true
        } else {
            return false
        }
    }

    verificaRenda(){
        let recebe;
        if (this.renda <= 2000){
            recebe = this.renda - (this.renda * 0/100)
        } else if (this.renda < 4000){
            recebe = this.renda - (this.renda * 7.5/100)
        } else if (this.renda <6000){
            recebe = this.renda - (this.renda * 15/100)
        } else if (this.renda < 7500){
            recebe = this.renda - (this.renda * 22.5/100)
        } else {
            recebe = this.renda - (this.renda * 27/100)
        } return recebe
    }

}

class Juridica extends Pessoa{
    constructor (Nome, Endereco, cnpj, razaoSocial, renda){
        super(Nome, Endereco)
        this.cnpj = cnpj
        this.razaoSocial = razaoSocial
        this.renda = renda
    }

    get Cnpj(){return this.cnpj};
    set Cnpj (cnpj){this.cnpj = cnpj};

    get RazaoSocial(){return this.razaoSocial};
    set RazaoSocial(razaoSocial){this.razaoSocial = razaoSocial};

    get Renda(){return this.renda};
    set Renda(renda){this.renda = renda};

    toString(){
        return "Nome: " + this.nome + "\nEndereço: " + this.endereco + "\nCnpj: " + this.Cnpj + "\nRazao Social: " + this.RazaoSocial + "\nRenda: " + this.Renda
    
    }

    verificarCnpj(){
        if(this.cnpj.length == 14){
            return true
        } else {
            return false
        }
    }

   DescontoRenda(){
        let valor;
        if (this.renda <= 3000){
            valor = this.renda - (this.renda * 0.003)
        }
        else if(this.renda >= 3000.01 && this.renda <=6000){

            valor = this.renda - (this.renda * 0.007)
        }
        else{

            valor = this.renda - (this.renda * 0.15)
        }
        return valor

    }
}

var objeto = new Fisica ("Brunnão", "Guarulhos", "724.566.358.90", 27, 4000)
console.log(objeto)
console.log("Maior de idade: " + objeto.verificaMaior())
console.log("A renda descontada é :" + objeto.verificaRenda())



var objetoii = new Juridica ("Brunnão", "Guarulhos", "72456635890", "01062000", 4000)

console.log(objetoii.toString())
console.log("Seu CNPJ é: " + objetoii.verificarCnpj())
console.log("A renda descontada é :" + objetoii.DescontoRenda())
