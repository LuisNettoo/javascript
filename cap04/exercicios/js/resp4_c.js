function verificarNumero() {
    let inNumero = document.getElementById("inNumero");
    let outDivisores = document.getElementById("outDivisores");
    let outResultado = document.getElementById("outResultado");

    let num = Number(inNumero.value);
    let resul = "";
    let divi = ""

    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            divi = divi + i + ", ";
            resul = Number(resul) + i;
        }
    }

    outDivisores.textContent = "Divisores do " + num + ": " + divi + "(Soma: " + resul + ")";

    if (resul == num) {
        outResultado.textContent = num + " É um Número Perfeito"
    } else {
        outResultado.textContent = num + " Não é um Número Perfeito"
    }
    
}

let btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarNumero);