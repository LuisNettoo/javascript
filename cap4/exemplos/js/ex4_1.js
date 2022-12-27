function mostrarTabuada() {
    var inNumero = document.getElementById("inNumero");
    var outTabuada = document.getElementById("outTabuada");

    var numero = Number(inNumero.value);
    
    if (numero == 0 || isNaN(numero)) {
        alert("Informe um número valido...");
        inNumero.focus();
        return;
    }

    var resposta = "";

    for (var i = 1; i <= 10; i++) {
        resposta = resposta + numero + " x " + i + " = " + numero * i + "\n";
    }

    outTabuada.textContent = resposta;
}

var btTabuada = document.getElementById("btTabuada");
btTabuada.addEventListener("click", mostrarTabuada);