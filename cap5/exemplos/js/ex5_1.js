pacientes = [];

function adicionarPaciente() {
    var inNome = document.getElementById("inNome");
    var outAtendimento = document.getElementById("inAtendimento");
    var outLista = document.getElementById("outLista");

    var nome = inNome.value;
    
    if (nome == "") {
        alert("Digite um número válido...");
        inNome.focus();
        return;
    }

    pacientes.push(nome);

    var lista = "";

    for (let i = 0; i < pacientes.length; i++) {
        lista += (i + 1) + ". " + pacientes[i] + "\n";
    }

    outLista.textContent = lista;
    
    inNome.value = "";
    inNome.focus();
} 

var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarPaciente);