// Ultilize sempre o Camel case no JavaScript!

// JavaScript possui tipagem dinâmica: infere os tipos de dados.
// JavaScript possui uma tipagem fraca.

var nome = "Matheus Morais Kawamura"; // string (texto): Ultilize sempre aspas.
var idade = 20; // number int.
var altura = 1.55; // number real.
var estudando = true; // boolean (booleano: veradeiro ou falso)

console.log(nome, typeof nome);

console.log(idade, typeof idade);

console.log(altura, typeof altura);

console.log(estudando, typeof estudando);

var semConteudo; // declarando variavel (sem conteudo)

console.log(semConteudo);

var curso = "Front-end em react",
	topico = "JavaScript Basico I";

console.log(curso, topico);

// ! Não ultilize var em seus códigos JavaScript

let notaDoAluno = 10;
const mediaDoAluno = 8;

notaDoAluno = 9;

// ! mediaDoAluno = 5; não é permitido!!

console.log(notaDoAluno);
