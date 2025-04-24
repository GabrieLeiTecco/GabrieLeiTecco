// ======== TOPIC IDS ========
const topics = [
    'about_me', 'exp_pro', 'exp_acad'
];

// ======== TITLE NAMES ========
const titleNames = [
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
];

// ======== FONTS & COLORS ========
const fonts = [
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
];

const colors = [
    "#FFB3BA", "#FFDFBA", "#FFFABA", "#BAFFC9", "#BAE1FF", "#FFD1FF", "#FFABAB", "#FFEC40", "#C4E538",
    "#38B6E6", "#FF6F61", "#F5B041", "#F7CAC9", "#D5AAFF", "#A2DFF7", "#FF8A5B", "#FFB74D", "#B9FBC0",
    "#FF9A8B", "#FFE156", "#FF6F91"
];

// ======== RANDOM TITLE GENERATOR ========
function drawRandomTitle() {
    const titleElement = document.getElementById('titulo');
    const nameIndex = Math.floor(Math.random() * titleNames.length);
    const fontIndex = Math.floor(Math.random() * fonts.length);
    const colorIndex = Math.floor(Math.random() * colors.length);

    titleElement.innerHTML = titleNames[nameIndex];
    titleElement.style.fontFamily = fonts[fontIndex];
    titleElement.style.color = colors[colorIndex];
}

// ======== MENU TOGGLE FUNCTION ========
function toggleMenu() {
    const menuElements = document.getElementsByClassName('conteudo-menu');
    
    for (let i = 0; i < menuElements.length; i++) {
        const menu = menuElements[i];
        menu.classList.toggle('show');
    }
}

// ======== SHOW/HIDE TOPICS FUNCTION ========
function toggleTopic(index) {
    const selectedTopic = document.getElementById(topics[index]);

    for (let i = 0; i < topics.length; i++) {
        const topic = document.getElementById(topics[i]);

        if (topics[i] === topics[index]) {
            topic.style.display = (topic.style.display === 'block') ? 'none' : 'block';
        } else {
            topic.style.display = 'none';
        }
    }
}


