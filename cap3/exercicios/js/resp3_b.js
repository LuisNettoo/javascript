function calcularMulta() {
    var inPermitida = document.getElementById("inPermitida");
    var inCondutor = document.getElementById("inCondutor");
    var outSituacao = document.getElementById("outSituacao");

    var vpermitida = Number(inPermitida.value);
    var vcondutor = Number(inCondutor.value);
    var multa = vcondutor + (vcondutor * 0.2)
    

    if (vpermitida >= vcondutor) {
        outSituacao.textContent = "Situção: Sem Multa";
    } 
    
    if (vpermitida < vcondutor < multa) {
        outSituacao.textContent = "Situção: Multa Leve";
    } else if (vpermitida < multa) {
        outSituacao.textContent = "Situção: Multa Grave";
    }
}

var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", calcularMulta);