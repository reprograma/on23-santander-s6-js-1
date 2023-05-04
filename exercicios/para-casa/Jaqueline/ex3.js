// Seleciona os elementos do formulário
const precoOriginalInput = document.getElementById("preco-original");
const percentualDescontoInput = document.getElementById("percentual-desconto");
const precoDescontoInput = document.getElementById("preco-desconto");
const calcularDescontoButton = document.getElementById("calcular-desconto");

// Adiciona um ouvinte de evento ao botão "Calcular Desconto"
calcularDescontoButton.addEventListener("click", calcularDesconto);

// Define a função de cálculo de desconto
function calcularDesconto() {
  // Obtém o preço original e o percentual de desconto do formulário
  const precoOriginal = precoOriginalInput.value;
  const percentualDesconto = percentualDescontoInput.value;

  // Calcula o preço com desconto
  const precoComDesconto = precoOriginal * (1 - percentualDesconto / 100);

  // Exibe o preço com desconto no formulário
  precoDescontoInput.value = precoComDesconto.toFixed(2);
}



