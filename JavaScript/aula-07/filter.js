// FILTER

// map: sempre retorna um array de mesmo tamanho do array original
// filter: sempre retorna um array de tamanha igual ou inferior ao tamanho do array origial

const valores = [39, 45, 32, 24, 4, 22, 2, 49, 23, 8];

const paresEncontrado = valores.filter((valor) => valor % 2 === 0);

console.log(paresEncontrado);

console.clear;

// Exemplo 1: crie um codigo que obtenha apenas os dados dos alunos que tem media superior a 85,
//            em seguida, imprima os dados deles na tela.

const alunos = [
  { nome: "Quincy", media: 96 },
  { nome: "Jason", media: 84 },
  { nome: "Alexis", media: 100 },
  { nome: "San", media: 65 },
  { nome: "Katie", media: 90 },
];

const alunosComMediaAlta = alunos.filter((aluno) => aluno.media >= 85);

console.log(alunosComMediaAlta);

console.clear();

// Exemplo 2: crie um script filtrar apenas pelos produtos que custam menos de R$10,00 e não são bebidas.

const produtos = [
  { nome: "Suco de Laranja", preco: 7.5, tipo: "Bebida" },
  { nome: "Batata frita", preco: 10.5, tipo: "Comida" },
  { nome: "Pizza", preco: 12.5, tipo: "Comida" },
  { nome: "Chocolate", preco: 1.5, tipo: "Comida" },
  { nome: "Pastel", preco: 4.5, tipo: "Comida" },
  { nome: "Coca-Cola", preco: 6.99, tipo: "Bebida" },
];

const produtosFiltrados = produtos.filter(
  (produto) => produto.preco <= 10 && produto.tipo !== "Bebida"
);

console.log(produtosFiltrados);
