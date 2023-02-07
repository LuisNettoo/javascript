const inNome = document.querySelector("#inNome");
const inNota = document.querySelector("#inNota");
const btAdicionar = document.querySelector("#btAdicionar");
const btListar = document.querySelector("#btListar");
const btAprovados = document.querySelector("#btAprovados");
const outLista = document.querySelector("#outLista");
const outNomeLista = document.querySelector("#outNomeLista");

const candidatos = [];
const notaAprovacao = Number(prompt("Números de Acertos para Aprovação?"))

const adicionarCandidato = () => {
    const nome = inNome.value;
    const numeroAcertos = Number(inNota.value);

    if (nome == "" || isNaN(numeroAcertos)) {
        alert("Por favor, digite os dados corretamente!");
        inNome.focus();
        return;
    };

    candidatos.push({
        nome: nome,
        numeroAcertos: numeroAcertos,
    });

    listarCandidatos();

    inNome.value = "";
    inNota.value = "";
    inNome.focus(); 
};

const listarCandidatos = () => {
    if (candidatos.length == 0) {
        alert("Não existe candidatos na lista!");
        inNome.focus();
        return;
    };
    
    let lista = "";

    for (let i = 0; i < candidatos.length; i++) {
        lista += `${candidatos[i].nome} - ${candidatos[i].numeroAcertos} acertos\n`;
    };

    outNomeLista.textContent = "Lista - Todos os Candidatos";
    outLista.textContent = lista;
};

const listarAprovados = () => {

    let listaAprovados = "";

    for (let i = 0; i < candidatos.length; i++) {
        if (candidatos[i].numeroAcertos >= notaAprovacao) {
            listaAprovados += `${candidatos[i].nome} - ${candidatos[i].numeroAcertos} acertos\n`;
        };
    };

    outLista.textContent = listaAprovados;
    outNomeLista.textContent = "Lista - Candidatos Aprovados";
};

btAdicionar.addEventListener("click", adicionarCandidato);
btListar.addEventListener("click", listarCandidatos);
btAprovados.addEventListener("click", listarAprovados);