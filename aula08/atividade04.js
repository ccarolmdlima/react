let num = [1, 2, 3, 4, 5];
let produto = 1;

for (let i = 1; i < num.length; i++) {
    produto *= num[i];
}

console.log(produto);