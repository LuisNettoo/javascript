const inData = document.querySelector("#inData");
const inMulta = document.querySelector("#inMulta");
const btCalcular = document.querySelector("#btCalcular");
const outData = document.querySelector("#outData");
const outMulta = document.querySelector("#outMulta");

const calcularMulta = () => {
    const dataInfracao = inData.value;
    const dataArray = dataInfracao.split("-")
    
    const multa = Number(inMulta.value);
    const desconto = multa - (multa * 0.2);
    
    const data = new Date();
    data.setDate(dataArray[2]);
    data.setMonth(dataArray[1] - 1 + 3);
    data.setFullYear(dataArray[0]);

    outData.textContent = data.toLocaleDateString();  
    outMulta.textContent = desconto.toFixed(2);
};

btCalcular.addEventListener("click", calcularMulta);