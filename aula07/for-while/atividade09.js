let numero = 7;
numero = parseInt(numero);
let ehPrimo = true;
let i = 2;

if (numero < 2) {
    ehPrimo = false;
} else {
    while (i <= Math.sqrt(numero)) {
        if (numero % i === 0) {
            ehPrimo = false;
            break;
        }
        i++;
    }
}

console.log(ehPrimo);