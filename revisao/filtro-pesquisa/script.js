// Seleciona o campo de pesquisa e a lista de itens
const searchInput = document.getElementById('search');
const itemList = document.getElementById('itemList');

// Adiciona o evento de input para a pesquisa em tempo real
searchInput.addEventListener('input', function() {
    const filter = searchInput.value.toLowerCase(); // Obtém o valor digitado e converte para minúsculo
    const items = itemList.getElementsByTagName('li'); // Pega todos os elementos <li> da lista

    // Percorre todos os itens da lista e mostra/esconde conforme o filtro
    for (let i = 0; i < items.length; i++) {
        const itemText = items[i].textContent || items[i].innerText; // Obtém o texto do item
        if (itemText.toLowerCase().indexOf(filter) > -1) {
            items[i].style.display = ""; // Mostra o item
        } else {
            items[i].style.display = "none"; // Esconde o item
        }
    }
});
