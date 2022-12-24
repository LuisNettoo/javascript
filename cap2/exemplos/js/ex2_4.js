function calcularConsumo() {
    var inQuilo = document.getElementById("inQuilo");
    var inConsumo = document.getElementById("inConsumo");
    var outValor = document.getElementById("outValor");

    var quilo = Number(inQuilo.value);
    var consumo = Number(inConsumo.value);
    var valor = (quilo * consumo) / 1000

    outValor.textContent = "Valor a pagar R$: " + valor.toFixed(2);
}

var btPreco = document.getElementById("btPreco");
btPreco.addEventListener("click", calcularConsumo)