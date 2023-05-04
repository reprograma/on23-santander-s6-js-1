let valorRecebido = +prompt("Qual o Valor?")
let porcentagemRecebida = +prompt("Qual a porcentagem?")

function desconto(valorProduto, porcentagemProduto) {
    let valorDesconto = valorProduto - valorProduto * porcentagemProduto / 100;

    return valorDesconto;
}

let valorFinal = desconto(valorRecebido, porcentagemRecebida);
console.log("O valor do seu produto com desconto é de: ", valorFinal);
alert("O valor do seu produto com desconto é de " + valorFinal);
