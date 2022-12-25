function calcularPeso() {
    // Faz referencia dos elementos HTML 
    var inNome = document.getElementById("inNome");
    var rdMasculino = document.getElementById("rdMasculino");
    var rdFeminino = document.getElementById("rdFeminino");
    var inAltura = document.getElementById("inAltura");
    var outSituacao = document.getElementById("outSituacao");

    // Pega os dados informações nos campos de formulario
    var nome = inNome.value;
    var masculino = rdMasculino.checked;
    var feminino = rdFeminino.checked;
    var altura = Number(inAltura.value);
    
    // Verifica se todas as informações estão certas
    if (nome == "" || (masculino == false && feminino == false)) {
        alert("Por favor, informe o nome e selecione o sexo...");
        inNome.focus();
        return;
    }
    if (altura == 0 || isNaN(altura)) {
        alert("Por favor, informe a altura corretamente...");
        inAltura.focus();
        return;
    }
    
    // Calcula os pesos ideais
    if (masculino) {
        var peso = 22 * Math.pow(altura, 2);
    } else {
        var peso = 21 * Math.pow(altura, 2);
    }

    outSituacao.textContent = nome + ": Seu peso ideal é " + peso.toFixed(1) + " kg"
}

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularPeso)

function limparCampos() {
    var inNome = document.getElementById("inNome").value = "";
    var rdMasculino = document.getElementById("rdMasculino").checked = false;
    var rdFeminino = document.getElementById("rdFeminino").checked = false;
    var inAltura = document.getElementById("inAltura").value = "";
    var outSituacao = document.getElementById("outSituacao").textContent = "";

    document.getElementById("inNome").focus();
}

var btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparCampos);