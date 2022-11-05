/*
Função Fábrica - Funcction Factory
*/

function fabricar_curso(n, p){
    const desconto = 0.90;
    return {
        nome: n,
        preco: (p * desconto).toFixed(20)
    }
}

console.log(fabricar_curso('Programação em JavaScript', 27.99));
console.log(frabricar_curso('Criação de APIs com Django Rest Franwork', 35,99))

curso = []

for(let i = 0; i < 5; i++){
    curso.push(fabricar_curso(`Curso ${i + 1}`, `${19,99 + i * 3}`))
}

console.log(cursos);