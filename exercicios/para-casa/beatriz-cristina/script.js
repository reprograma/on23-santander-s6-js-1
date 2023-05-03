// Exercício: Faça uma função que recebe o preço de um produto e o percentual de desconto a ser dado no produto e retorne o valor do produto com desconto.

// Pseudocódigo:
// 1- Solicitar o preço do produto
// 2- Armazenar o preço do produto
// 3- Solicitar o percentual do desconto
// 4- Armazenar o percentual do desconto
// 5- Realizar cálculo de desconto
// 6- Chamar o cálculo
// 7- Mostar o resultado 

// Relembrando os comandos:
// 1- prompt
// 2- let
// 3- prompt
// 4- let
// 5- function
// 7- alert/ console.log


let precoProduto = prompt("Qual é o preço do produto?")
let percentualDesconto = prompt("E a porcentagem do desconto?")

function calcularPrecoComDesconto (preco, desconto) {
    let calculoDesconto = preco * desconto / 100;
    let precoComDesconto = preco - calculoDesconto;
    alert("O preço final do produto é: " + precoComDesconto);
    console.log("O preço final do produto é: " + precoComDesconto);
    return ("O preço final do produto é: " + precoComDesconto);
}

calcularPrecoComDesconto (precoProduto, percentualDesconto)
