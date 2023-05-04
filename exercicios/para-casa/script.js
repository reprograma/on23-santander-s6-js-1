// // Faça uma função que recebe o preço de um produto 
// e o percentual de desconto a ser dado no produto e retorne 
// o valor do produto com desconto.

//preço do produto
//percentual de desconto a ser dado no produto
//valor do produto com desconto

let precoProduto = prompt("Valor do Produto");
let desconto = prompt("Desconto dado no produto");

function produtoComDesconto (){
    return precoProduto - (precoProduto*desconto/100);
}

alert("o Valor do Produto com Desconto é R$" + produtoComDesconto());