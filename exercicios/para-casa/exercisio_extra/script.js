// Exercício 

// Prof aqui eu ainda estou querando a cabeça pra descobrir a resposta kk, 
//sei que não era obrigatório, mas queria tentar, até agora sem sucesso D:



let filmes = [{ nome: "Deadpool", classificacaoEtaria: 18 }, 
     { nome: "Your Name", classificacaoEtaria: 0 }, 
     { nome: "Kill Bill", classificacaoEtaria: 18 }, 
     { nome: "Shrek", classificacaoEtaria: 0 }, 
     { nome: "Matrix ", classificacaoEtaria: 14 }, 
     { nome: "Você nem imagina", classificacaoEtaria: 12 }, 
     { nome: "Brilho eterno de uma mente sem lembranças", classificacaoEtaria: 14 }, 
     { nome: "Scott Pilgrim contra o mundo", classificacaoEtaria: 12 }, 
     { nome: "Capitão Fantástico", classificacaoEtaria: 14 }, 
     { nome: "El Camino", classificacaoEtaria: 16 }, 
     { nome: "Parasita", classificacaoEtaria: 16 }, 
     { nome: "Star Wars: o retorno do jedi", classificacaoEtaria: 0 }, 
     { nome: "Red: crescer é uma fera", classificacaoEtaria: 0 }, 
     { nome: "Ninja Assassino", classificacaoEtaria: 18 },]


 function retornarFilmesPorIdade(Idade) {

    if (Idade.classificacaoEtaria >= "18"){
        return nome
    } else if (Idade.classificacaoEtaria >="16"){
        return nome
    } else if (Idade.classificacaoEtaria >="14"){
        return nome
    } else if (Idade.classificacaoEtaria >="12"){
        return nome
    } else {
        return nome
    }

 }

let retornarFilme = filmes.filter(retornarFilmesPorIdade);
retornarFilme.forEach(filme => {
    console.log(filme.nome)
}) 

