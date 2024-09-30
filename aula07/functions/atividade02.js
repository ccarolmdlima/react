function converterTemperatura(temperatura, unidadeOrigem) {
    if (unidadeOrigem === "C") {
        console.log((temperatura * (9/5)) + 32);
    } else if (unidadeOrigem === "F") {
        console.log((temperatura - 32) * (5/9));
    } else {
        console.log("unidade inválida");
    }
}

converterTemperatura(100, "F");