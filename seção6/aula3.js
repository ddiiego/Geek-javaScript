function calcular_idade1(ano_nascimento){
    const data = new Date(); //gera a data atual

    const idade = data.getFullYear() - ano_nascimento;

    return idade;
}

function calcular_idade2(ano_nascimento){
    const data = new Date();

    const idade = data.getUTCFullYear() - ano_nascimento;

    console.log(idade);
}

let ret = calcular_idade1(1998);
//console.log(ret + 3);

//calcular_idade2(1998);

const data = new Date();

console.log('Data Completa: ' + data);


function somar(num1, num2){
    return num1 + num2;
}

console.log(4, 5);
console.log(3, 5, 6);
console.log(4);