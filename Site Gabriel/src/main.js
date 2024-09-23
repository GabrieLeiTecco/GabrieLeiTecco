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
    "#FF0000", "#008000", "#0000FF", "#FFFF00", 
    "#00FFFF", "#FF00FF", "#000000", "#FFFFFF", 
    "#808080", "#FFA500", "#800080", "#A52A2A", 
    "#FFC0CB", "#00FF00", "#808000", "#000080", 
    "#008080", "#800000", "#C0C0C0", "#FFD700", 
    "#FF7F50", "#40E0D0", "#4B0082", "#EE82EE", 
    "#FFDAB9", "#E6E6FA", "#FA8072", "#F0E68C", 
    "#D2691E", "#708090", "#6A5ACD", "#3CB371", 
    "#4169E1", "#9932CC", "#B22222", "#EEE8AA", 
    "#F5DEB3", "#9370DB", "#E9967A", "#20B2AA", 
    "#A0522D", "#F0FFF0", "#F08080", "#DA70D6", 
    "#B8860B", "#FF6347", "#FFE4E1", "#87CEFA", 
    "#C71585", "#00FF7F", "#6495ED", "#FFA07A"
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
