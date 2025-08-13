// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombres = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value;

    if (nombre === "") {
        alert("Por favor, escribe un nombre válido");
        return;
    }

    listaNombres.push(nombre);
    mostrarLista();
    input.value = "";
}

function mostrarLista() {
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";

    for (let i = 0; i < listaNombres.length; i++) {
        let li = document.createElement("li");
        li.innerText = listaNombres[i];
        ul.appendChild(li);
    }
}

function sortearAmigo() {
    if (listaNombres.length === 0) {
        alert("La lista está vacía. Agrega nombres antes de sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaNombres.length);
    let amigoSecreto = listaNombres[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    let li = document.createElement("li");
    li.innerText = "Amigo secreto: " + amigoSecreto;
    resultado.appendChild(li);
}
