const fs = require("fs");
const { promises } = require("stream");

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

// console.log("ANTES do set timeout...");

// setTimeout(() => {
//   console.log("isso aqui vai ser executado apos 2 sec");
// }, 2 * 1000);

// console.log("DEPOIS do settimeout");

//* 2. PROMISES (promessas)

// console.log("antes da criação da promise...");

function lerArquivoPromise() {
  return new Promise((resolve, reject) => {
    fs.readFile(
      "JavaScript/aula-08/arquivo.txt",
      (erro, consteudoDoArquivo) => {
        if (erro) {
          reject("Ocorreu um erro ao tentar ler o arquivo! ", erro);
        } else {
          resolve(String(consteudoDoArquivo));
        }
      }
    );
  });
}

// ! Foco a partir daqui...

// lerArquivoPromise()
//   .then((retornoDoResolveDaPromise) => {
//     console.log("Deu certo!", retornoDoResolveDaPromise);
//   })
//   .catch((erro) => {
//     console.log("deu ruim:", erro);
//   })
//   .finally(() => {
//     console.log(
//       "isso aqui vai ser execudado, idependente do sucesso ou fracasso da promessa"
//     );
//   });

// * 3. async/await

async function leituraDeDados() {
  console.log("isso era executado ANTES da promise ser resolvida!");

  try {
    const retornoDaPromesa = await lerArquivoPromise(); // espera a promessa ser resolvida para avançar no código

    console.log(retornoDaPromesa);

    console.log("isso era executado DEPOIS da promise ser resolvida!");
  } catch (err) {
    console.log(err);
    console.log("isso aqui é executado depois da promise (com erro). ");
  } finally {
    console.log("Dentro do finally!");
  }
}
leituraDeDados();
