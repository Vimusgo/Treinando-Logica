let pistaIngressos = 100;
let superiorIngressos = 200;
let inferiorIngressos = 400;

atualizarIgressosDisponivel();

function comprar() {
    
    let ingresso = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;
    let comprado = true;

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

    exibirAlerta(ingresso,quantidade,comprado);

    atualizarIgressosDisponivel();

}

function exibirAlerta(i,q,c) {

    let nome;

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

function atualizarIgressosDisponivel() {

    document.getElementById('qtd-pista').textContent = `${pistaIngressos}`;
    document.getElementById('qtd-superior').textContent = `${superiorIngressos}`;
    document.getElementById('qtd-inferior').textContent = `${inferiorIngressos}`;

}