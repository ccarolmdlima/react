const pessoa = {
    nome: "Garfeld",
    idade: 48,
    profissão: "Degustador de comida",
    apresentar: function() {
        console.log("Sou " + this.nome + " e sou " + this.profissão);
    }
}

pessoa.apresentar();