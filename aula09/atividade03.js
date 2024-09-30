const calculadora = {
    a: 30,
    b: 20,
    c: 80,
    soma: function() {
        console.log(this.a + this.b + this.c);
    }
}

calculadora.soma();