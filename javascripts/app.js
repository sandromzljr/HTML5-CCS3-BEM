var botaoAlternador = document.querySelector('.js-botao-chaveador');

botaoAlternador.onclick = function() {
    var menu = document.querySelector('.js-menu');
    menu.classList.toggle('menu--exibindo');
}