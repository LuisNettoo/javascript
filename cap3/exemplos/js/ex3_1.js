function calcularMedia() {
    // Pega os dados do aluno no HTML
    var inAluno = document.getElementById("inAluno");
    var inNota1 = document.getElementById("inNota1");
    var inNota2 = document.getElementById("inNota2");
    
    var outMedia = document.getElementById("outMedia");
    var outSituacao = document.getElementById("outSituacao");

    // Transforma os dados em valores para JavaScript
    var aluno = inAluno.value;
    var nota1 = Number(inNota1.value);
    var nota2 = Number(inNota2.value);

    // Calcula a média e a situação
    var media = (nota1 + nota2) / 2;
    outMedia.textContent = "Média das Notas: " + media.toFixed(1);
    if (media >= 7) {
        outSituacao.textContent = "Parabéns " + aluno + "! Você foi aprovado(a)";
        outSituacao.style.color = "blue";
    } else if (media >= 4) {
        outSituacao.textContent = "Atenção " + aluno + ". Você está de reculperação.";
        outSituacao.style.color = "green";
    } else {
        outSituacao.textContent = "Infelizmente você foi reprovado(a), " + aluno + ".";
        outSituacao.style.color = "red";
    }
    
}

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularMedia);