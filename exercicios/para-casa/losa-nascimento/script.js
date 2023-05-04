let precoInformado = prompt('Informe o valor do produto')
let percentualInforamdo = prompt('Informe o desconto a ser aplicado')

function calculaDesconto(preco, percentualDesconto) {
    let ValorDoDesconto = preco * percentualDesconto /100
    let precoComDesconto = preco - ValorDoDesconto

alert('O valor do produto com o desconto solicitado é: ' + precoComDesconto)
}

calculaDesconto (precoInformado, percentualInforamdo)
