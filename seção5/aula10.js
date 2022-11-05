//DESTRUTUING COM ARRAY

const numeros = [1, 2, 3, 5, 7];

//const [num1, num2, num3, num4] = numeros;

//console.log(num1);
//console.log(num2);
//console.log(num3);
//console.log(num4);

//Podemos descartar valores

const [n1, , n3, n4] = numeros;

//console.log(n1);
//console.log(n3);
//console.log(n4);

//Podemos coloar valor default que será usado caso não haje no container
const [nu1, nu2, nu3, nu4 = 34, nu5 = 99, nu6 = 999] = numeros;


console.log(nu1);
console.log(nu2);
console.log(nu3);
console.log(nu4);
console.log(nu5);
console.log(nu6);
