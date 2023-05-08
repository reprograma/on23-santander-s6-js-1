/* Explicação do exercício: Faça uma função que recebe o preço de um produto e o percentual de 
desconto a ser dado no produto e retorne o valor do produto com desconto.*/


function calculaDesconto() {

    // let valorDoDesconto = precoInformado * percentualDeDescontoInformado / 100
    // let precoComDesconto = precoInformado - valorDoDesconto
    let precoInformado = prompt('Por favor informe o preco do produto')
    let percentualDeDescontoInformado = prompt('Por favor informe o desconto a ser aplicado');
    let valorDoDesconto = precoInformado * percentualDeDescontoInformado / 100
    let precoComDesconto = precoInformado - valorDoDesconto



    console.log('O valor com o desconto solicitado é: ' + precoComDesconto)
    alert('O valor do desconto é: ' + valorDoDesconto)
    let satisfacaoDoCliente = prompt('Você economizou: ' + (precoInformado - precoComDesconto)+'.00' + ' Valeu a pena?')
    console.log('O cliente ficou satisfeito? '+satisfacaoDoCliente)
}

calculaDesconto()




