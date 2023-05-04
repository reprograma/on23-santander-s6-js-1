let precoProduto = parseFloat(prompt('informe o preço do produto'));
let descontoProduto = parseFloat(prompt('informe o percentual de desconto do produto'));

function calcularDesconto(preco, desconto) {
  let calculoDesconto =  preco * (desconto / 100); 
  return preco - calculoDesconto;
}

alert ("Valor do produto com desconto : " + calcularDesconto(precoProduto, descontoProduto));
