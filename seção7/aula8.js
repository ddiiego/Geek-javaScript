/*
funcipnarios
    nome,
    sobrenome,
    email,
    cpf,
    função,
    registro

cliente
    nome,
    sobrenome,
    email,
    cpf,
    renda

função
    descrição
    salario
*/

class Funcao{
    constructor(descricao, salario){
        this._descricao = descricao;
        this._salario = salario;
    }

    get descricao(){
        return this._descricao;
    }

    set descricao(descricao){
        this._descricao = descricao;
    }

    get salario(){
        return this._salario;
    }

    set salario(salario){
        this._salario = salario;
    }
}

class Pessoa{
    constructor(nome, sobrenome, email, cpf){
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._email = email;
        this._cpf = cpf;
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

    set sobrenome(sobrenome){
        this._sobrenome = sobrenome;
    }

    get email(){
        return this._email;
    }

    set email(email){
        this._email = _email;
    }

    get cpf(){
        return this._cpf;
    }

    set cpf(cpf){
        this._cpf = _cpf
    }
}

class funcionario extends Pessoa{
    constructor(nome, sobrenome, email, cpf, funcao, registro){
        super(nome, sobrenome, email, cpf);
        this._funcao = funcao;
        this.registro = registro;
    }

    get funcao(){
        return this._funcao;
    }

    set funcao(funcao){
        this._funcao =this._funcao;
    }

    get registro(){
        return this._registro;
    }

    set registro(registro){
        this._registro;
    }
}

class Cliente extends Pessoa{
    constructor(nome, sobrenome, email, cpf, renda){
        super(nome, sobrenome, email, cpf);
        this._renda = renda;
    }

    get renda(){
        return this._renda;
    }

    set renda(renda){
        this._renda;
    }
}

const c1 = new Cliente('Felicity', 'Jones', 'felicity@gmia.com','23141414', 4555.66)
const c2 = new Cliente('velicity', 'cones', 'felicity@gmia.com','23141414', 4555.66)