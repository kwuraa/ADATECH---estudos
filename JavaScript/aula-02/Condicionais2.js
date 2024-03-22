// Muito util para quando uma variavel possui valores especificos

const permissoes = "admin"; // "aluno" || "professor" || "admin"

switch (permissoes) {
  case "aluno":
    console.log("Você só pode visualizar as aulas.");
    break;
  case "professor":
    console.log("Você pode alterar as aulas e adicionar exercicios.");
    break;
  case "admin":
    console.log("Você pode fazer oq quiser no sistema.");
    break;
  default:
    console.log("Não sei quem você é no sistema.");
}
