class Pessoa {
    constructor(nome, sobrenome){
        this._nome = nome;
        this._sobrenome = sobrenome;
    }

    get nome(){
        return this._nome;
    }

    set nome(nome){
        this._nome = nome;
    }

    get sobrenome(){
        return this._sobrenome;
    }

    falar(msg){
        console.log(`${this.nome} está falando ${msg}`);
    }
    
    comer(){
        console.log(`${this.nome} está comendo...`);
    }

    Beber(){
        console.log(`${this.nome} ${this.sobrenome} está bebendo...`)
    }
}



class Carro {
    constructor(modelo){
        this.marca = 'Honda';
        this.modelo = modelo;
    }
    
    get marca(){
        return this._marca;
    }

    get modelo(){
        return this._modelo;
    }

    set modelo(modelo){
        this._modelo = modelo;
    }
    imprimir(){
        console.log(`${this.marca} ${this.modelo}`);
    }
}

// Instanciando Objetos -  Forma 1

const curso = new Object()
curso.nome = 'Programação em JavaScript';
curso.preco = 27.99;

console.log(curso);

curso[`qtd_alunos`] = 999;

console.log(curso);

delete curso[`qtd_alunos`];
delete curso[`preco`];

console.log(curso);

// Instancia de Objeto - Forma 2 -  Objeto Literal
const programa = {
    nome: "Photoshop",
    preco: 8999.99,
    fabricante: {
        nome: "Adobe",
        contato: "contato@adobe.com",
        endereço: {
            rua: 'Da paz, 45',
            bairro: "Novo lima",
            cidade: "São paulo"
        },
        filias: [
            {cidade: "Rio de Janeiro"},
            {cidade: "Recife"},

        ]
    }
}

console.log(programa);

console.log(programa.nome);
console.log(programa.fabricante.nome);
console.log(programa.fabricante.filias.length);

console.log(programa['fabricante']['filias'].length);

programa.nome = 'PlayStatio';

console.log(programa.nome);

delete programa.fabricante.filias;
console.log(programa.fabricante.filias);

// Instanciação de Objeto - forma 4 - Função construtora

function lampada(cor){
    this.cor = cor;
}

const li = new lampada('Banca');

console.log(li);

console.log(typeof(li));

//Instanciação de Ojeto - Forma 5 - Objeto a partir das nossas classes

const p1 = new Pessoa('Felicity','Sobrenome');
console.log(p1);
console.log(typeof(p1));
console.log(p1.nome); //função get
console.log(p1.sobrenome); //função gets

p1.nome = 'Xuxa';
console.log(p1);