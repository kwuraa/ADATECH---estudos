// Funções de alta ordem - ARRAYS

//* 1. Array.prototype.forEach();

const numeros = [10, 20, 40, 60, 80, 100];

numeros.forEach((elemento, index, arrayCompleto) => {
  console.log(index, elemento, arrayCompleto);
});

console.clear();

//* 2. Array.prototype.find(): Util para encontrar um elemento do array

const encontrado = numeros.find((numero) => {
  return numero === 10;
});

console.log(encontrado);

// array de objetos
const pessoas = [
  {
    nome: "Pessoa 1",
    idade: 20,
    altura: 1.55,
  },
  {
    nome: "Pessoa 2",
    idade: 21,
    altura: 1.7,
  },
  {
    nomes: "Pessoa 3",
    idade: 52,
    altura: 1.4,
  },
];

const pessoaEncontrada = pessoas.find(
  (pessoa) => pessoa.idade > 20 && pessoa.altura < 1.9
);

console.log(pessoaEncontrada);

//* 3. Array.prototype.findIndex(): Muito parecido com o find()
//*                                porém retorna o índice do elemento econtrado

const indicePessoaEncontrada = pessoas.findIndex(
  (pessoa) => pessoa.idade > 60 && pessoa.altura < 1.9
);

console.log(indicePessoaEncontrada);
