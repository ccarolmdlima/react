let currentPlayer = "X"; // jogador inicial
let gameBoard = ["", "", "", "", "", "", "", "", ""]; // array que representa o tabuleiro
const buttons = document.querySelectorAll(".game button"); // selecionando os botões
const currentPlayerText = document.querySelector(".currentPlayer"); // elemento para mostrar o jogador atual
currentPlayerText.innerHTML = `Vez de: ${currentPlayer}`; // exibindo o jogador inicial

function checkWinner() { //verifica se houve um vencedor
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return gameBoard[a]; // retorna o jogador vencedor (X ou O)
        }
    }

    return gameBoard.includes("") ? null : "Empate"; // verifica se há empate
}

function handleClick(event) { // manipular os cliques nos botões
    const index = event.target.getAttribute("data-i");

    if (gameBoard[index] !== "") { // verifica se a célula já foi preenchida
        return;
    }

    gameBoard[index] = currentPlayer; // atualiza o tabuleiro e o botão clicado
    event.target.innerHTML = currentPlayer;

    const winner = checkWinner(); // verifica se houve um vencedor
    if (winner) {
        currentPlayerText.innerHTML = winner === "Empate" ? "Empate!" : `${winner} venceu!`;
        buttons.forEach(button => button.disabled = true); // desabilita todos os botões após o fim do jogo
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X"; // elterna entre os jogadores
    currentPlayerText.innerHTML = `Vez de: ${currentPlayer}`;
}

buttons.forEach(button => { // adicionando eventos de clique para cada botão
    button.addEventListener("click", handleClick);
});

function resetGame() { // reiniciar o jogo
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    buttons.forEach(button => {
        button.innerHTML = "";
        button.disabled = false;
    });
    currentPlayer = "X";
    currentPlayerText.innerHTML = `Vez de: ${currentPlayer}`;
}
