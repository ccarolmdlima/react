let num = [1, 2, 3, 4, 5];
let par = [];

for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 == 0) {
        par.push(num[i]);
    }
}

console.log(par);