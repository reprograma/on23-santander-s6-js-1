let precoInformado= prompt("Digite  o preco do produto")
let percentualDeDescontoInformado = prompt("Digite  o desconto a ser aplicado");

function calculaDesconto(preco, porcentualDeDesconto){

//  let valorDoDesconto= precoInformado * porcentualDeDescontoInformado / 100
// let precoComDesconto= precoInformado - valorDoDesconto 


let valorDoDesconto = preco * porcentualDeDesconto / 100
let precoComDesconto = preco- valorDoDesconto



console.log("O valor com o desconto solicitado é:" + precoComDesconto)
       alert("O valor do desconto é: " + valorDoDesconto )


}

calculaDesconto(precoInformado, percentualDeDescontoInformado)