// ======== CHANGE LANGUAGE ========
let currentLanguage = 'pt'; // default language
const translations = {
    pt: {
        about: "Sobre mim",
        professional: "Experiências Profissionais",
        academic: "Experiências Acadêmicas",
        language: "Idioma",
        about_title: "SOBRE MIM",
        about_text: "Sou uma pessoa comunicativa, com facilidade para trabalhar em equipe e grande apreço por aprender através da troca de experiências. Cresci em um ambiente que valorizava o estudo e a dedicação, inspirado pelo exemplo dos meus irmãos e pelo esforço dos meus pais — valores que carrego comigo até hoje. Tenho grande interesse por novas tecnologias e inovação, especialmente nas áreas de programação e inteligência artificial. Estou sempre em busca de aprendizado e novas alternativas para construir o que eu quero, nada melhor que inovar para melhorar!",
        job_title: "CARTAZ FACIL",
        job_text: "Minha primeira experiência profissional que tem sido fundamental para meu crescimento. Durante esse período, adquiri conhecimentos que vão desde o atendimento ao cliente até processos empresariais como vendas, marketing, operações e gestão de estoque. Essa oportunidade tem me permitido entender melhor o funcionamento do mercado de trabalho e, principalmente, como posso contribuir de forma significativa. Além disso, desenvolvi resiliência e uma nova perspectiva sobre desafios: aprendi que com paciência e prática, qualquer habilidade pode ser aprimorada, transformando dificuldades em oportunidades de crescimento profissional.",
        school_title: "ETEC",
        school_text: "Sou formado em Desenvolvimento de Sistemas pela ETEC Zona Leste, onde desenvolvi habilidades em criação de projetos e solução de problemas por meio da lógica de programação. Meu principal interesse sempre foi o desenvolvimento de sites e softwares, embora tenha adquirido uma base sólida também em hardware e redes. Durante o curso, obtive experiência com diversas tecnologias, incluindo Java, JavaScript, Python, SQL, PHP, HTML e CSS para desenvolvimento de sistemas, além de C, C++, Arduino e conceitos de redes em Linux e servidores. Sou grato à ETEC por ter proporcionado uma formação abrangente que ampliou minhas oportunidades no mercado de tecnologia.",
        college_title: "DESCOMPLICA",
        college_text: "Sou formado em Sistemas para Internet na faculdade Descomplica, seguindo minha paixão pela programação de sites, que começou aos 15 anos. Escolhi esse curso por meu interesse em HTML, JavaScript e CSS, e ele tem sido fundamental para aprofundar meus conhecimentos. Além do aprimoramento técnico, estou desenvolvendo habilidades essenciais em criação de projetos, organização de equipes e utilização de frameworks para desenvolvimento web."
    },
    en: {
        about: "About me",
        professional: "Professional Experiences",
        academic: "Academic Experiences",
        language: "Language",
        about_title: "ABOUT ME",
        about_text: "I am a communicative person, with ease in teamwork and a great appreciation for learning through the exchange of experiences. I grew up in an environment that valued study and dedication, inspired by the example of my siblings and the effort of my parents — values that I carry with me to this day. I have a great interest in new technologies and innovation, especially in the areas of programming and artificial intelligence. I am always looking for knowledge and new alternatives to build what I want; nothing better than innovating to improve!",
        job_title: "CARTAZ FACIL",
        job_text: "My first professional experience has been fundamental for my growth. During this period, I acquired knowledge that ranges from customer service to business processes such as sales, marketing, operations, and inventory management. This opportunity has allowed me to better understand how the job market works and, mainly, how I can contribute significantly. In addition, I developed resilience and a new perspective on challenges: I learned that with patience and practice, any skill can be improved, turning difficulties into opportunities for professional growth.",
        school_title: "ETEC",
        school_text: "I graduated in Desenvolvimento de Sistemas from ETEC Zona Leste, where I developed skills in project creation and problem-solving through programming logic. My main interest has always been the development of websites and software, although I also acquired a solid foundation in hardware and networks. During the course, I gained experience with various technologies, including Java, JavaScript, Python, SQL, PHP, HTML, and CSS for system development, as well as C, C++, Arduino, and concepts of networks in Linux and servers. I am grateful to ETEC for providing a comprehensive education that expanded my opportunities in the technology market.",
        college_title: "DESCOMPLICA",
        college_text: "I graduated in Sistemas para Internet from Faculdade Descomplica, following my passion for website programming, which started at the age of 15. I chose this course because of my interest in HTML, JavaScript, and CSS, and it has been fundamental in deepening my knowledge. In addition to technical improvement, I am developing essential skills in project creation, team organization, and the use of frameworks for web development."
    },
    fr: {
        about: "À propos de moi",
        professional: "Expériences professionnelles",
        academic: "Expériences académiques",
        language: "Langue",
        about_title: "À PROPOS DE MOI",
        about_text: "Je suis une personne communicative, avec une facilité à travailler en équipe et un grand goût pour apprendre à travers l'échange d'expériences. J'ai grandi dans un environnement qui valorisait l'étude et la dévotion, inspiré par l'exemple de mes frères et par l'effort de mes parents - des valeurs que je porte avec moi jusqu'à aujourd'hui. J'ai un grand intérêt pour les nouvelles technologies et l'innovation, en particulier dans les domaines de la programmation et de l'intelligence artificielle. Je suis toujours à la recherche d'apprentissage et de nouvelles alternatives pour construire ce que je veux, rien de mieux que d'innover pour s'améliorer !",
        job_title: "CARTAZ FACIL",
        job_text: "Ma première expérience professionnelle a été fondamentale pour ma croissance. Pendant cette période, j'ai acquis des connaissances allant du service client aux processus commerciaux tels que les ventes, le marketing, les opérations et la gestion des stocks. Cette opportunité m'a permis de mieux comprendre le fonctionnement du marché du travail et, surtout, comment je peux contribuer de manière significative. De plus, j'ai développé de la résilience et une nouvelle perspective sur les défis : j'ai appris qu'avec patience et pratique, n'importe quelle compétence peut être améliorée, transformant les difficultés en opportunités de croissance professionnelle.",
        school_title: "ETEC",
        school_text: "Je suis diplômé en Desenvolvimento de Sistemas à l'ETEC Zona Leste, où j'ai développé des compétences dans la création de projets et la résolution de problèmes grâce à la logique de programmation. Mon principal intérêt a toujours été le développement de sites Web et de logiciels, bien que j'aie également acquis une base solide en matériel et en réseaux. Au cours du cursus, j'ai acquis de l'expérience avec diverses technologies, notamment Java, JavaScript, Python, SQL, PHP, HTML et CSS pour le développement de systèmes, ainsi que C, C++, Arduino et des concepts de réseaux sous Linux et serveurs. Je suis reconnaissant envers l'ETEC d'avoir fourni une formation complète qui a élargi mes opportunités sur le marché technologique.",
        college_title: "DESCOMPLICA",
        college_text: "Je suis diplômé en Sistemas para Internet à la faculté Descomplica, suivant ma passion pour la programmation de sites, qui a commencé à l'âge de 15 ans. J'ai choisi ce cours en raison de mon intérêt pour HTML, JavaScript et CSS, et il a été fondamental pour approfondir mes connaissances. En plus de l'amélioration technique, je développe des compétences essentielles dans la création de projets, l'organisation d'équipes et l'utilisation de frameworks pour le développement web."
    }
};
function switchLanguage() {
    if (currentLanguage === 'pt') {
        currentLanguage = 'en';
    } else if (currentLanguage === 'en') {
        currentLanguage = 'fr';
    } else if (currentLanguage === 'fr') {
        currentLanguage = 'pt';
    } else {
        currentLanguage = 'pt';
    }
    document.querySelectorAll('[data-in]').forEach(element => {
        const key = element.getAttribute('data-in');
        element.innerHTML = translations[currentLanguage][key];
    });
}