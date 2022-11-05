let idade = 19;
const nome = 'Geek';

function soma_3(idade){
    return idade + 3;
}

console.log(nome + 'tem' + idade + 'anos');

//Templete strings
console.log(`${nome} tem ${soma_3(idade)} anos.`);

/*
Em templete string usa-se a cráse, e não as pas simples ou acento agudo

não é '
não é á
É `
*/
