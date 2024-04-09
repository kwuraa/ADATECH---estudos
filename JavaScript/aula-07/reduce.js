//REDUCE

const numeros = [1, 2, 3, 4, 5];

const soma = numeros.reduce((acumulador, elemento, _, arrayCompleto) => {
  return elemento / arrayCompleto.length + acumulador;
}, 0);

console.log(soma);

const somandoOsPares = numeros.reduce((acumulador, numero) => {
  // * se o número for par
  if (numero % 2 === 0) {
    return numero + acumulador;
  } else {
    return acumulador;
  }
}, 0);

console.clear();
console.log(somandoOsPares);

// * Total a pagar do carrinho

const carrinho = [
  { produto: "feijão", preco: 7.98, quantidade: 3 },
  { produto: "Arroz", preco: 4.99, quantidade: 5 },
  { produto: "Leite 1L", preco: 6.99, quantidade: 2 },
];

const totalPagar = carrinho.reduce((acumulador, item) => {
  return item.preco * item.quantidade + acumulador;
}, 0);

console.clear();
console.log(totalPagar);
