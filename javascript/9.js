var contagem = 0
document.querySelector("button").addEventListener("buttones",clicouNoBotao);

function clicouNoBotao() {
    contagem = contagem + 1;
    document.getElementById("buttones").innerHTML = `Cliques: ${contagem}`;
}