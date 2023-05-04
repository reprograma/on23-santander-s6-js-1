/* EXERCICIO
Escrever um programa que receba um e-mail e uma senha e só permita que o login seja feito quando o e-mail for teste@reprograma.com e a senha seja teste123, caso um deles esteja errado escrever uma mensagem de erro e perguntar e-mail e senha novamente até o usuário acertar.
*/

/*  PASSO A PASSO

- CRIAR VARIAVEL DE EMAIL CORRETO COM TESTE@REPROGRAMA.COM.BR
- CRIAR VARIAVEL DE SENHA CORRETA COM TESTE123
- PEDIR PRO USUARIO DIGITAR O EMAIL E GUARDAR NUMA VARIAVEL
- PEDIR PRO USUARIO DIGITAR A SENHA E GUARDAR NUMA VARIAVEL
- ENQUANTO SENHA DIGITADA OU EMAIL DIGITADO FOREM DIFERENTES DOS CORRETOS FAZER:
  - COLOCAR MENSAGEM DE ERRO
  - PEDIR PARA DIGITAR NOVAMENTE A SENHA E GUARDAR NA VARIAVEL
  - PEDIR PARA DIGITAR NOVAMENTE O EMAIL E GUARDAR NA VARIAVEL
*/

let emailCadastrado = 'teste@reprograma.com.br';
let senhaCadastrada = 'teste123';

let emailDigitado = prompt('Por favor digite seu e-mail');
let senhaDigitada = prompt('Por favor digite sua senha');
let tentativas = 4;

while ((emailDigitado !== emailCadastrado || senhaDigitada !== senhaCadastrada) && tentativas > 0) {
  // CASOS QUE ENTRA NO LOOP
  // senha diferente
  // email diferente
  // email e senha diferente
  alert('Informações de login inválidas');
  senhaDigitada = prompt('Digite sua senha novamente');
  emailDigitado = prompt('Digite seu email novamente');
  tentativas--;
}
// senha e email corretos
if (tentativas = 0) {
  alert('Conta bloqueada!. Você excedeu o número de tentativas.')
} else {
  alert('Parabéns, login realizado')
}

// VERSAO COM FOR -> THANKS SKY <3
// let emailCadastrado = 'teste@reprograma.com.br';
// let senhaCadastrada = 'teste123';

// let emailDigitado = prompt('Por favor digite seu e-mail');
// let senhaDigitada = prompt('Por favor digite sua senha');

let tentativa
for (tentativa = 1; (emailDigitado !== emailCadastrado || senhaDigitada !== senhaCadastrada) && tentativa < 5; tentativa++) {
  alert("Info inválida")
  emailDigitado = prompt("Email: ")
  senhaDigitada = prompt("Senha: ")
}
if (tentativa == 5) {
 alert("Não pode mais logar")
}
else {
  alert("Vc logou")
}
