let produto = Number(prompt("Qual o valor do produto?"))

let desconto = Number(prompt("Qual o valor do desconto em porgentagem?"))

function gerardescont(produto, desconto)

{return produto - (produto * desconto) / 100}

alert(gerardescont(produto, desconto))