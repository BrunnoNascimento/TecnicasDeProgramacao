class Conta{
    constructor(){
        this.saldo = 0
    }

    get Saldo(){return this.saldo}
    set Saldo(pSaldo){return this.saldo = pSaldo}

}

class Corrente extends Conta{
    constructor(pLimite){
        super()
        this.limite = pLimite
    }

    get Limite(){return this.limite}
    set Limite(pLimite){return this.limite = pLimite}

}

var obj_corrente = new Corrente(300)
console.group(obj_corrente)


