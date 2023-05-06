let precoProduto = prompt('Insira o preco do produto.')
let percentualDesconto = prompt('Insira a porcentagem de desconto.')

function calcularPrecoComDesconto (preco, desconto){
    let CalculoDesconto = precoProduto * percentualDesconto /100;
    let precoComDesconto = precoProduto - CalculoDesconto;
    alert (precoComDesconto);
}

calcularPrecoComDesconto (precoProduto, percentualDesconto);

let precoComDesconto = calculo(precoProduto, percentualDesconto);

alert('O preco final do produto e: ' + precoComDesconto);
console.log ('O preco final do produto e: ' + precoComDesconto);