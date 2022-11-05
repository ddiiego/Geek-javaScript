function somar1(){
    let soma = 0;
    for(let i = 0; i < arguments.length; i++){
        soma += arguments[i];
    }
    return soma;
}

//console.log(somar1());
//console.log(somar1(2));
//console.log(somar1(2, 5));
//console.log(somar1(5, 3, 9));
//console.log(somar1(2, 4, 8, 12));

function imprimir_valor(num1, num2){
    for(let i in arguments){
        console.log(arguments[i]);
    }
}

//imprimir_valor();
//imprimir_valor(4, 6);
//imprimir_valor(4, 6,8);
//imprimir_valor(3, 6, 8, 12, 44);
