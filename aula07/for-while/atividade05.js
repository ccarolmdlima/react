let a = 0;
let b = 1;
let proximo;

for (let i = 2; i < 15; i++) {
    proximo = a + b;
    console.log(proximo);
    a = b;
    b = proximo;
}