// Object Literal

const array = ["Matheus", 20, 1.55, true];

const pessoa = {
  nome: "Matheus",
  idade: 20,
  altura: 1.55,
  ehEstudanteDeProgm: true,
  hobbies: ["Play valorant"],
  imprimirAlgo: () => {
    console.log("Opa!!!");
  },
};

console.log(pessoa);
console.clear();

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.hobbies);

delete pessoa.altura;

console.log(pessoa);

console.clear();

pessoa.imprimirAlgo();

const idade = 20;
const altura = 1.55;

const objeto = { idade, altura };

console.log(objeto);

const { nome, hobbies } = pessoa;

console.log(nome);
console.log(hobbies);
console.log(pessoa);
