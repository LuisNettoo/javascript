const inNome = document.querySelector("#inNome");
const btGerar = document.querySelector("#btGerar");
const outReferencia = document.querySelector("#outReferencia");

btGerar.addEventListener("click", () => {
    const nome = inNome.value;

    const nomes = nome.split(" ");
    const tamanho = nomes.length 
    let referencia = "";
    referencia += nomes[tamanho - 1].toUpperCase() + ", ";

    for (let i = 0; i < tamanho; i++) {

        if (i < tamanho - 1) {
            referencia += nomes[i].charAt(0).toUpperCase() + ". ";
    }};
    
    outReferencia.textContent = referencia;
});