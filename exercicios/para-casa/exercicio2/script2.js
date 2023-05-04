// Criar uma função que receba a idade de uma pessoa e 
// diga quais filmes aquela pessoa pode assistir. Use como base o seguinte objeto:

//classificação etária


//acessar classificação etaria de acordo com a idade digitada
//com base nela, listar os filmes que aquela idade pode assistir

let idade = prompt("Digite sua idade");

let filmes = [
  {
    nome: "Deadpool",
    classificacaoEtaria: 18 
  },
  {
    nome: "Your Name",
    classificacaoEtaria: 0
  },
  {
    nome: "Kill Bill",
    classificacaoEtaria: 18
  },
  {
    nome: "Shrek",
    classificacaoEtaria: 0 
  },
  {
    nome: "Matrix ",
    classificacaoEtaria: 14 
  },
  {
    nome: "Você nem imagina",
    classificacaoEtaria: 12
  },
  {
    nome: "Brilho eterno de uma mente sem lembranças",
    classificacaoEtaria: 14
  },
  {
    nome: "Scott Pilgrim contra o mundo",
    classificacaoEtaria: 12
  },
  {
    nome: "Capitão Fantástico",
    classificacaoEtaria: 14
  },
  {
    nome: "El Camino",
    classificacaoEtaria: 16 
  },
  {
    nome: "Parasita",
    classificacaoEtaria: 16 
  },
  {
    nome: "Star Wars: o retorno do jedi",
    classificacaoEtaria: 0
  },
  {
    nome: "Red: crescer é uma fera",
    classificacaoEtaria: 0
  },
  {
    nome: "Ninja Assassino",
    classificacaoEtaria: 18
  },
]

let classificacaoEtaria = filmes[].classificacaoEtaria;

console.log(classificacaoEtaria);

// if (classificacaoEtaria <= idade){
//   let idadesPermitidas = [0,1,2,3,4];
//   console.log(idadesPermitidas);
// }


// function filmesQuePossoAssistirConformeIdade(){
//   let idadesPermitidas = classificacaoEtaria<=idade
// }

// function filmesQuePossoAssistir() {
//     while (classificacaoEtaria<=idade) {
//     return filmes.nome;
//   };
// };

// alert(filmesQuePossoAssistir());


