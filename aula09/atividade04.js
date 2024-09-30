class Retangulo {
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }

    calcularArea() {
        return this.largura * this.altura;
    }
}

const areaRetangulo = new Retangulo(2, 8);

console.log(areaRetangulo.calcularArea());