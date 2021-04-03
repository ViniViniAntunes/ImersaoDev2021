var cartaPaulo = {
    nome: "Seiya de Pegaso",
    atributos: {    
        ataque: 80,
        defesa: 60,
        magia: 90
    },
    imagem: "https://a-static.mlcdn.com.br/618x463/seiya-de-pegaso-heaven-chapter-cavaleiros-do-zodiaco-bandai/mastercollector-limitededitions/8671236314/66cfaf9d67459979f0f8e2e949aedea4.jpg"
}

var cartaRafa = {
    nome: "Bulbasauro",
    atributos: {
        ataque: 70,
        defesa: 65,
        magia: 85
    },
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
}

var cartaGui = {
    nome: "Lord Darth Vader",
    atributos: {
        ataque: 88,
        defesa: 62,
        magia: 90
    },
    imagem: "https://a-static.mlcdn.com.br/618x463/darth-vader-star-wars-desenho-retro-vintage-quadro-conspecto/conspecto/135057/4373745dc9ab38b94fc87f73205af9c8.jpg"
}

var cartaMaquina
var cartaJogador
var cartas = [cartaPaulo, cartaRafa, cartaGui]
            // 0           1           2
function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3)
    cartaMaquina = cartas[numeroCartaMaquina]

    var numeroCartaJogador = parseInt(Math.random() * 3)
    while (numeroCartaJogador == numeroCartaMaquina) {
        var numeroCartaJogador = parseInt(Math.random() * 3)
    }

    cartaJogador = cartas[numeroCartaJogador]
    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
    exibirOpcoes()
}

function exibirOpcoes() {
    var opcoes = document.getElementById('opcoes')
    var opcoesTexto = ""
    for(var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo
    }
    opcoes.innerHTML = opcoesTexto
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function soltaAlerta() {
    var atributoSelecionado = obtemAtributoSelecionado()
    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        alert('Venceu a máquina')
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        alert('Perdeu. Carta da máquina era maior')
    } else {
        alert('Empatou!')
    }    
}

function jogar() {

    var html = ""
    html += "<tr><td><img src='" + cartaJogador.imagem + "' alt='" + cartaJogador.nome + "'></td>"
    html += "<td><img src='" + cartaMaquina.imagem + "' alt='" + cartaMaquina.nome + "' width=400></td></tr>"
    var tabelaCartas = document.getElementById("tabelinha")
    tabelaCartas.innerHTML = html
    // await sleep(2000)
    soltaAlerta()
}