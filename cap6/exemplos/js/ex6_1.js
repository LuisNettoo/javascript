let anuncio = prompt("Anuncio: ").trim();
let tamanho = anuncio.length;
let numPalavras = 0;

for (let i = 0; i < tamanho; i++) {
    if(anuncio.charAt(i) == " ") {
        numPalavras++;        
    };
};

alert(`Anúncio: ${anuncio}\nNº Palavras: ${numPalavras + 1}`);