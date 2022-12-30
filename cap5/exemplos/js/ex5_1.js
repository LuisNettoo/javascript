let pacientes = [];

function registrarPaciente() {
    let inNome = document.getElementById("inNome");
    let outLista = document.getElementById("outLista");

    let nome = inNome.value;

    pacientes.push(nome);
    let lista = ""

    for (let i = 0; i < pacientes.length; i++) {
        lista += (i + 1) + ". " + pacientes[i] + "\n";
    }

    outLista.textContent = lista;
    inNome.value = "";
    inNome.focus();

    console.log(pacientes)
}

let btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", registrarPaciente);

function registrarUrgente() {
    let inNome = document.getElementById("inNome");
    let outLista = document.getElementById("outLista");
    let outAtendimento = document.getElementById("outAtendimento");

    let nome = inNome.value;

    pacientes.unshift(nome);
    let lista = ""
    let atender = pacientes.shift();
    outAtendimento.textContent = atender;

    for (let i = 0; i < pacientes.length; i++) {
        lista += (i + 1) + ". " + pacientes[i] + "\n";
    }

    outLista.textContent = lista;
    inNome.value = "";
    inNome.focus();

    console.log(pacientes)
}


let btUrgencia = document.getElementById("btUrgencia");
btUrgencia.addEventListener("click", registrarUrgente);