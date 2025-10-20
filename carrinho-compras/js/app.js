let carrinhoValorTotal;
let campoVazio = document.getElementById('produto');
campoVazio.innerHTML = `<option value="">Selecione um item.</option>` + campoVazio.innerHTML;
limpar();

function adicionar() {

    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;

    if (!produto) {
        alert ('Selecione um produto.')
    } else if (quantidade <= 0) {
        alert ('Informe uma quantidade valida.');
    } else {

    let separador = produto.split(' - R$');
    let nomeProduto = separador[0];
    let valorProduto = separador[1];

    let valorTotal = quantidade * valorProduto;

    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorTotal}</span>
        </section>`;

    carrinhoValorTotal = carrinhoValorTotal + valorTotal;
    console.log(carrinhoValorTotal);
    let exibirCarrinhoValorTotal = document.getElementById('valor-total');
    exibirCarrinhoValorTotal.textContent = `R$${carrinhoValorTotal}`

    document.getElementById('quantidade').value = '';
    document.getElementById('produto').options.selectedIndex = 0;

    }    
}

function limpar() {

    document.getElementById('produto').options.selectedIndex = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0';
    carrinhoValorTotal = 0;

}