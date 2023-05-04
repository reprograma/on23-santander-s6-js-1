// Faça uma função que recebe o preço de um produto e o percentual de desconto a ser dado no produto e retorne o valor do produto com desconto. //
function calcularPrecoFinal () {
    let precoProduto = prompt('Qual o valor do produto?');
    let desconto = prompt('Qual a porcentagem do desconto do produto?');

    let valorFinal = precoProduto - (precoProduto * desconto/100); 

    alert('O preço final do produto é ' + valorFinal);
}

calcularPrecoFinal()