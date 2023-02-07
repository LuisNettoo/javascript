function repetirFruta() {
    let inFruta = document.getElementById("inFruta");
    let inNumero = document.getElementById("inNumero");
    let outResultado = document.getElementById("outResultado");

    let fruta = inFruta.value;
    let num = Number(inNumero.value);

    if (fruta == "" || !isNaN(fruta)) {
        alert("Digite um nome válido...");
        inFruta.value = "";
        inFruta.focus();
        return;
    } else if (num == 0 || isNaN(num)) {
        alert("Digite um número válido...");
        inNumero.focus();
        return;
    }

    console.log(!isNaN(fruta))

    let resultado = "";

    for (let i = 1; i <= num; i++) {
        if (num == i) {
            resultado = resultado + fruta;
        } else {
            resultado = resultado + fruta + " * ";
        }
        
    }

    outResultado.textContent = resultado
}

let btRepetir = document.getElementById("btRepetir");
btRepetir.addEventListener("click", repetirFruta);