function mostrarPrevisao() {
    let inChinchilas = document.getElementById("inChinchilas");
    let inAnos = document.getElementById("inAnos");
    let outResultado = document.getElementById("outResultado");

    let chinchilas = Number(inChinchilas.value);
    let anos = Number(inAnos.value);
    let resultado = "";

    if (chinchilas < 2 || isNaN(chinchilas)) {
        alert("Digite um número maior que dois...");
        inChinchilas.focus();
        return;
    }

    for (let i = 1; i <= anos; i++) {
        resultado = resultado + i + "º Ano: " + chinchilas + " Chinchilas\n";
        chinchilas *= 3;
    }

    outResultado.textContent = resultado;
}


let btPrevisao = document.getElementById("btPrevisao");
btPrevisao.addEventListener("click", mostrarPrevisao);