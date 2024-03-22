// operadores booleanos: comparação

const numero1 = 10;
const numero2 = 12;

console.log(numero1 === numero2); // igual
console.log(numero1 == numero2); // igual
console.log(numero1 == "10");

console.log(numero1 !== "10"); //diferente
console.log(numero1 >= numero2); //maior ou igual que
console.log(numero1 <= numero2); // menor ou igual que

console.log(numero1 > numero2); //maior que
console.log(numero1 < numero2); // menor que

const idadePessoa1 = 16;
const idadePessoa2 = 29;

console.log(idadePessoa1 >= 18 && idadePessoa2 >= 18);
console.log(idadePessoa1 >= 18 || idadePessoa2 >= 18);
