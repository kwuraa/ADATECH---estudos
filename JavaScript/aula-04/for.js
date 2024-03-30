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

// const nome = "Matheus";

// for (let i = 0; i < nome.length; i++) {
//   console.log(nome[i]);
// }

const nota1 = 10;
const nota2 = 5;
const nota3 = 7;

const notasDoAluno = [10, 5, 7];
const pessoa = ["Matheus", 20, 1.52, true];

console.log(notasDoAluno[0]);

console.log(pessoa[2]);

console.clear;

console.log(pessoa.length);
console.log(notasDoAluno.length);

console.clear;

// Fatiamento do array

const numeros = [10, 20, 30, 55, 100, 200];

console.log(numeros.slice(0, 2));
console.log(numeros.slice(2));

console.clear;

// Adicionando um elemento no final do array
numeros.push(0);
console.log(numeros);

console.clear;

// Adicionar elemento no inicio do array
numeros.unshift(1000);
console.log(numeros);

console.clear;
// pop: serve para remover elementos no final do array (ultimo elemento)

numeros.pop();
console.log(numeros);
// shift: remover primeiro elemento de um array

numeros.shift();
console.log(numeros);

console.clear();
// Sera que o elemento 20 esta no array?

console.log(numeros.includes(20));
console.log(numeros.includes(5));

if (numeros.includes(20)) {
  console.log("OPA!!! este numero existe dentro do array");
} else {
  console.log("Nao exite este numero no array");
}

const existeONumero20 = numeros.includes(20);

console.clear();

// * IndexOf (Procura o primeiro elemento com o valor informado)

const indexDoElemento200 = numeros.indexOf(200);

console.log(indexDoElemento200);

// * LastIndexOf (Procura o ultimo elemento com o valor informado )

const indexDoElemento40 = numeros.lastIndexOf(200);

console.log(indexDoElemento40);

//! Tempo da aula 52:46
