let travaBotao = false;

function sortear() {

    let listaNumeros = [];
    let quantidadeNumeros = parseInt(document.getElementById('quantidade').value);
    let inicioNumero = parseInt(document.getElementById ('de').value);
    let finalNumero = parseInt(document.getElementById ('ate').value);


    if (quantidadeNumeros <= (finalNumero - inicioNumero) + 1) {

        for (let i = 0; i < quantidadeNumeros; i++){

            let numeroSorteado = sortearNumero(inicioNumero, finalNumero);

            while (listaNumeros.includes(numeroSorteado)){
                numeroSorteado = sortearNumero(inicioNumero,finalNumero);
            }

            listaNumeros.push(numeroSorteado);

        }
        
        exibirMensagem(`Números sorteados:  ${listaNumeros.join(', ')}`);

        if (listaNumeros.length > 0 & travaBotao === false) {

            alterarStatusBotao();
            travaBotao = true;

        } 

    } else if (inicioNumero > finalNumero) {

        exibirMensagem(`Erro: O número ${inicioNumero} é superior ao ${finalNumero}. Altere para um valor valido.`);

    } else {

        quantidadeMaxima = (finalNumero - inicioNumero) + 1;
        exibirMensagem(`Erro: Quantidade de sorteio invalida. Máximo entre ${inicioNumero} e ${finalNumero} é ${quantidadeMaxima}.`);
        
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
        exibirMensagem('Números sorteados:  nenhum até agora');
        alterarStatusBotao();
        travaBotao = false;
    }

}

function exibirMensagem(texto) {
    let mensagemResultado = document.getElementById('resultado');
    mensagemResultado.innerHTML = `<label class="texto__paragrafo">${texto}</label>`;
}