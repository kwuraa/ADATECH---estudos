const btnDiminuir = document.querySelector("#btn-diminuir");
const btnAumentar = document.querySelector("#btn-aumentar");

const contadorEl = document.querySelector("#contador");

const input = document.querySelector("#input");

btnAumentar.addEventListener("click", (event) => {
  const valorAtual = Number(contadorEl.textContent);

  contadorEl.textContent = valorAtual + 1;

  btnAumentar.classList.add("btn");
  btnDiminuir.classList.remove("btn");
});

btnDiminuir.addEventListener("click", (event) => {
  const valorAtual = Number(contadorEl.textContent);

  contadorEl.textContent = valorAtual - 1;

  btnDiminuir.classList.add("btn");
  btnAumentar.classList.remove("btn");
});

input.addEventListener("input", () => {
  console.log(input.value);
});

// Adicionando estilos inline no elemento contador

contadorEl.style.color = "red";
contadorEl.style.padding = "0 2rem";
contadorEl.style.border = "1px solid #aaa";
contadorEl.style.width = "50px";

// Manipular classes

console.log(btnDiminuir.classList);

// btnDiminuir.classList.add("btn");
// btnAumentar.classList.remove("btn");

const themeBtn = document.querySelector("#theme");

let darkTheme;

function switchTheme() {
  const body = document.querySelector("body");

  if (darkTheme) {
    body.style.backgroundColor = "black";
    body.style.color = "white";
  } else {
    body.style.backgroundColor = "white";
    body.style.color = "black";
  }
}

// Definindo uma função que sera executada ao carregar o conteudo da window (página)
window.onload = () => {
  const isDarkThemeStorage = localStorage.getItem("isDarkTheme");

  darkTheme = isDarkThemeStorage === "true";

  switchTheme();
};

themeBtn.addEventListener("click", () => {
  darkTheme = !darkTheme;

  localStorage.setItem("isDarkTheme", darkTheme);

  switchTheme();
});
