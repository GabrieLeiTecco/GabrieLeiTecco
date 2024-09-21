var nomes = [
    'GABRIEL LEITE TECCO', 'BIEL', 'GABRIEL, O LEITE TECCO', 'LEITE', 'TECCO', 'EH O TECCAS', 'TECCAO',
    'GABS', 'GABRIEL, O GABRIEL', 'OCCET ETIEL LEIRBAG', 'ガブリエル'
]

function recarregar() {
    window.location.reload(true)
}

window.onload = sortearTitulo()

function sortearTitulo() {
    let num = Math.floor(Math.random()*(75 - 0) + 0)
    if (num<= nomes.length){
        let titulo = document.getElementById('titulo').innerHTML = nomes[num]
    }
}

function opcoesMenu() {
    document.getElementById('menu').classList.toggle('show')
}

window.onclick = function (){
    if(!event.target.matches('.btn-menu')){
        var menuDropdown = document.getElementsByClassName('conteudo-menu')
        var i 
        for (i = 0; i < menuDropdown.length; i++) {
            var menuAberto = menuDropdown[i]
            if (menuAberto.classList.contains('show') ){
                menuAberto.classList.remove('show')
            }
        }
    }
}
