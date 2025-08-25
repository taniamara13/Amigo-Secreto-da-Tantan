//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeAmigos = [];

function adicionarAmigo() {
    let nomeDoAmigo = document.getElementById("amigo").value;
    if (nomeDoAmigo === "") {
        alert("Por favor, insira um nome.");
        return;       
    }
    if (listaDeAmigos.includes(nomeDoAmigo)) {
        alert("Este amigo já foi adicionado.");
        return;
    }
    listaDeAmigos.push(nomeDoAmigo);
    document.getElementById("amigo").value = "";
    atualizarListaDeAmigos();

    console.log(listaDeAmigos);
}
function atualizarListaDeAmigos() {
    let listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = "";
    for (let amigo of listaDeAmigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaHTML.appendChild(li);
    }
}