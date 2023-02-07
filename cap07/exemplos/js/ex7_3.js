const inModelo = document.querySelector("#inModelo");
const inAno = document.querySelector("#inAno");
const inPreco = document.querySelector("#inPreco");
const btCalcular = document.querySelector("#btCalcular");
const outSituacao = document.querySelector("#outSituacao");
const outPreco = document.querySelector("#outPreco");

const classificarVeiculo = (ano) => {
    const anoAtual = new Date().getFullYear();
    let situacao = "";

    if (ano == anoAtual) {
        situacao = "Novo";
    } else if (ano == anoAtual - 1 || ano == anoAtual - 2) {
        situacao = "Seminovo";
    } else {
        situacao = "Usado";
    };

    return situacao;
};

const calcularVenda = (preco, situacao) => {
    const precoVenda = (situacao == "Novo") ? preco * 1.08 : preco * 1.10;
    return precoVenda; 
};

const mostrarDados = () => {
    const modelo = inModelo.value;
    const ano = Number(inAno.value);
    const preco = Number(inPreco.value);

    if (modelo == "" || ano == 0 || preco == 0 || isNaN(ano) || isNaN(preco)) {
        alert("Informe corretamente os dados do veiculo!");
        inModelo.focus();
        return;
    };

    const classificacao = classificarVeiculo(ano);
    const precoVenda = calcularVenda(preco, classificacao);

    outSituacao.textContent = modelo.to + " - " + classificacao;
    outPreco.textContent = precoVenda.toFixed(2);
};

btCalcular.addEventListener("click", mostrarDados);