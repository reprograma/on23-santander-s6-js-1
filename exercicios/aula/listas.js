let chamada1 = "Manu"
let chamada2 = "Aline"
let chamada3 = "Eliane"

// LISTA DE STRINGS
let chamada = ["Manu", "Aline", "Eliane"]

// PARA ACESSAR ITEMS DA LISTA - LISTA[INDICE]
chamada[2]
'Eliane'
chamada[0]
'Manu'
chamada[1]
'Aline'

// É POSSÍVEL TER LISTAS COM DADOS DIFERENTES
let ana = ["Morita", 27, true]

// ACESSANDO LISTAS DENTRO DE LISTAS
let listaDeCompras = [
["pão", "queijo", "salame"], ["banana", "maçã", "abacaxi"]
];
listaDeCompras[0][0]
// 'pão'
listaDeCompras[1][2]
// 'abacaxi'
listaDeCompras[1][0]
// 'banana'
console.log(listaDeCompras[0][0], listaDeCompras[1][2])
// pão abacaxi

// OBTER TAMANHO DE LISTA (QUANTIDADE DE ITEMS)
listaDeCompras.length
// 2
ana.length
// 3
listaDeCompras[0][0]
// 'pão'
listaDeCompras[0][1]
// 'queijo'

// TAMBÉM PODEMOS USAR O LENGTH PARA TEXTO (QUANTIDADE DE CARACTERES)
"Ana".length
// 3

// ADICIONAR ITEMS EM LISTA JÁ CRIADA
ana.push("coca cola")
// 4 NOVO TAMANHO DA LISTA
ana
// ['Morita', 27, true, 'coca cola']
ana.push("twice")
// 5
ana
//['Morita', 27, true, 'coca cola', 'twice']

// REMOVER O ULTIMO ITEM DA LISTA
ana.pop()
// 'twice' - ITEM REMOVIDO
ana
// ['Morita', 27, true, 'coca cola']
ana.pop()
// 'coca cola' - ITEM REMOVIDO
ana
// ['Morita', 27, true]

// APAGAR PRIMEIRO ITEM DA LISTA
ana.shift()
// 'Morita'
ana
// [27, true]

// ADICIONAR ITEM NO COMECO DA LISTA
ana.unshift("Morita")
// 3
ana
// ['Morita', 27, true]

// 
ana.splice(0, 1)

// ['Morita']
ana
// [27, true]

let bts = ["RM", "Jin", "Suga", "Jhope", "Jimin", "V", "Jungkook"]

bts.slice(2, 4)
// ['Suga', 'Jhope']
bts
// ['RM', 'Jin', 'Suga', 'Jhope', 'Jimin', 'V', 'Jungkook']