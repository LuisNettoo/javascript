const inNumero = document.querySelector("#inNumero");
const btAdicionar = document.querySelector("#btAdicionar");
const btVerificar = document.querySelector("#btVerificar");
const outLista = document.querySelector("#outLista");
const outSituacao = document.querySelector("#outSituacao");

const numeros = [];

const adicionarNumero = () => {
    const numero = Number(inNumero.value);

    if (numero == "" || isNaN(numero)) {
        alert("Digite um valor válido!!");
        inNumero.focus();
        inNumero.value = "";
        return;
    };
    
    numeros.push(numero);

    console.log(numeros);
    inNumero.value = "";
    listarNumeros();
};

const listarNumeros = () => {
    let lista = "";
    
    for (let i = 0; i < numeros.length; i++) {
        if ((i + 1) == numeros.length) {
            lista += numeros[i];
        } else {
            lista += numeros[i] + ", ";
        };
    };

    outLista.textContent = lista;
};

const verificarOrdem = () => {
    let copia = [];
    copia = numeros.slice();
    copia.sort();

    let resposta = "";

    if (JSON.stringify(numeros) === JSON.stringify(copia)) {
        resposta = "A lista esta em ordem";
        outSituacao.style.color = "blue";
    } else {
        resposta = "Atenção, a lista não está em ordem!"
        outSituacao.style.color = "red";
    };
    
    outSituacao.textContent = resposta;
    console.log(copia)
};


btAdicionar.addEventListener("click", adicionarNumero);
btVerificar.addEventListener("click", verificarOrdem);
