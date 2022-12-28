function preencherEspacos() {
    let inNumero = document.getElementById("inNumero");
    let outResultado = document.getElementById("outResultado");

    let numero = Number(inNumero.value);
    let resultado = "";

    if (numero == 0 || isNaN(numero)) {
        alert("Digite um número valido...");
        inNumero.focus();
        return;
    }

    for (let i = 1; i <= numero; i++) {
        if (i % 2 == 0) {
            resultado = resultado + "-";
        } else {
            resultado = resultado + "*";
        }
    }

    outResultado.textContent = resultado;
}

let btResultado = document.getElementById("btResultado");
btResultado.addEventListener("click", preencherEspacos);