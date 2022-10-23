function gritar(){
    alert("Ahhh")
}

function perguntar(){
    var nome;
    nome = prompt("Qual é o seu nome? ")
    alert("Olá " + nome);
}

function mudar_text(){
    var h1 = document.getElementsByTagName("h1");

    if(h1[0].innerText == "Geek Univerty"){
        h1[0].innerText = "Evolua seu lado geek!";
    }else{
        h1[0].innerText = "Geek University"; 
    }
}

function incrementar(){
    var p1 = document.getElementById("p1");

    p1.innerText = parseInt(p1.innerText) + 1;
}