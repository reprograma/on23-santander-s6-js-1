//Faça uma função que recebe o preço de um produto e o percentual de desconto a ser dado no produto e 
//retorne o valor do produto com desconto.

let preçoProduto = prompt("Qual o valor do produto?")
let percentualDesconto = prompt("Qual o valor do desconto?")

function calcularPrecoDesconto (){
    let calcularDesconto = preçoProduto * percentualDesconto/ 100
    let resultado = preçoProduto - calcularDesconto

    alert("O valor do produto com desconto é *+ resultado")
}
calcularPrecoDesconto()