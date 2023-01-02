// Ajax (XMLHttpRequest) - asynchnous javaScript and XML

let btn = document.querySelector('#btn');
let input = document.querySelector('input[name=github]');
let div = document.querySelector('#app');

btn.onclick = function(){
    //Limpar o conteúdo da div
    div.innerHTML = '';

    //Instanciando o objeto ajax
    let ajax = new XMLHttpRequest();

    //Abrindo uma conexão (GET, POST, PUT, DELETE...)
    ajax.open('GET', `https://api.github.com/users/${input.value}`);

    //Enviar a requisição
    ajax.send(null);

    ajax.onreadystatechange = function(){
        //Criar elemenoto span
        let spanNone = document.createElement('span');

        //Criar a variável nome
        let txtNome = '';

        /*
            ajax.readyState -> 0 => Antes da conexão ser aberta
            ajax.readyState -> 1 => Após abrir a coexão
            ajax.readyState -> 2 => headrs (cabeçalhos) foram recebidos
            ajax.readyState -> 3 => Carregando o corpo da requisição conteúdo/dados
            ajax.readyState -> 4 => o conteúdo (dados) está pronto pra uso
        */

            if(ajax.readyState === 4){
                if(ajax.status === 200){
                    //tranformar os JSON para array
                usuario =  JSON.parse(ajax.responseText);

                //Se o usuário possui nome
                if(usuario['name'] !== null){
                    txtNome = document.createTextNode(usuario['name']);

                    let img = document.createElement('img');
                    img.setAttribute('src', usuario['avatar_url']);
                    img.setAttribute('alt', usuario['name']);
                    img.setAttribute('width', '45px');
                    img.setAttribute('height', '45px');

                    div.appendChild(img);
                }else{
                    txtNome = documentcreatNode(`O usuário ${input.value} não tem nome.`);
                }
                //Adiciona o texto ao span e o span à div
                spanNone.appendChild(txtNome);
                div.appendChild(spanNone);

                //LImpar o input
                input.value = '';
                }

            }else{
                txtNome = document.createTextNode(`Não encotrei o usuário ${input.value}`);
                //Adcionar o texto ao span e o span á div
                spanNone.append(txtNome);
                div.appendChild(spanNone);
            }    

    }
}