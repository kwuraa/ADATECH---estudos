const prompt = require("readline-sync");

// expressao 1: inicialização da variavel de controle
// expressao 2: condição de permanencia do for
// expressao 3: encremento da variavel de controle

//for (expressao 1; expressao 2; expressao 3) {
// escopo do for
//}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

// limpando console
console.clear();

// Exemplo

// let maiorNumero = 0;
// let numeroInformado;

// for (let i = 0; i < 5; i++) {
//   numeroInformado = Number(prompt.question("Informe um numero positivo: "));

//   if (numeroInformado > maiorNumero) {
//     maiorNumero = numeroInformado;
//   }
// }

// console.log("Maior numero: ", maiorNumero);

//* Exemplo: percorrendo strings com for

const nome = "Matheus";

for (let i = 0; i < nome.length; i++) {
  console.log(nome[i]);
}

// !! TEMPO DA AULA 26:42 !!!
