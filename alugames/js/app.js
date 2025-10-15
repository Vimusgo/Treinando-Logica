function alterarStatus(id) {
    let jogoEscolhido = document.getElementById(`game-${id}`);
    let imagemJogo = jogoEscolhido.querySelector('.dashboard__item__img');
    let botaoJogo = jogoEscolhido.querySelector('.dashboard__item__button');
    
            
    if (imagemJogo.classList.contains('dashboard__item__img--rented')) {
            
        if (confirm('Você tem certeza que deseja devolver o jogo?')) {
            imagemJogo.classList.remove('dashboard__item__img--rented');
            botaoJogo.classList.remove('dashboard__item__button--return');
            botaoJogo.textContent = 'Alugar';
        }


    } else {

        if (confirm('Você tem certeza que deseja alugar o jogo?')) {
            imagemJogo.classList.add('dashboard__item__img--rented');
            botaoJogo.classList.add('dashboard__item__button--return');
            botaoJogo.textContent = 'Devolver';
        }

    }

}
