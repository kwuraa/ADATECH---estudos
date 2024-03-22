const prompt = require("readline-sync");

const idade = Number(prompt.question("Qual a sua idade ? "));

const ehMaiorDeIdade = idade >= 18;

// Estrutura condicionais: if/else
if (idade >= 18) {
  console.log("Eh maior de idade!!!");
} else {
  console.log("Eh menor de idade.");
}

// Média >= 7  => Aprovado
// Média < 7 e Média >= 5 => Prova final
// Média < 5 => Reprovado

const nota1 = Number(prompt.question("informe nota 1: "));
const nota2 = Number(prompt.question("informe nota 2: "));
const nota3 = Number(prompt.question("informe nota 3: "));

const mediaDasNotas = (nota1 + nota2 + nota3) / 3;

console.log(mediaDasNotas);

if (mediaDasNotas >= 7) {
  console.log("Aluno aprovado !!!");
} else if (mediaDasNotas >= 5) {
  console.log("Prova final");
} else {
  console.log("Reprovado");
}
// 1. Precisa ser maior de idade
// 2. Precisa ter uma CNH (PPD)

const CNH = prompt.question("Tem CNH? ");

if (CNH === "sim" && idade >= 18) {
  console.log("Pode Dirigir !!");
} else {
  console.log("Não pode Dirigir !!");
}
