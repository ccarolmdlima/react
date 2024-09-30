// Função que verifica se um número é primo
function ehPrimo(num) {
    if (num < 2) return false; // Números menores que 2 não são primos
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // Se for divisível por i, não é primo
    }
    return true;
}

// Função para filtrar os números primos em um array
function filtrarPrimos(array) {
    return array.filter(ehPrimo);
}

// Exemplo de uso
const numeros = [3, 8, 5, 10, 7, 15, 2, 11];
const primos = filtrarPrimos(numeros);

console.log(primos); // [3, 5, 7, 2, 11]
