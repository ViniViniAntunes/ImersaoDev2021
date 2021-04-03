var tentativas = 5
var numeroSecreto
var chute = document.querySelector("#numero")
var bnt = document.querySelector("button")
var tentar = document.querySelector("#tentar")
var ajuda = document.querySelector("#ajuda")

numeroSecreto = parseInt(Math.random() * 30)

function attTentativas() {
    tentar.value = `Número de tentativas: ${tentativas}`
    tentar.innerHTML = tentar.value
}

function attAjudas() {
    ajuda.innerHTML = ajuda.value
}

function jogar() {
    
    while (tentativas > 0) {

        if (chute.value > numeroSecreto) {
            ajuda.value = "O número secreto é menor"
            attAjudas()
            tentativas--
            break
        } else if (chute.value < numeroSecreto) {
            ajuda.value = "O número secreto é maior"
            attAjudas()
            tentativas--
            break
            
        } else if (chute.value == numeroSecreto) {
            ajuda.value = "Você acertou o número secreto!"
            attAjudas()
            break
        }
        
    }
    
    attTentativas()
    if (tentativas <= 0) {
        alert("Você perdeu, tente novamente.")
        
    }
}
