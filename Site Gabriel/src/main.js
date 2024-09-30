var nomes = [
    'GABRIEL LEITE TECCO', 'BIEL', 'GABRIEL, O LEITE TECCO', 'LEITE', 'TECCO', 'EH O TECCAS', 'TECCAO',
    'GABS', 'GABRIEL, O GABRIEL', 'OCCET ETIEL LEIRBAG', 'ガブリエル', 'Senhor Gabriel',
    "Gabi", "Biel", "Tecco", "Gab", "Gabe", 
    "Gabs", "Gabi Leite", "Gabrielito", "Bielzinho", 
    "Leite", "Gabz", "Teco", "Gabe Leite", 
    "Gabriel Tecco", "Tequinho", "Gaba", "Gabito", 
    "Biel Leite", "Gabzito", "Gabi Tecco", 
    "Leite Tecco", "Gabezinho", "Gabi Tequinho", 
    "Gabo", "Gabe G", "Gabriel L.", "Biel T.", 
    "Gabzito Leite", "Tecco G.", "Gabi T.", 
    "Gabe Leite Tecco", "Biel G.", "Tecco Leite", 
    "Gabrielito Leite", "Biel Tecco", "Gab Leite", 
    "Gabs Tecco", "Gabz Leite", "Gabi G.", 
    "Gab Tecco", "Teco Leite", "Gabriel Tequinho", 
    "Gabi L.", "Biel G.", "Gabe T.", 
    "Gabz Leite Tecco", "Tecco B.", "Gabrielito T."
]

var fonts = [
    "Arial", "Verdana", "Helvetica", "Times New Roman", 
    "Georgia", "Courier New", "Comic Sans MS", "Trebuchet MS", 
    "Impact", "Tahoma", "Lucida Console", "Palatino Linotype", 
    "Book Antiqua", "Arial Black", "Garamond", 
    "Franklin Gothic Medium", "Century Gothic", "Baskerville", 
    "Candara", "Segoe UI", "Calibri", "Cambria", 
    "Optima", "Gill Sans", "Myriad Pro", "Avenir", 
    "Brush Script MT", "Helvetica Neue", "Futura", 
    "Monaco", "Menlo", "DejaVu Sans", "Liberation Sans", 
    "Tahoma", "Georgia", "Trebuchet", "Didot", 
    "American Typewriter", "Rockwell", "Cooper Black", 
    "Courier", "Tahoma", "Arial Narrow", 
    "Comic Sans", "Optima", "Palatino", 
    "Arial Rounded MT Bold", "Segoe Print", "Miriam Libre"
]

var cores = [
    "#FFB3BA", "#FFDFBA", "#FFFABA", "#BAFFC9", "#BAE1FF", "#FFD1FF", "#FFABAB", "#FFEC40", "#C4E538",
    "#38B6E6", "#FF6F61", "#F5B041", "#F7CAC9", "#D5AAFF", "#A2DFF7", "#FF8A5B", "#FFB74D", "#B9FBC0",
    "#FF9A8B", "#FFE156", "#FF6F91"
]

function sortearTitulo() {
    let num_nome = Math.floor(Math.random()*(nomes.length - 0) + 0)
    let num_font = Math.floor(Math.random()*(fonts.length - 0) + 0)
    let num_cor = Math.floor(Math.random()*(cores.length - 0) + 0)
    let titulo = document.getElementById('titulo')
    if (num_nome<= nomes.length){
        titulo.innerHTML = nomes[num_nome]
    }
    titulo.style.fontFamily = fonts[num_font]
    titulo.style.color = cores[num_cor]
}

function menu(){
    var menuDropdown = document.getElementsByClassName('conteudo-menu')
    var i 
    for (i = 0; i < menuDropdown.length; i++) {
        var menuAberto = menuDropdown[i]
        if (menuAberto.classList.contains('show') ){
            menuAberto.classList.remove('show')
        }else{
            menuAberto.classList.add('show')
        }
    }
}

