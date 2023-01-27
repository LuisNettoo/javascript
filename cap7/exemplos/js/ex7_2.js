const calularMedia = () => {
    if (arguments.length === 0) {
        alert("Digite no minimo uma nota");
        return;
    };

    let soma = 0;
    const numNotas = arguments.length;

    for (let i = 0; i < numNotas; i++) {
        soma += arguments[i];
    };

    const media = soma / numNotas;
    alert(`Média das Notas: ${media.toFixed(1)}`);
};

calularMedia(6, 6, 9);