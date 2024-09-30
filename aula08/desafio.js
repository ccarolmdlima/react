let notas = [8, 6, 10, 9];
let soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

let media = soma/notas.length;
console.log("A média é " + media);