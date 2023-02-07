function calcularHora() {
    // Cria uma referencia dos elementos HTML
    var inHoraBrasil = document.getElementById("inHoraBrasil");
    var outHoraFranca = document.getElementById("outHoraFranca");

    // Pega o valor de dentro do input 
    var horaBrasil = Number(inHoraBrasil.value);
    
    // Verifica se o valor informado é valido
    if (inHoraBrasil.value == "" || isNaN(horaBrasil)) {
        alert("Informe a hora no Brasil corretamente");
        inHoraBrasil.focus()
        return;
    }

    // Calcula a hora na França
    var horaFranca = horaBrasil + 5;

    if (horaFranca > 23) {
        var horaFranca = horaFranca - 24;
    }

    // Mostra a hora na tela
    outHoraFranca.textContent = "Hora na França: " + horaFranca.toFixed(2);
}

// Cria uma referencia do botão do HTML e adiciona uma função a ele
var btResultado = document.getElementById("btResultado");
btResultado.addEventListener("click", calcularHora);