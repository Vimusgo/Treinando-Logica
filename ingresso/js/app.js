let pistaIngressos = 100;
let superiorIngressos = 200;
let inferiorIngressos = 400;

function comprar() {
    
    let ingresso = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;

    if ( ingresso === 'inferior' && quantidade <= inferiorIngressos ) {
        inferiorIngressos = inferiorIngressos - quantidade;
    } else if ( ingresso === 'superior' && quantidade <= superiorIngressos) {
        superiorIngressos = superiorIngressos - quantidade;
    } else if ( ingresso === 'pista' && quantidade <= pistaIngressos) {
        pistaIngressos = pistaIngressos - quantidade;
    } else {
        exibirAlerta(ingresso);
    }

    console.log (`Quantidade de ingressos: Pista ${pistaIngressos}, Superior ${superiorIngressos}, Inferior ${inferiorIngressos}`)

}

function exibirAlerta(i) {

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
    
    if (i > 0) {
        alert(`Não foi possivel concluir a compra pois restam apenas ${i} ingressos na ${nome}, altere a quantidade desejada.`);
    } else {
        alert(`Ingressos da categoria ${nome} estão esgotados.`);
    }

}