function contagem(num) {
    console.log(num);
    if (num < 40) {
        contagem(num + 1);
    }
}

contagem(0);