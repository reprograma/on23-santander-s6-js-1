let valorProduto = +prompt ('Qual o valor do produto?')
let valorDesconto = +prompt ('Qual o valor do desconto?')

function calcularDesconto (preco, desconto) {
    let calculoDesconto = preco * desconto/ 100
    let valorDesconto = preco - calculoDesconto
    alert ('O valor com desconto é: ' + valorDesconto)
}

calcularDesconto (valorDesconto, valorDesconto)

