let valorProduto = prompt("Informe o valor do produto")
let porcentagemDesconto = prompt("Informe o desconto")

function desconto(valorProduto, porcentagemDesconto) {

let valorDesconto = valorProduto * porcentagemDesconto / 100
let valorFinal = valorProduto - valorDesconto

alert(valorFinal)
}