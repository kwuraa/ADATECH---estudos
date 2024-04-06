// map: Ele cria um novo array que possui o "mesmo tamanho do array original"
//composto pelos elementos que foram retornados a cada interação

const numeros = [20, 40, 50, 60, 80, 10];

const arrayNovo = numeros.map((elemento, index, arrayCompleto) => {
  return elemento * 2;
});

console.log(arrayNovo);

// Exemplo 1: Elevando todos os numeros do array ao quadrado.

console.clear();

const valores = [39, 45, 32, 24, 4, 22, 2, 49, 23, 8];

const valoresAoQuadrado = valores.map((valor) => valor ** 2);

console.log(valoresAoQuadrado);

// Exemplo 2: Adicione uma propriedade aos objetos do array

console.clear();

const carrinho = [
  { produto: "feijão", preco: 7.98, quantidade: 3 },
  { produto: "Arroz", preco: 4.99, quantidade: 5 },
  { produto: "Leite 1L", preco: 6.99, quantidade: 2 },
];

const carrinhoComTotal = carrinho.map((itemDoCarrinho) => {
  return {
    ...itemDoCarrinho,
    total: itemDoCarrinho.preco * itemDoCarrinho.quantidade,
  };
});

console.log(carrinhoComTotal);
