console.log("Fetch API");

//Fetch API

//then || catch

// fetch("https://viacep.com.br/ws/11610130/json/")
//   .then((response) => {
//     response.json().then((data) => console.log(data));
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async || await

async function obterDadosDoCep() {
  try {
    const response = await fetch("https://viacep.com.br/ws/11610130/json/");
    const data = await response.json();

    console.log(data);
  } catch (err) {
    console.log("Deu erro!", err);
  } finally {
    console.log("Terminou a requisição");
  }
}

obterDadosDoCep();
