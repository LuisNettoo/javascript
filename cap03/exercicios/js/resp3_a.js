function verificarNumero() {
    var inNumero = document.getElementById("inNumero");
    var outResultado = document.getElementById("outResultado");

    var numero = Number(inNumero.value);

    if (numero == "" || isNaN(numero)) {
        alert("Digite um número");
        inNumero.focus();
        return;
    }

    if (numero % 2 == 0) {
        outResultado.textContent = "Resposta: " + numero + " é Par";
    } else {
        outResultado.textContent = "Resposta: " + numero + " é Ímpar";
    }
}

var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarNumero)