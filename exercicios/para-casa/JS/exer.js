let precoDigitado = +prompt("Digite o preço do produto");
let desconto = +prompt("Digite o valor do desconto");

function calcularPrecoComDesconto(preco, percentualDesconto) {
  let valorDesconto = (preco * percentualDesconto) / 100;
  let precoComDesconto = preco - valorDesconto;
  return precoComDesconto;
}

console.log(calcularPrecoComDesconto(precoDigitado, desconto ))