const inValor = document.querySelector("#inValor");
const inConvenio = document.querySelector("#inConvenio");
const btCalcular = document.querySelector("#btCalcular");
const outDesconto = document.querySelector("#outDesconto");
const outPagar = document.querySelector("#outPagar");
const rbSim = document.querySelector("#rbSim");
const rbNao = document.querySelector("#rbNao");
const inSelect = document.querySelector("#inSelect");

const ativarDesconto = () => {
  
  if (rbSim.checked) {
    inSelect.classList.add("mostrar");
    inSelect.classList.remove("ocultar");
  } else {
    inSelect.classList.add("ocultar");
    inSelect.classList.remove("mostrar");
  };
};

const calcularDesconto = (valor) => {
  let desconto;

  if (inSelect.classList.contains("mostrar")) {
    if (inConvenio.value == "amigos") {
      desconto = 20/100;
    } else if (inConvenio.value == "saude") {
      desconto = 50/100;
    }
  } else {
    desconto = 0;
  }
  
  const valorDescontado = valor * desconto;

  return valorDescontado.toFixed(2);
};

const mostrarValor = () => {
  const valorInicial =  Number(inValor.value);
  const valorDesconto = calcularDesconto(valorInicial);
  const valorPagar = valorInicial - valorDesconto;

  outDesconto.textContent = valorDesconto;
  outPagar.textContent = valorPagar.toFixed(2);
};

rbSim.addEventListener("change", ativarDesconto);
rbNao.addEventListener("change", ativarDesconto);
btCalcular.addEventListener("click", mostrarValor);