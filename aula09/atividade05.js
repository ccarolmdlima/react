class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
        console.log(this.saldo);
    }

    sacar(valor) {
        if (valor > this.saldo) {
            console.log("Valor insuficiente");
        } else {
            this.saldo -= valor;
            console.log(this.saldo);
        }
    }
}

const minhaConta = new ContaBancaria("Carol", 1000);

minhaConta.depositar(500);
minhaConta.sacar(200);
minhaConta.sacar(1500); 