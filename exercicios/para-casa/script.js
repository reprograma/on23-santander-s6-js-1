let precoProduto = prompt('Qual o preço do produto?');
let descontoProduto = prompt('Qual o desconto?');

function calcularDesconto() {
  let valorDoDesconto = precoProduto * (descontoProduto / 100);
  let precoProdutoComDesconto = precoProduto - valorDoDesconto;
  alert(`O preço do produto com desconto é R$ ${precoProdutoComDesconto}`);
}
calcularDesconto();

// -----------------------------------------------------------------------

function calcularDesconto2() {
  let precoProduto2 = prompt('Qual o preço do produto?');
  let descontoProduto2 = prompt('Qual o desconto?');
  let valorDoDesconto = precoProduto2 * (descontoProduto2 / 100);
  let precoProdutoComDesconto = precoProduto2 - valorDoDesconto;
  alert(`O preço do produto com desconto é R$ ${precoProdutoComDesconto}`);
}
calcularDesconto2();

// -----------------------------------------------------------------------

function calcularDesconto3(precoProduto, descontoProduto) {
  let valorDoDesconto = precoProduto * (descontoProduto / 100);
  let precoProdutoComDesconto = precoProduto - valorDoDesconto;
  alert(`O preço do produto com desconto é R$ ${precoProdutoComDesconto}`);
}

calculaDesconto3(100, 15);

// -----------------------------------------------------------------------

function calculaDesconto4(precoProduto, descontoProduto) {
  let valorDoDesconto = precoProduto * (descontoProduto / 100);
  let precoProdutoComDesconto = precoProduto - valorDoDesconto;
  return `O preço do produto com desconto é R$ ${precoProdutoComDesconto}`;
}

alert(calculaDesconto4(50, 5));
console.log(calculaDesconto4(50, 5));

// -----------------------------------------------------------------------

function calculaDesconto5(precoProduto, descontoProduto) {
  let precoProdutoComDesconto = precoProduto * ((100 - descontoProduto) / 100);
  return `O preço do produto com desconto é R$ ${precoProdutoComDesconto}`;
}

alert(calculaDesconto5(30, 1));
console.log(calculaDesconto5(30, 1));
