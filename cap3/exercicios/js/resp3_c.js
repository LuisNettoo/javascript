function calcularTempo() {
    var inValor = document.getElementById("inValor");
    var outTempo = document.getElementById("outTempo");
    var outTroco = document.getElementById("outTroco");

    var valor = Number(inValor.value);

    if (valor >= 1) {
        var troco = valor - 1;
        outTempo.textContent = "Tempo: 30min";
    }
    if (valor >= 1.75) {
        var troco = valor - 1.75;
        outTempo.textContent = "Tempo: 60min";
    }
    if (valor >= 3) {
        var troco = valor - 3;
        outTempo.textContent = "Tempo: 120min";
    }
    
    outTroco.textContent = "Troco R$: " + troco;
}

var btConfirmar = document.getElementById("btConfirmar");
btConfirmar.addEventListener("click", calcularTempo);