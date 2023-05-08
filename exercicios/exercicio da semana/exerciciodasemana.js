let preco = parseInt(prompt(`Informe o valor do produto:`));
let valorDeDesconto = parseInt(prompt(`Informe o valor do desconto:`));

function calcularDesconto(preco, valorDeDesconto) {
const desconto = (preco * valorDeDesconto) / 100;
const precoComDesconto = preco - desconto;
return precoComDesconto;
}

const precoComDesconto = calcularDesconto(preco, valorDeDesconto);
alert(`O valor é ` + precoComDesconto);
