function verificarPrimo() {
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    var numero = Number(inNumero.value);

    if (numero == 0 || isNaN(numero)) {
        alert("Digite um número válido...");
        inNumero.focus();
        return;
    }

    var numDivisores = 0;

    for (var i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            numDivisores++;
        }
    }

    if (numDivisores == 2) {
        outResposta.textContent = numero + " é Primo."
    } else {
        outResposta.textContent = numero + " não é Primo."
    }

}

var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarPrimo);