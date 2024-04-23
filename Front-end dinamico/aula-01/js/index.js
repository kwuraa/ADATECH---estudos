// Selecionar elementos HTML da nossa pagina ultilizando o document

// 1. Pelo nome da Tag
const todosP = document.getElementsByTagName("p");

console.log(todosP);

// 2. Pelo nome da Classe

const todosParagrafos = document.getElementsByClassName("paragrafo");

console.log(todosParagrafos);

// 3. Pelo Nome (name)

const emailInput = document.getElementsByName("email");

console.log(emailInput);

// 4. Pelo id da tag

const imgSukuna = document.getElementById("sukuna-logo");

console.log(imgSukuna);

// 5. Query selector

const img = document.querySelector("body > img#sukuna-logo");

console.log(img);

const paragrafos1 = document.querySelectorAll("p");

console.log(paragrafos1);

console.clear();

// Acessando | Alterando o conteúdo HTML das tags

const primeiroParagrafo = document.querySelector("p.paragrafo");
console.log(primeiroParagrafo);

console.log("Conteudo: ", primeiroParagrafo.textContent);
console.log("innerHTML:", primeiroParagrafo.innerHTML);

primeiroParagrafo.textContent = "Outra Coisa";
primeiroParagrafo.innerHTML = "<strong> Outra coisa <strong>";

console.clear();

emailInput[0].value = "kawamura@mail.com";

// Criando elementos na pagina HTML

const listaUl = document.querySelector("ul#list");
const litsLis = document.querySelectorAll("ul > li");

const novaTagLi = document.createElement("li"); // Criando uma tag li vazia
novaTagLi.textContent = "Segundo item"; // Coloando um texto dentro da tag li (textContent | innerHTML)

console.log(novaTagLi);

// listaUl.appendChild(novaTagLi);

listaUl.insertBefore(novaTagLi, litsLis[1]);

// removendo elementos do HTML

listaUl.removeChild(novaTagLi);
