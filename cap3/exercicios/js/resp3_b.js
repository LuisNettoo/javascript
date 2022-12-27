function calcularMulta() {
    var inPermitida = document.getElementById("inPermitida");
    var inCondutor = document.getElementById("inCondutor");
    var outSituacao = document.getElementById("outSituacao");

    var veloPermitida = Number(inPermitida.value);
    var veloCondutor = Number(inCondutor.value);
    var multaGrave = veloPermitida + (veloPermitida * 0.2);
    

    if (veloPermitida >= veloCondutor) {
        outSituacao.textContent = "Situação: Sem Multa";
    } else if (veloCondutor > veloPermitida) {
        outSituacao.textContent = "Situação: Multa Leve";
        if (veloCondutor > multaGrave) {
            outSituacao.textContent = "Situação: Multa Grave";
        }
    }

}

var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", calcularMulta);