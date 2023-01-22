const inData = document.querySelector("#inData");
const inConta = document.querySelector("#inConta");
const outMulta = document.querySelector("#outMulta");
const outJuros = document.querySelector("#outJuros");
const outTotal = document.querySelector("#outTotal");
const btCalcular = document.querySelector("#btCalcular");
const btNovaConta = document.querySelector("#btNovaConta");

const TAXA_MULTA = 2 / 100;
const TAXA_JUROS = 0.33 / 100;

const calcularMultaJuros = () => {
    const dataVenci = inData.value;
    const valor = Number(inConta.value);

    if (dataVenci == "" || valor == 0 || isNaN(valor)) {
        alert("Informe os dados corretamente...");
        inData.focus();
        return;
    };

    const hoje = new Date();
    const vencimento = new Date();

    const partes = dataVenci.split("-");
    vencimento.setDate(Number(partes[2]));
    vencimento.setMonth(Number(partes[1]) - 1);
    vencimento.setFullYear(Number(partes[0]));
    
    const atraso = hoje - vencimento;

    let multa = 0;
    let juros = 0;

    if (atraso > 0) {
        const dias = Math.round(atraso / 86400000);
        multa = valor * TAXA_MULTA;
        juros = (valor * TAXA_JUROS) * dias;
    };

    const total = valor + multa + juros;

    outMulta.textContent = multa.toFixed(2);
    outJuros.textContent = juros.toFixed(2);
    outTotal.textContent = total.toFixed(2);
};

btCalcular.addEventListener("click", calcularMultaJuros);