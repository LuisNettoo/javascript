function calcularTotal() {
    var inValor = document.getElementById("inValor");
    var inTempo = document.getElementById("inTempo");
    var outValor = document.getElementById("outValor");

    var valor = Number(inValor.value);
    var tempo = Number(inTempo.value);
    var totalPagar = valor * Math.ceil(tempo / 15)

    outValor.textContent = "Valor a Pagar R$: " + totalPagar.toFixed(2)
}

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularTotal)