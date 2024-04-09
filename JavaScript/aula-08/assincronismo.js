const fs = require("fs");

// * 1. Callbacks

// console.log("ANTES de ler o arquivo ...");

// !Função assincrona (ler um arquivo leva tempo)
// fs.readFile("JavaScript/aula-08/arquivo.txt", (erro, consteudoDoArquivo) => {
//   if (erro) {
//     console.log("Ocorreu um erro ao tentar ler o arquivo: ", erro);
//   } else {
//     console.log(String(consteudoDoArquivo));
//   }
// });

// console.log("DEPOIS de ler o arquivo ...");

// Exemplo 02: setTimeout (função que cria um timer)

console.log("ANTES do set timeout...");

setTimeout(() => {
  console.log("isso aqui vai ser executado apos 2 sec");
}, 2 * 1000);

console.log("DEPOIS do settimeout");

//! Tempo de aula 30:00
