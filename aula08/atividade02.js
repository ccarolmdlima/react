let num = [1, 2, 3, 4, 5];
let maior = num[0];

for (let i = 0; i < num.length; i++) {
    if (num[i] > maior) {
        maior = num[i];
    }
}

console.log(maior);