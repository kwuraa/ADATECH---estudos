let numero = 20; // inferencia de tipo

const pi = 3.14;

let nome: string = "Matheus";

let correta: boolean;

let resultado = numero * pi;

// number[] or array<number>
const numeros = [1, 2, 3, 4, 5];

const num: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const misto: (number | string)[] = [1, 2, "kawamura"]; //! não recomendado!
// ! evite ao maximo ultilizar any!

const idades: number[] = [];
idades.push(23);
idades.push(20);
idades.push(18);
idades.push(17);
idades.push(31);
idades.push(8);
idades.push(10);

const menoresDeIdade = idades.filter((idade) => idade < 18);

console.log(menoresDeIdade);

const pessoaTupla: [string, number] = ["Matheus", 20];

// Object Types

//interface
//tipo customizado
// interface Person {
//   nome: string;
//   idade: number;
//   profissao?: string;
//   altura: number;
// }

type Person = {
  nome: string;
  idade: number;
  altura: number;
  profissao?: string;
};

type MyString = string;

const pessoa: Person = {
  nome: "Matheus Morais Kawamura",
  idade: 20,
  altura: 1.55,
};

pessoa.profissao = "desenvolvedor";

console.log(pessoa);

// Type aliases
type Criterio = "greater" | "lower";

function chooseNumber(num1: number, num2: number, criterio?: Criterio): number {
  switch (criterio) {
    case "greater":
      return num1 > num2 ? num1 : num2;
    case "lower":
      return num1 < num2 ? num1 : num2;
    default:
      const numeroAleatorio = Math.random();

      if (numeroAleatorio >= 0.5) return num1;
      return num2;
  }
}

const numeroEscolhido = chooseNumber(10, 20, "greater");

console.log("numeroEscolhido:", numeroEscolhido);

function somar(num1: number, num2: number): number {
  return num1 + num2;
}

// * Utility Types: A ideia deles é permitir que vc crie novos tipos a partir de tipos já existentes.

// 1. Partial

type PersonPartial = Partial<Person>;

const outraPessoa: PersonPartial = {};

// 2. Required

type PersonRequired = Required<Person>;

// 3. Pick

type PersonPicked = Pick<Person, "nome" | "idade">;

// 4. Omit

type PersonOmit = Omit<Person, "profissao">;

// 5. Exclude

type CriterioExclude = Exclude<Criterio, "greater">;

// 6. Record

type Pessoas = Record<string, Person>;

const pessoas: Pessoas = {
  // Qualquer String
  "123.456.789-00": {
    nome: "Matheus",
    idade: 20,
    altura: 1.55,
  },
  "123.456.789.01": {
    nome: "Camila",
    idade: 21,
    altura: 1.6,
  },
};
