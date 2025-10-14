let travaBotao = false;

function sortear() {

    let listaNumeros = [];
    let quantidadeNumeros = parseInt(document.getElementById('quantidade').value);
    let inicioNumero = parseInt(document.getElementById ('de').value);
    let finalNumero = parseInt(document.getElementById ('ate').value);

    for (let i = 0; i < quantidadeNumeros; i++){

        let numeroSorteado = sortearNumero(inicioNumero, finalNumero);

        while (listaNumeros.includes(numeroSorteado)){
            numeroSorteado = sortearNumero(inicioNumero,finalNumero);
        }

        listaNumeros.push(numeroSorteado);

    }
    
    let mensagemResultado = document.getElementById('resultado');
    mensagemResultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${listaNumeros.join(', ')}</label>`;

    if (listaNumeros.length > 0 & travaBotao === false) {

        alterarStatusBotao();
        travaBotao = true;

    } 

}

function sortearNumero(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

function alterarStatusBotao() {

    let botao = document.getElementById('btn-reiniciar');

    if (botao.classList.contains('container__botao-desabilitado')) {
        
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');

    } else {

        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');

    }
}

function reiniciar() {

    if (travaBotao === true) {
        document.getElementById('quantidade').value = '';
        document.getElementById('de').value = '';
        document.getElementById('ate').value = '';
        document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
        alterarStatusBotao();
        travaBotao = false;
    }

}
