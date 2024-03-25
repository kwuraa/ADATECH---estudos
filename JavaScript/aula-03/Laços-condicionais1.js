// * exemplo 1

const prompt = require("readline-sync");

// let saldo = Number(prompt.question("Qual eh o seu saldo? "));

// while (saldo <= 0) {
//   saldo = Number(
//     prompt.question("Saldo invalido! Por favor, digite novamente: ")
//   );
// }
// console.log(saldo);

// * exemplo 2

// let notaDoAluno = Number(prompt.question("Informe a nota do aluno: "));

// let somaDasNotas = 0; // (variavel) acumuladora
// let qtdNotasValidas = 0; // (variavel) contador de notas digitadas

// while (notaDoAluno >= 0) {
//   somaDasNotas += notaDoAluno; // incrementador acumudador (somaDasNotas)
//   qtdNotasValidas++; // Pós-incremento

//   notaDoAluno = Number(prompt.question("Informe a proxima nota: "));
// }

// console.log(somaDasNotas);

// console.log("media do aluno = ", somaDasNotas / qtdNotasValidas);

// * exemplo 3

// const numeroAleatorio = parseInt(Math.random() * 10);

// let numeroTentativas = 0;

// let numeroDoUsuario = Number(
//   prompt.question("Informe um número entre 0 e 10: ")
// );

// while (numeroAleatorio !== numeroDoUsuario) {
//   console.log("Voce errou o numero! Tente novamente...");
//   numeroDoUsuario = Number(prompt.question("Informe um nuemro entre 0 e 10: "));
//   numeroTentativas++;
// }

// console.log(
//   "Parabens! Voce acertou! O numero era ",
//   numeroAleatorio,
//   " em ",
//   numeroTentativas,
//   " tentativas"
// );

// * loop com contador

// let contador = 0;

// while (contador < 5) {
//   console.log(contador);
//   contador++;

//   if (contador === 2) {
//     continue;
//   }

//   console.log("dps do if");
// }

// * DO-WHILE

let saldo;

do {
  saldo = Number(prompt.question("Informe um saldo valido: "));
} while (saldo <= 0);

console.log(saldo);
