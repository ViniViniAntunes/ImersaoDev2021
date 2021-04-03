var vini = {
    nome: "Vini",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
}

var cris = {
    nome: "Cris",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
}

function calculaPontos(jogador) {
    var pontos = (jogador.vitorias * 3) + jogador.empates
    return pontos
}

// console.log(cris.pontos)
cris.pontos = calculaPontos(cris)
vini.pontos = calculaPontos(vini)
// console.log(cris.pontos) 

var jogadores = [cris, vini]

function exibirJogadoresNaTela(jogadores) {
    var html = ""
    for(var i = 0; i < jogadores.length; i++) {
        jogadores[i].pontos = calculaPontos(jogadores[i])
        html += "<tr><td>" + jogadores[i].nome + "</td>"
        html += "<td>" + jogadores[i].vitorias + "</td>"
        html += "<td>" + jogadores[i].empates + "</td>"
        html += "<td>" + jogadores[i].derrotas + "</td>"
        html += "<td>" + jogadores[i].pontos + "</td>"
        html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
    }
    var tabelaJogadores = document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = html
}

exibirJogadoresNaTela(jogadores)

function adicionarVitoria(i) {
    var jogador = jogadores[i]
    jogador.vitorias++
    if (i == 0) {
        var adversario = jogadores[i + 1]
    } else {
        var adversario = jogadores[i - 1]
    }
    adversario.derrotas++
    exibirJogadoresNaTela(jogadores)
}

function adicionarEmpate(i) {
    var jogador = jogadores[i]
    jogador.empates++
    if (i == 0) {
        var adversario = jogadores[i + 1]
    } else {
        var adversario = jogadores[i - 1]
    }    
    adversario.empates++
    exibirJogadoresNaTela(jogadores)
}

function adicionarDerrota(i) {
    var jogador = jogadores[i]
    jogador.derrotas++
    if (i == 0) {
        var adversario = jogadores[i + 1]
    } else {
        var adversario = jogadores[i - 1]
    }
    adversario.vitorias++
    exibirJogadoresNaTela(jogadores)
}