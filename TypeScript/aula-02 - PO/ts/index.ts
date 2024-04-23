// Aula 02 - POO

interface IPessoa {
  nome: string;
  idade: number;
  altura: number;

  dormir: () => void;
}

// Classe: abstração
// Definindo a abstração de uma pessoa

class Pessoa implements IPessoa {
  // atributos: caracteristicas
  nome: string;
  idade: number;
  altura: number;
  private _cpf: string;

  //metodos: ação (funções)

  //metodo construtor
  constructor(nome: string, idade: number, altura: number, cpf: string) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    this._cpf = cpf;
  }

  dormir() {
    console.log("dormindo... 😴");
  }

  // acessor: getter
  get cpf(): string {
    return this._cpf;
  }

  // acessor: setter
  set cpf(newCpf: string) {
    if (newCpf.length !== 14) {
      // lançando um error
      throw new Error("CPF length is incorrect!");
    }
    this._cpf = newCpf;
  }
}

// extends: herança
// Classe (Professor) herdando atributos de (Pessoa)
class Professor extends Pessoa {
  matricula: string;

  constructor(
    nome: string,
    altura: number,
    idade: number,
    cpf: string,
    matricula: string
  ) {
    super(nome, idade, altura, cpf);
    this.matricula = matricula;
  }

  ensinar() {
    console.log("Ensinando... ✍️");
  }
}

// Criando uma pessoa (individuo/objeto) a partir da definição da classe Pessoa

const pessoa1 = new Pessoa("Matheus", 20, 1.55, "192.16.799-00");
const pessoa2 = new Pessoa("Camila", 20, 1.6, "192.16.222-02");

console.log(pessoa1);
pessoa1.cpf;
console.log(pessoa2);
pessoa2.dormir();

pessoa1.cpf = "192.168.156-00";

console.log(pessoa1.cpf);

// Objeto da classe Professor
const professor = new Professor("Sabrina", 1.5, 53, "123.567.890-10", "11610");

console.log(professor);
professor.dormir();
professor.ensinar();

// Polimorfismo

console.log(pessoa1 instanceof Pessoa); // true
console.log(pessoa1 instanceof Professor); // false

console.log(professor instanceof Pessoa); // true
console.log(professor instanceof Professor); // true
