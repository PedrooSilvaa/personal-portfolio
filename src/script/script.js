    document.getElementById("pdf").addEventListener('click', function() {
        var caminho = 'src/pdf/Pedro Henrique Ferreira Da Silva.pdf'
        window.open(caminho, '_blank');
    })

function Readmore(){
    reading = document.getElementById("read").innerText;

    if(reading == "Read Less"){
        document.getElementById("read"). innerText = "Read More"
        document.getElementById("paragraph-read").innerText = "My name is Pedro, I'm 19 years old and I'm from São Paulo. My programming journey began in 2020, during the pandemic. My effort and dedication led me to take the Swiss-Brazilian SENAI test, which I passed. Today, I am studying to be a technician in Systems Development, continuing to improve my skills and build my path in the exciting world of technology";
    }else{
        document.getElementById("read"). innerText = "Read Less";
        document.getElementById("paragraph-read").innerText = "Hello! My name is Pedro, I'm 19 years old and I'm from São Paulo. My programming journey began in 2020, amid the challenges of the pandemic. With persistent effort and dedication, I reached a significant milestone by passing the Swiss-Brazilian SENAI test. \n\nI am currently enrolled in the technical course in Systems Development, where I have been improving my skills in HTML, CSS, JavaScript and Java. By integrating text and links into my projects, I am actively shaping my path in the fascinating world of technology. Join me on this exciting journey as I continue to learn, create and explore the infinite possibilities in the world of development.";
    }
}

const nodemailer = require('nodemailer');

function Submit(){
    var firstName = document.getElementById("box-first-name").value;
    var lastName = document.getElementById("box-last-name").value;
    var number = document.getElementById("box-number").value;
    var email = document.getElementById("box-email").value;
    var message = document.getElementById("box-message").value;

    console.log("Name: " + firstName + " " + lastName + "\nContact: " + number + " | " + email + "\n" + message);

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "portfolioautomail@gmail.com",
        Password: 'D0AC49B8827F62F78347C2FE42E08ED80065',
        To: 'pedrohenriquefdasilva14@gmail.com',
        From: "portfolioautomail@gmail.com",
        Subject: "Nova Mensagem do Portfólio",
        Body: "Name: " + firstName + " " + lastName + "\nContact: " + number + " | " + email + "\n" + message,
      })
        .then(function (message) {
          alert("mail sent successfully")
        });
}