 let preco = prompt ("Digite o valor do produto:")
 let desconto = prompt ("Digite a taxa de desconto:") 
 
 function calcularDesconto() {
     let percentualDesconto = preco * (desconto/100);
     let precoComDesconto = preco - percentualDesconto;
     alert  ("O preço final é: " + precoComDesconto)
    
 }
 calcularDesconto ()




