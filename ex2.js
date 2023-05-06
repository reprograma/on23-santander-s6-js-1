let precoProduto = prompt("Qual é o preço do produto?")
let percentualDesconto = prompt("E a porcentagem do desconto?")

function calcularPrecoComDesconto (preco, desconto) {
    let calculoDesconto = preco * desconto / 100;
    let precoComDesconto = preco - calculoDesconto;
    // return precoComDesconto;
    alert("O preço final do produto é: " + precoComDesconto);
    console.log("O preço final do produto é: " + precoComDesconto);
}

calcularPrecoComDesconto (precoProduto, percentualDesconto)