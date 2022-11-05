let numeros = [1, 2, 3, 4, 5, 6,7];

function dobrar(valor){
    return valor * 2;
}

let res1 = numeros.maps(dobrar);

console.log(numeros);
console.log(res1);

//Funções Anônias - Lambdas (Funções Lambdas)

let res2 = numeros.map(function(valor){
    return valor * 2;
})

console.log(res2);

console.log(dobrar(9));

const outa = function(valor){
    return valor * 2;
}

console.log(outro(9));