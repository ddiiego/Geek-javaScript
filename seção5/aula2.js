/* 
Array contendo 5 elementos -> n = 5

// índices -> posição do elemento no array
[0][1][2][3][4]

//valores em array
[12]['Geek'][true][48][52]

//Detalhes sobre arrays
- Possuem tamonho infinito*
- Podemos colocar qualquer tipo de dado
*/ 

//Forma 1
var alunos = new Array('Cristina', 'Ricardo', 'Lucas', 'Maria', 'Sofia');
console.log(alunos);

var alunos = ['Cristina', 'Ricardo', 'Lucas', 'Maria', 'Sofia'];
console.log(alunos);
//Forma 2 [recomendada]
var notas = [1, 2, 3, 4, 8];
console.log(notas);

//Criando Array vazio
var dados = [];
 console.log(dados);

 //Fazendo acesso ao valor de um ídice
 console.log([2]);
 
 //Auterando o valor a partir do índice
 notas[2] = 12;
//console.log(notas);

//Atenção ao acessar um valor com um índice que não existe
notas[9] = 10; //Não existe
//console.log(notas);

//console.log(notas[5]); //undefined
//console.log(notas[6]); //undefind
//console.log(notas[7]); //undefind
//console.log(notas[8]); //undefind
//console.log(notas[9]); //10

//console.log(notas[5] == undefined); false

//Inserindo elementos no final do Array
var nomes = ['Paulo','Maria','Julia'];

nomes.push('Vanessa'); //inserindo o valor no final do array
//console.log(nomes);

//Tamanho do array
//console.log(nomes.length); //4
var tam = nomes.length;

console.log(tam); //4

alunos.sort(); //Ordenando array de strings
//console.log(alunos);

var precos = [123.55, 42.27, 546,99, 23,12];
console.log(precos);

//precos.sort();//ATENÇÃO Ordenação de floats não funciona assim!
//console.log(precos);
precos.sort(function(a, b) {return});
console.log(precos);

var idade =  [5, 1, 8, 12, 44, 78];
console.log(idade);

//idade.sort(); //ATENÇÃO Ordenação de ints não funciona assim!
//console.log(idades);
idade.sort(function(a, b){return a - b});
console.log(idade);