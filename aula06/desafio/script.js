const button = document.getElementById("mudar-a-cor");

button.addEventListener('click', function() {
    const curColor = document.body.style.backgroundColor;

    document.body.style.backgroundColor = curColor === 'purple' ? 'white' : 'purple'; //forma compacta de if else
    //se a cor atual for roxa, muda para branco e se a cor atual estiver branca muda para roxa
});