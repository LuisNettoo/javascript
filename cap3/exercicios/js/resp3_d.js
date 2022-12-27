function verificarTriangulo() {
    var inLadoA = document.getElementById("inLadoA");
    var inLadoB = document.getElementById("inLadoB");
    var inLadoC = document.getElementById("inLadoC");
    var outLados = document.getElementById("outLados");
    var outTipo = document.getElementById("outTipo");

    var ladoA = Number(inLadoA.value);
    var ladoB = Number(inLadoB.value);
    var ladoC = Number(inLadoC.value);

    if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB) {
        outLados.textContent = "Lados não podem formar um triângulo"
        outTipo.textContent = "";
    } else {
        outLados.textContent = "Lados podem formar um triângulo"
        if (ladoA == ladoB && ladoA == ladoC && ladoB == ladoC) {
            outTipo.textContent = "Tipo: Equilatero"
        } else if (ladoA == ladoB || ladoB == ladoC || ladoC == ladoA) {
            outTipo.textContent = "Tipo: Isósceles"
        } else {
            outTipo.textContent = "Tipo: Escaleno"
        }
    }

}

var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarTriangulo);