const inClube = document.querySelector("#inClube");
const btAdicionar = document.querySelector("#btAdicionar");
const btListar = document.querySelector("#btListar");
const btTabela = document.querySelector("#btTabela");
const outLista = document.querySelector("#outLista");

const clubes = [];

const adicionarClube = () => {
    const clube = inClube.value;
    
    if (clube == "") {
        alert("Informe o dado corretamente!");
        inClube.focus();
        return;
    };

    clubes.push(clube);

    inClube.value = "";
    inClube.focus();
    console.log(clubes);
    listarClubes();
};

const listarClubes = () => {
    if (clubes.length == 0) {
        alert("Não há clubes na lista!");
        inClube.focus();
        return;
    };

    let lista = "";

    for (let i = 0; i < clubes.length; i++) {
        lista += `${(i + 1)}. ${clubes[i]} \n`;
    };

    outLista.textContent = lista;
};

const montarJogos = () => {
    if (clubes.length % 2 != 0) {
        alert("Precisa ter um número par de clubes para fazer um campeonato!");
        inClube.focus();
        return;
    };

    let jogos = "";

    for (let i = 0; i < (clubes.length / 2); i++) {
        jogos += clubes[i] + " x " + clubes[clubes.length - (i + 1)] + "\n";
    };

    outLista.textContent = jogos;
};

btAdicionar.addEventListener("click", adicionarClube);
btListar.addEventListener("click", listarClubes);
btTabela.addEventListener("click", montarJogos);