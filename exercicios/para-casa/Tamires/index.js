let preco = prompt("Digite o preço do produto desejado");
let desconto = prompt("Digite o valor do desconto");

function calculoDesconto() {

    valorDesconto = preco * desconto / 100;    
}

function precoFinal() {
    
    precoTotal = preco - valorDesconto;

    alert("O preço será: " + precoTotal);
}

calculoDesconto();
precoFinal();