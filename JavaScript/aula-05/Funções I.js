function saudacao(nomeDoEstudante, curso = "Front-end em React") {
  // Template string || template literals

  return `Olá, ${nomeDoEstudante}! Seja bem-vinda(o) ao curso de ${curso}!`;
}

const mensagemSaudacao = saudacao("Matheus", "Front-end em React"); // Chamada da função

console.log(mensagemSaudacao);

function somar(numero1, numero2) {
  return numero1 + numero2;
}

const resultado = somar(2, 5);

console.log(resultado);
console.log(resultado / 2);
