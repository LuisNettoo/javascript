function criarEstrelas() {
    let inNumero = document.getElementById("inNumero");
    let outResultado = document.getElementById("outResultado");

    let num = Number(inNumero.value);
    let estrelas = "";
    
    let i = 1;
    while (i < num) {
        estrelas = estrelas + "*".repeat(i) + "\n"
        i++
    }
    
    outResultado.textContent = estrelas
}

let btCriar = document.getElementById("btCriar");
btCriar.addEventListener("click", criarEstrelas);