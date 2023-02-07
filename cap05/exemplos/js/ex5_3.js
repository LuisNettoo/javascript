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

    if (modelo == "" || preco == 0 || isNaN(preco)) {
        alert("Digite valores válidos...");
        inModelo.focus();
        return;
    };

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
        alert("Não a carros na lista!")
    };

    let lista = "";

    for (let i = 0; i < carros.length; i++) {
        lista += `${carros[i].modelo} - R$: ${carros[i].preco.toFixed(2)} \n`; 
    };

    outLista.textContent = lista;
};

const filtrarCarros = () => {
    const maximo = Number(prompt("Qual o valor máximo o que o cliente deseja pagar?"));

    if (maximo == 0 || isNaN(maximo)) {
        return;
    };

    let lista = "";

    for (let i = 0; i < carros.length; i++) {
        if (carros[i].preco <= maximo) {
            lista += `${carros[i].modelo} - R$: ${carros[i].preco.toFixed(2)} \n`;
        }
    };

    if (lista == "") {
        outLista.textContent = "Não há carros com o preço até R$ " + maximo.toFixed(2);
    } else {
        outLista.textContent = `Carros até R$ ${maximo.toFixed(2)}\n-----------------------------\n${lista}`;
    };
};

btAdicionar.addEventListener("click", adicionarCarros);
btListar.addEventListener("click", listarCarros);
btFiltrar.addEventListener("click", filtrarCarros);