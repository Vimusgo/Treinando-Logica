A resolução desse desafio no curso da Alura foi bem diferente do resultado que eu cheguei, então fiquei interessado em detalhar a minha criação e já aproveito pra reforçar os meus estudos explicando a idéia.

```

//  Começando que por lá a quantidade de ingressos foi definida usando o texto que contem no <span> do index.html, por aqui eu escolhi para ser definido pelo JS mesmo, então essas váriaveis podem ser manipuladas pra alterar a quantidade de ingressos.

let pistaIngressos = 100;
let superiorIngressos = 200;
let inferiorIngressos = 400;

// Puxa a função responsavél por atualizar os <span> do html.

atualizarIgressosDisponivel();

// Aqui a função principal do botão comprar, ele faz uma verificação do ingresso escolhido puxando o valor do seletor, e támbem puxa a quantidade informada no input, criei uma variavel de controle da compra que sempre recebe como true ao puxar a função.

function comprar() {
    
    let ingresso = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;
    let comprado = true;

    //  Nesse estágio ele faz uma verificação se a quantidade é valida e com as condições certas ele ja desconta o total de ingressos disponivel. Caso um critério de erro aconteça tipo a quantidade do input sair como 0 ou um numero negativo, ou não tiver ingressos suficiente para venda ele atribui a variavel comprado como FALSE, isso é importante pro funcionamento da função [exibirAlerta()].

    if ( quantidade <= 0) {
        comprado = false;
    } else if ( ingresso === 'inferior' && quantidade <= inferiorIngressos ) {
        inferiorIngressos = inferiorIngressos - quantidade;
    } else if ( ingresso === 'superior' && quantidade <= superiorIngressos) {
        superiorIngressos = superiorIngressos - quantidade;
    } else if ( ingresso === 'pista' && quantidade <= pistaIngressos) {
        pistaIngressos = pistaIngressos - quantidade;
    } else {
        comprado = false;
    }

    // No final da verificação ele aciona essas duas funções que vou explicar o funcionamento a baixo, e na [exibirAlerta()] eu levei junto o tipo de ingresso, a quantidade do input e a condição pra definir se a compra deu certo ou errado.

    exibirAlerta(ingresso,quantidade,comprado);

    atualizarIgressosDisponivel();

}

// Essa função é a responsavel por organizar as mensagens passadas, aqui vai avisar se a compra foi um sucesso ou se aconteceu algum erro.

function exibirAlerta(i,q,c) {

    // Essa variavel é mais um charme mesmo por ela vai receber a informação da categoria certinho pra deixar as mensagens mais completas.

    let nome;

    // E aqui ele faz a verificação pra definir qual categoria vai ser guardada na variavel [nome] e junto no [i] ele vai guardar a quantidade de ingressos disponiveis pra mais um charme na hora de exibir a mensagem de erro por quantidade de ingressos indisponivel.

    if (i === 'inferior') {
        i = inferiorIngressos;
        nome = 'Cadeira Inferior';
    } else if (i === 'superior') {
        i = superiorIngressos;
        nome = 'Cadeira Superior';
    } else if (i === 'pista') {
        i = pistaIngressos;
        nome = 'Pista';
    }
    

    // E por fim a seleção da mensagem final, se a condição da variavel [comprada] que agora é a [c] continua como TRUE ele informa a mensagem de sucesso, caso o contrario ele faz a verificação se o erro foi por um valor invalido informado no input, ou se a quantidade de ingressos é maior do que a quantidade que tem a venda, ou se ja está esgotado.

    if ( c === true ) {
        alert(`Compra de ${q} ingressos na categoria ${nome} efetuado com sucesso! :)`);
    } else {
        if (q <= 0) {
            alert(`Quantidade invalida!`);
        } else if (i > 0) {
            alert(`Não foi possivel concluir a compra pois restam apenas ${i} ingressos na ${nome}, altere a quantidade desejada.`);
        } else {
            alert(`Ingressos da categoria ${nome} estão esgotados.`);
        }
    }

}


// E aqui bem basico é o responsavel por atualizar a informação visual dos <span> no html informando a quantidade de ingressos disponiveis, só muda mesmo o texto dentro do <span> que é a variavel com a quantidade de cada ingresso.

function atualizarIgressosDisponivel() {

    document.getElementById('qtd-pista').textContent = `${pistaIngressos}`;
    document.getElementById('qtd-superior').textContent = `${superiorIngressos}`;
    document.getElementById('qtd-inferior').textContent = `${inferiorIngressos}`;

}

```

É isso ai.