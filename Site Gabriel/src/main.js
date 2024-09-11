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