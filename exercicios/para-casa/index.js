function calcularPrecoComDesconto() {

let precoProduto = prompt ("Informe o valor do produto");
let desconto = prompt ("valor do desconto em % que deseja dar")

let calculoDoDesconto = precoProduto * desconto / 100;
let valorComDesconto = precoProduto - calculoDoDesconto;

//return valorComDesconto
console.log ('O valor de percentual aplicado foi de: ' + desconto + '%')
console.log ('O valor do desconto dado em reais foi de R$: ' + calculoDoDesconto)
alert ("valor do produto com desconto é R$ " + valorComDesconto)
}


calcularPrecoComDesconto()



