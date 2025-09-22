let amigos = [];

function agregarAmigo(){
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombreAmigo);

    mostrarAmigos();

    inputAmigo.value = "";
    inputAmigo.focus();

    
}

function mostrarAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];

        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear. Agrega nombres.");
        return;
    }

    const indiceAleat = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleat];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    const li = document.createElement("li");
    li.textContent = `El amigo secreto es: ${amigoSecreto}`;
    resultado.appendChild(li);
}