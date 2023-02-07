function decrescerNumero() {
    var inNumero = document.getElementById("inNumero");
    var outNumeros = document.getElementById("outNumeros");

    var numero = Number(inNumero.value);

    var resposta = "Entre " + numero + " e 1: ";

    for (var i = numero; i > 0; i--) {
        if (i == 1) {
            resposta = resposta + i + ". "
        } else {
            resposta = resposta + i + ", "
        }
        
    }

    outNumeros.textContent = resposta;
}

var btDecrescer = document.getElementById("btDecrescer");
btDecrescer.addEventListener("click", decrescerNumero);