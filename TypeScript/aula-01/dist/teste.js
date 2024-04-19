"use strict";
let numero = 20; // inferencia de tipo
const pi = 3.14;
let nome = "Matheus";
let correta;
let resultado = numero * pi;
// number[] or array<number>
const numeros = [1, 2, 3, 4, 5];
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const misto: (number | string)[] = [1, 2, "kawamura"]; //! não recomendado!
// ! evite ao maximo ultilizar any!
const idades = [];
idades.push(23);
idades.push(20);
idades.push(18);
idades.push(17);
idades.push(31);
idades.push(8);
idades.push(10);
const menoresDeIdade = idades.filter((idade) => idade < 18);
console.log(menoresDeIdade);
const pessoaTupla = ["Matheus", 20];
const pessoa = {
    nome: "Matheus Morais Kawamura",
    idade: 20,
    altura: 1.55,
};
pessoa.profissao = "desenvolvedor";
console.log(pessoa);
function chooseNumber(num1, num2, criterio) {
    switch (criterio) {
        case "greater":
            return num1 > num2 ? num1 : num2;
        case "lower":
            return num1 < num2 ? num1 : num2;
        default:
            const numeroAleatorio = Math.random();
            if (numeroAleatorio >= 0.5)
                return num1;
            return num2;
    }
}
const numeroEscolhido = chooseNumber(10, 20, "greater");
console.log("numeroEscolhido:", numeroEscolhido);
