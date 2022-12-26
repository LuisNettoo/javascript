function calcularSaque() {
    var inValor = document.getElementById("inValor");
    var outNota100 = document.getElementById("outNota100");
    var outNota50 = document.getElementById("outNota50");
    var outNota10 = document.getElementById("outNota10");
 
    var valor = Number(inValor.value);

    outNota100.textContent = "";
    outNota50.textContent = "";
    outNota10.textContent = "";

    if (valor == 0 || isNaN(valor)) {
        alert("Digite um número valido");
        inValor.focus()
        return;
    }

    if (valor % 10 != 0) {
        alert("Valor inválido para notas dispóniveis (R$ 10, 50, 100)");
        inValor.focus();
        return;
    }

    var notasCem = Math.floor(valor / 100);
    var resto = valor % 100;
    var notasCinquenta = Math.floor(resto / 50);
    var resto = resto % 50;
    var notasDez = Math.floor(resto / 10);

    if (notasCem > 0) {
        outNota100.textContent = "Notas de R$ 100: " + notasCem;
    }
    if (notasCinquenta > 0) {
        outNota50.textContent = "Notas de R$ 50: " +
        notasCinquenta;
    }
    if (notasDez > 0) {
        outNota10.textContent = "Notas de R$ 10: " + notasDez;
    }

}

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularSaque)