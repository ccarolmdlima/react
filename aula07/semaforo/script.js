let circles = document.querySelectorAll(".circle"), //a variável circles armazena todos os elementos da class circle (os três círculos do semáforo), o querySelectorAll seleciona todos eles e os coloca em uma lista
light = 0; //essa variável é usada para controlar a luz que está acesa no momento

setInterval(() => { //a função setInterval executa a função changeLight de forma repetida a cada 1 segundo
    changeLight();
}, 1000);

function changeLight(){
    circles[light].classList = "circle"; //vai selecionar o círculo atual com base no valor de light, acessa a linha de classes do círculo e substituí todas as classes atuais desse círculo deixando apenas a class "circle", isso apaga a luz
    light++; //passa para a próxima luz

    if (light > 2) { //o semaforo tem so 3 cores (indice 0 1 2), quando light for maior que 2 ele volta pra 0
        light = 0;
    }

    const selectLight = circles[light]; //seleciona o próximo círculo com base no valor de light
    selectLight.classList.add(selectLight.getAttribute("color")) //adiciona a classe correspondente ao círculo para ativar a cor e o brilho, fazendo com que o semáforo funcione corretamente
                            //pega o valor do atributo color desse círculo (col1, col2 ou col3)
}