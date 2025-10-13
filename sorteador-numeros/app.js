function sortear() {

    let listaNumeros = [];
    let quantidadeNumeros = parseInt(document.getElementById('quantidade').value);
    let inicioNumero = parseInt(document.getElementById ('de').value);
    let finalNumero = parseInt(document.getElementById ('ate').value);

    console.log (`Quantos numeros serão sorteados? = ${quantidadeNumeros}`);
    console.log (`E os números sorteados estão entre ${inicioNumero}, até ${finalNumero}.`);

    for (let i = 0; i < quantidadeNumeros; i++){

        let numeroSorteado = sortearNumero(inicioNumero, finalNumero);

        while (listaNumeros.includes(numeroSorteado)){
            numeroSorteado = sortearNumero(inicioNumero,finalNumero);
        }

        listaNumeros.push(numeroSorteado);

    }

    console.log(listaNumeros);
    
    let mensagemResultado = document.getElementById('resultado');
    mensagemResultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${listaNumeros}</label>`;
}

function sortearNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

