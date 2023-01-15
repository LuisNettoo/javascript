// Referencia de todos os elementos HTML
const inModelo = document.querySelector("#inModelo");
const inPreco = document.querySelector("#inPreco");
const btAdicionar = document.querySelector("#btAdicionar");
const btListar = document.querySelector("#btListar");
const btFiltrar = document.querySelector("#btFiltrar");
const outLista = document.querySelector("#outLista");

let carros = [];

const adicionarCarros = () => {
    const modelo = inModelo.value;
    const preco = Number(inPreco.value);

    carros.push({
        modelo: modelo,
        preco: preco,
    });

    inModelo.value = "";
    inPreco.value = "";
    inModelo.focus();

    listarCarros();
};

const listarCarros = () => {
    if (carros.length == 0) {
        alert("Não a carros ")
    };
};

btAdicionar.addEventListener("click", adicionarCarros);