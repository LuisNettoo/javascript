const inCavalo = document.getElementById("inCavalo");
const inValor = document.getElementById("inValor");
const btApostar = document.getElementById("btApostar");
const outApostas = document.getElementById("outApostas");

const CAVALOS = ["Marujo", "Tordilho", "Belga", "Twister", "Jade", "Lucky"];

const apostas = [];

const adicionarAposta = () => {
  const valor = Number(inValor.value);
  const cavalo = Number(inCavalo.value);

  if (isNaN(valor) || isNaN(cavalo) || valor == 0 || !validarCavalo(cavalo)) {
    alert("Aposta Inválida!");
    inCavalo.focus();
    return;
  }

  apostas.push({ cavalo, valor });

  let lista = "Apostas Realizadas\n-----------------------------------------\n";

  for (let i = 0; i < apostas.length; i++) {
    lista += `Nº ${apostas[i].cavalo} ${obterCavalo(apostas[i].cavalo)}`;
    lista += ` - R$: ${apostas[i].valor.toFixed(2)}\n`;
  }

  outApostas.textContent = lista;

  inCavalo.value = "";
  inValor.value = "";
  inCavalo.focus();
};

btApostar.addEventListener("click", adicionarAposta);
