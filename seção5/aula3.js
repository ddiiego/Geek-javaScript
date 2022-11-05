var cursos = [
    'lógica',
    'c',
    'java',
    'python',
    'banco de dados',
    'Django',
    'javaScript'
];

//console.log(cursos);
//console.log(cursos.length);

//definir uma função
function imprimir(curso, indice, array){
    console.log(indice + ' - ' + curso);
    console.log(array);
}

//para cada
//cursos.forEach(imprimir);

//ultilização de uma função anônima (lambda/callback) e templete string
curso.forEach(function(curso,indice){
    console.log(`${indice} - ${curso}`)
});