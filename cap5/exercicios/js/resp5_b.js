const inNumero = document.querySelector("#inNumero");
const btAdicionar = document.querySelector("#btAdicionar");
const btVerificar = document.querySelector("#btVerificar");
const outLista = document.querySelector("#outLista");
const outSituacao = document.querySelector("#outSituacao");

const numeros = [];

const adicionarNumero = () => {
    const numero = Number(inNumero.value);

    numeros.push(numero);

    inNumero.value = "";

    listarNumeros();
};

const listarNumeros = () => {
    let lista = "";
    
    for (let i = 0; i < numeros.length; i++) {
        if (i < numeros.length) {
            lista += numeros[i];
        }
    };

    outLista.textContent = lista;
};

btAdicionar.addEventListener("click", adicionarNumero);