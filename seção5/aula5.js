var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filtrar_pares(n){
    return n % 2 === 0;
}

//console.log(filtrar_pares(3)); //false
//console.log(filtrar_pares(8)); //false

function filtrar_impares (n){
    return n % 2 !== 0;
}

function filtrar_multiplos_5(n){
    return n % 5 === 0;
}

var ret = numeros.filter(filtrar_pares)
console.log(ret);

ret = numeros.filter(filtrar_impares);
console.log(ret);

ret = numeros.filter(filtrar_multiplos_5);
console.log(ret);