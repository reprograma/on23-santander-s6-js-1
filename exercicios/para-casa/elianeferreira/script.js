let precoDoProduto = +prompt ("Digite o preco do produto")
let percentualDeDesconto = +prompt (" digite o percentual do desconto")
//let ValorFinalProduto = +prompt ("Valor a pagar")

function calcularProdutoComDesconto (){

   let calculoDesconto = precoDoProduto * percentualDeDesconto /100;
   let ValorFinalProduto = precoDoProduto - calculoDesconto;
   
   alert("Valor a pagar é " + ValorFinalProduto)
   
}

calcularProdutoComDesconto()



