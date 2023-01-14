pacientes = [];

const adicionarPaciente = () => {
    let inNome = document.getElementById("inNome");
    let outLista = document.getElementById("outLista");

    let nome = inNome.value;

    if (nome == "") {
        alert("Digite um número válido...");
        inNome.focus();
        return;
    }

    pacientes.push(nome);

    let lista = "";

    for (let i = 0; i < pacientes.length; i++) {
        lista += (i + 1) + ". " + pacientes[i] + "\n";
    };

    outLista.textContent = lista;

    inNome.value = "";
    inNome.focus();
};

let btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarPaciente);

const atenderPaciente = () => {
    if (pacientes.length == 0) {
        alert("Não tem nenhuma paciente na lista de espera");
        return;
    }

    let outAtendimento = document.querySelector("#outAtendimento");
    let outLista = document.getElementById("outLista");

    let atender = pacientes.shift();
    outAtendimento.textContent = atender;

    let lista = "";

    for (let i = 0; i < pacientes.length; i++) {
        lista += (i + 1) + ". " + pacientes[i] + "\n";
    };

    outLista.textContent = lista;
};

let btAtender = document.querySelector("#btAtender");
btAtender.addEventListener("click", atenderPaciente);