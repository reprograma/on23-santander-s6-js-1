

function calcularprecocomdesconto(valorproduto , percentualpromo) {
    let valorpromo = (valorproduto * percentualpromo) / 100;
    let precopromo = valorproduto - valorpromo;
    return precopromo;
}

console.log(calcularprecocomdesconto(200, 10))