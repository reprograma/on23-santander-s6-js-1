function calcularDesconto() {

  let precoProduto = parseFloat(prompt('Digite o preço do produto: '));
  let percentualDesconto = parseFloat(prompt('Digite o percentual de desconto: '));

  let precoDesconto = precoProduto - (precoProduto * percentualDesconto / 100);

  return alert(`O preço do produto com o desconto é: ${precoDesconto} reais.`);
}

calcularDesconto();