let listaAmigos = [];
let amigoSecretos = [];
let checagemSorteio = false;

function adicionar() {

    if (checagemSorteio == true) {

        limpaSorteio();
        adicionarAmigo();

    } else if (checagemSorteio == false) {

        adicionarAmigo();

    } else {
        
        amigoSecretos = [];
        document.getElementById ('lista-sorteio').innerHTML = '';
        adicionarAmigo();

    }

}

function adicionarAmigo() {

    let coletaNome = document.getElementById('nome-amigo').value;
    let nome = coletaNome.toUpperCase();

    if (nome === '') {

        alert ('Ops, você não digitou um nome, tente novamente.');

    } else if (listaAmigos.includes(nome)){

        alert ('Você colocou um nome repetido, adicione um apelido ou o sobrenome para não confudir no resultado do sorteio.');

    } else {

        listaAmigos.push(nome);
        console.log (listaAmigos);
        exibirListaAmigos();
        
        document.getElementById('nome-amigo').value = '';

    }

}

function sortear() {

    let quantidade = listaAmigos.length;

    if (quantidade <= 2) {

        alert('Não há pessoas o suficiente para realizar um sorteio.');

    } else if (checagemSorteio == false) {

        for (let i = 0; i < quantidade; i++) {

            let amigoSorteado = sorteador(quantidade); 

            while (amigoSecretos.includes(amigoSorteado) || i === amigoSorteado) {
                amigoSorteado = sorteador(quantidade);
            }

        amigoSecretos.push(amigoSorteado);
        console.log(amigoSecretos);    
        }

        exibirListaAmigosSecretos(quantidade);

        checagemSorteio = true;

    } else {

        alert ('Sorteio já foi efetuado, clique em reiniciar ou adicione mais um nome para fazer um novo sorteio.');    

    }

}

function reiniciar() {

    listaAmigos = [];
    document.getElementById ('lista-amigos').textContent = '';
    limpaSorteio();


}

function limpaSorteio() {

    document.getElementById ('lista-sorteio').innerHTML = '';
    amigoSecretos = [];
    checagemSorteio = false;

}

function sorteador(q) {

    return Math.floor(Math.random() * (q));

}

function exibirListaAmigos() {

    //Solução que eu fiz no inicio do projeto:
    //document.getElementById('lista-amigos').textContent = `${listaAmigos.join(', ')}.`;

    //Um desafio que não consegui concluir, mas achei tão legal a resolução que puxei ela pro projeto e fiz algumas alterações visuais:
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';

    for (let i = 0; i < listaAmigos.length; i++) {

        // Cria um elemento de parágrafo para cada amigo
        let paragrafo = document.createElement('span');
        paragrafo.textContent = ' [' + listaAmigos[i] + '] ';
       
        // Adiciona um evento de clique para excluir o amigo
        paragrafo.addEventListener('click', function() {
            excluirAmigo(i);
        });


        // Adiciona o parágrafo à lista
        lista.appendChild(paragrafo);

    }

}
//Parte da função do desafio, que adiciona a possibilidade de excluir itens da lista clicando no elemento do html:
function excluirAmigo(index) {
    listaAmigos.splice(index, 1);
    exibirListaAmigos();
    limpaSorteio();
}

function exibirListaAmigosSecretos(q) {

    let lista = document.getElementById('lista-sorteio');

    for (i = 0; i < q; i++) {
        lista.innerHTML = lista.innerHTML + listaAmigos[i] + ' --> ' + listaAmigos[amigoSecretos[i]] + '<br>';
    }

}