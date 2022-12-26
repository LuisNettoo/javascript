function calcularRaiz() {
    // Cria uma referencia dos elementos HTML
    var inNumero = document.getElementById("inNumero");
    var outResultado = document.getElementById("outResultado");

    var numero = Number(inNumero.value);
    
    if (numero == 0 || isNaN(numero)) {
        alert("Digite um número valido");
        inNumero.focus()
        return;
    }

    var raiz = Math.sqrt(numero);

    if (raiz == Math.floor(raiz) ) {
        outResultado.textContent = "Raiz: " + raiz;
    } else {
        outResultado.textContent = "Não há raiz exata para " + numero;
    }

}

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularRaiz)