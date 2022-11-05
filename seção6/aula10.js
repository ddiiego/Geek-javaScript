let variavel = 'global'; // pode ser acessada globalmente no nosso projeto

function imprimir(){
    console.log(xuxa);
}

function outra(){
    let xuxa = 'local'; // pode ser acessada localmente no bloco/contexto
    imprimir();
    console.log(xuxa); // local
}

outra(); //??