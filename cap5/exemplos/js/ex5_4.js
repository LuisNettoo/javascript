const inNome = document.querySelector("#inNome");
const inIdade = document.querySelector("#inIdade");
const btAdicionar = document.querySelector("#btAdicionar");
const btListar = document.querySelector("#btListar");
const btResumir = document.querySelector("#btResumir");
const outLista = document.querySelector("#outLista");

let criancas = [];

const adicionarCriancas = () => {
    let nome = inNome.value;
    let idade = Number(inIdade.value);

    if (nome == "" || idade == 0 || isNaN(idade)) {
        alert("Informe os dados corretamente!");
        inNome.focus();
        return;
    };

    criancas.push({
        nome: nome,
        idade: idade,
    });

    inNome.value = "";
    inIdade.value = "";
    inNome.focus();

    listarCriancas();
};

const listarCriancas = () => {
    if (criancas.length == 0) {
        alert("Não a crianças na lista!");
        return;
    };

    let lista = "";

    for (let i = 0; i < criancas.length; i++) {
        lista += `${criancas[i].nome} - ${criancas[i].idade} anos \n`;
    };

    outLista.textContent = lista;
};

const resumirLista = () => {
    if (criancas.length == 0) {
        alert("Não a crianças na lista!");
        return;
    };

    let copia = criancas.slice();
    copia.sort((a, b) => {
        return a.idade - b.idade;
    });

    let resumo = "";

    let aux = copia[0].idade;
    let nomes = [];

    for (let i = 0; i < copia.length; i++) {
        if (copia[i] == aux) {
            nomes.push(copia[i].nome);
        } else {
            resumo += `${aux} anos(s): ${nomes.length} criança(s) - `;
            resumo += `${(nomes.length / copia.length * 100).toFixed(2)}%\n`;
            resumo += `(${nomes.join(", ")})\n\n`;
            aux = copia[i].idade;
            nomes = [];
            nomes.push(copia[i].nome);
        };
    };

    resumo += `${aux} ano(s): ${nomes.length} criança(s) - `;
    resumo += (nomes.length / copia.length * 100).toFixed(2) + "%\n";
    resumo += `(${nomes.join(", ")})\n\n`;

    outLista.textContent = resumo;
};

btAdicionar.addEventListener("click", adicionarCriancas);
btListar.addEventListener("click", listarCriancas);
btResumir.addEventListener("click", resumirLista);