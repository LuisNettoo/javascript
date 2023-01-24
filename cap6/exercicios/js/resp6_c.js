const inFrase = document.querySelector("#inFrase");
const btVerificar = document.querySelector("#btVerificar");
const outResposta = document.querySelector("#outResposta");

btVerificar.addEventListener("click", () => {
    const frase = inFrase.value;

    if (frase == "") {
        alert("Digite uma frase válida!!!");
        inFrase.focus();
        return;
    };

    const arrayFrase = frase.split(" ");
    let fraseNormal = arrayFrase.join('') 
    const arrayFraseInversa = frase.split("").reverse();
    let fraseInversa = ""
    for (let i = 0; i < arrayFraseInversa.length; i++) {
        if (arrayFraseInversa[i] != " ") {
            fraseInversa += arrayFraseInversa[i];
        }
    }
   
    if (fraseNormal === fraseInversa) {
        outResposta.textContent = frase.toUpperCase() + " é um Palíndromo";
    } else {
        outResposta.textContent = frase.toUpperCase() + " não é um Palíndromo";
    };
});