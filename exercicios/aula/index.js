// let emailDigitado = prompt('Digite um e-mail');
// let emailCadastrado = 'on23@reprograma.com.br';
// while (emailDigitado !== emailCadastrado) {
//     alert('Email não encontrado')
//     emailDigitado = prompt('Digite novamente o e-mail')
// }

// // let emailDigitado = prompt('Digite um e-mail');
// // let emailCadastrado = 'on23@reprograma.com.br';
// if (emailDigitado !== emailCadastrado) {
//     alert('Email não encontrado')
//     emailDigitado = prompt('Digite novamente o e-mail')
// }
// if (emailDigitado !== emailCadastrado) {
//     alert('Email não encontrado')
//     emailDigitado = prompt('Digite novamente o e-mail')
// }
// if (emailDigitado !== emailCadastrado) {
//     alert('Email não encontrado')
//     emailDigitado = prompt('Digite novamente o e-mail')
// }
// if (emailDigitado !== emailCadastrado) {
//     alert('Email não encontrado')
//     emailDigitado = prompt('Digite novamente o e-mail')
// }

let emailCadastrado = "anabia@repro.com.br";
let senhaCadastrada = "teste123";	
let tentativas = 5;

let emailDigitado = prompt("Qual o seu e-mail?");
let senhaDigitada = prompt("Qual a sua senha?");

while ((emailCadastrado !== emailDigitado || senhaCadastrada  !==  senhaDigitada) && tentativas > 0 ) {
//CASOS QUE ENTRAM NO LOOP
//SENHA ERRADA
//EMAIL ERRADO
//AMBOS ERRADOS
    alert("Informações de login incorretas");
    senhaDigitada = prompt("Digite novamente a sua senha");
    emailDigitado = prompt("Digite seu e-mail novamente");
    tentativas--;
};
if (tentavis = 0){
    alert("Você execedeu o limite de tentativas")
} else {
alert("Acertou mizeravi")}