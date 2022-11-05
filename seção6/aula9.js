// Crianddo uma função construtora

function Pessoa(n, s){
    //atributo privados só conseguimos fazer uso da função contrutora
    let altura = 0.30;
    let peso = 0.5;
    let idade = 0;
    let nome = n;
    let sexo = s;

    // atributo público pode ser acessado fora da função
    this.raca = 'Humano';

    // método privilegio só consegumos fazer uso dentro da função constautora
    let imprimir_dados = function(){
        console.log(`Nome: ${nome}, Idade: ${idade}, Peso: ${idade}, Altura: ${altura}, Sexo: ${sexo}, Raça: ${raca}`);

    }

    //método público conseguimos acessar fora da função construtora
    this.fazer_aniversario = function(){
        idade += 1;
        imprimir_dados();
    }

    this.getIdade = function(){
        return idade;
    }
}