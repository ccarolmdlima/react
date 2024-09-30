function f(array, value) {
    let n = 0;
    for(i = 0; i < array.length; i++){
        if(array[i] == value) { //array[i]: acessa o elemento do array na posição i. Se i for 0, acessa o primeiro elemento
            n++ //se a condiçãofor verdadeira (ou seja, se o valor no array for igual ao que estamos procurando), essa linha incrementa a variável n em 1 (n vai contar quantas vezes encontramos o valor)
        } 
    }
    return n;
}

let array = [1, 2, 3, 4, 2, 2, 5];
let valor = 2;

let resultado = f(array, valor);
console.log(resultado);