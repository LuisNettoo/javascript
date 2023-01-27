const exibirSituacao = (nota, media) => {
    if (nota >= media) {
        alert("Aprovado!");
    } else {
        alert("Reprovado!")
    };
};

let prova1 = Number(prompt("Qual nota: "));

exibirSituacao(prova1, 7);