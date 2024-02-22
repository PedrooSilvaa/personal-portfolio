    document.getElementById("pdf").addEventListener('click', function() {
        var caminho = 'src/pdf/Pedro Henrique Ferreira Da Silva.pdf'
        window.open(caminho, '_blank');
    })

function Readmore(){
    reading = document.getElementById("read").innerText;

    if(reading == "Read Less"){
        document.getElementById("read"). innerText = "Read More"
        document.getElementById("paragraph-read").innerText = "Meu nome é Pedro, tenho 19 anos e sou natural de São Paulo. Minha jornada na programação começou em 2020, durante a pandemia. Meu esforço e dedicação me levaram a fazer a prova do SENAI Suíço-Brasileira, na qual fui aprovado. Hoje, estou cursando o técnico em Desenvolvimento de Sistemas, continuando a aprimorar minhas habilidades e a construir meu caminho no emocionante mundo da tecnologia.";
    }else{
        document.getElementById("read"). innerText = "Read Less";
        document.getElementById("paragraph-read").innerText = "Olá! Meu nome é Pedro, tenho 19 anos e sou natural de São Paulo. Minha jornada na programação teve início em 2020, em meio aos desafios da pandemia. Com esforço persistente e dedicação, alcancei um marco significativo ao ser aprovado na prova do SENAI Suíço-Brasileira. \n \n Atualmente, estou matriculado no curso técnico em Desenvolvimento de Sistemas, onde venho aprimorando minhas habilidades em HTML, CSS, JavaScript e Java. Ao integrar textos e links aos meus projetos, estou moldando ativamente meu caminho no fascinante universo da tecnologia. Junte-se a mim nesta emocionante jornada enquanto continuo aprendendo, criando e explorando as infinitas possibilidades no mundo do desenvolvimento.";
    }
}

function Submit(){
    var firstName = document.getElementById("box-first-name").value;
    var lastName = document.getElementById("box-last-name").value;
    var number = document.getElementById("box-number").value;
    var email = document.getElementById("box-email").value;
    var message = document.getElementById("box-message").value;

    console.log("Name: " + firstName + " " + lastName + "\nContact: " + number + " | " + email + "\n" + message)
}