function calcularDesconto() {
    
    let box1 = document.getElementById("box1");
    let box2 = document.getElementById("box2");
    let res = document.getElementById('res')

    let preco = Number(box1.value)
    let taxaDesconto = Number(box2.value)
    let desconto = taxaDesconto / 100
    let valorFinal = preco - (preco * desconto)

    if (box1.value.length == 0 || box2.value.length == 0) {
        alert('ERRO! COMPLETE TODOS OS CAMPOS.')
    } else {
        res.innerHTML = `Você deve pagar R$${valorFinal}`
    }
}
