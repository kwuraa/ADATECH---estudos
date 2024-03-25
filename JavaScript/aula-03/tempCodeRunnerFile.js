let notaDoAluno = Number(prompt.question("Informe a nota do aluno: "));

let somaDasNotas = 0; // (variavel) acumuladora
let qtdNotasValidas = 0; // (variavel) contador de notas digitadas

while (notaDoAluno === 0) {
  somaDasNotas = somaDasNotas + notaDoAluno; //incrementador acumudador (somaDasNotas)
  notaDoAluno = Number(prompt.question("Informe a proxima nota: "));
}

console.log("media do aluno: ", somaDasNotas / qtdNotasValidas);
