let precoProduto = prompt ("Qual o valor do produto?")
let percentualDesconto = prompt ("Qual o valor do desconto?")

function calcularPrecoDesconto () {

    let calcularDesconto = precoProduto * percentualDesconto / 100
    let resultado = precoProduto - calcularDesconto
  
  alert ("O valor do produto com desconto é " + resultado)  

}


calcularPrecoDesconto()