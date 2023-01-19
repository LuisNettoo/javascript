const inFruta = document.getElementById("inFruta");
const btMontar = document.getElementById("btMontar");
const outDica = document.getElementById("outDica");

btMontar.addEventListener("click", () => {
    let nomeFruta = inFruta.value;
    
    let dica = "";
    let estrelas = "*";
    let tamanho = nomeFruta.length;

    for (let i = 0; i < tamanho; i++) {
        if (nomeFruta.charAt(i) == nomeFruta.charAt(0)) {
            dica += nomeFruta.charAt(0);
        } else {
            dica += "_";
        };
        estrelas += "*";
    };
    
    outDica.textContent = dica.toUpperCase();
    inFruta.value = estrelas;
});