// Array.prototype.every(): Verifica se tdoso os elementos de um array seguem uma determinada
//                          condição retornada pela função

const numeros = [20, 40, 50, 60, 80, 10];

const todosPositivos = numeros.every((elemento) => elemento > 0);

console.log(todosPositivos);

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

const todosMaioresDeIdade = pessoas.every(
  (pessoa) => pessoa.idade > 18 && pessoa.altura > 1.8
);

console.log(todosMaioresDeIdade);

// Array.prototype.some(): verifica se algum elemento do array torna verdadeira uma determinda
//                          condição retonada pela função

console.clear();

const numeros2 = [-1, 3, 7, -4, 5];

const retorno = numeros2.some((numero) => numero > 0);

console.log(retorno);
