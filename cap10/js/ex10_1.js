const inCavalo = document.getElementById("inCavalo");
const inValor = document.getElementById("inValor");
const btApostar = document.getElementById("btApostar");
const btGanhador = document.getElementById("btGanhador");
const btNovo = document.getElementById("btNovo");
const outApostas = document.getElementById("outApostas");
const outCavalo = document.getElementById("outCavalo");

const CAVALOS = ["Marujo", "Tordilho", "Belga", "Twister", "Jade", "Lucky"];

const apostas = [];

const validarCavalo = (num) => {
  const tamanho = CAVALOS.length;

  if (num >= 1 && num <= tamanho) {
    return true;
  } else {
    return false;
  }
};

const obterCavalo = (num) => {
  const posicao = num - 1;
  return CAVALOS[posicao];
};

const contarApostas = (numCavalo) => {
  let contador = 0;

  for (let i = 0; i < apostas.length; i++) {
    if (apostas[i].cavalo == numCavalo) {
      contador++;
    }
  }

  return contador;
};

const totalizarApostas = (numCavalo) => {
  let total = 0;
  for (let i = 0; i < apostas.length; i++) {
    if (apostas[i].cavalo == numCavalo) {
      total += apostas[i].valor;
    }
  }

  return total;
};

const totalizarGeral = () => {
  let total = 0;
  for (let i = 0; i < apostas.length; i++) {
    total = total + apostas[i].valor;
  }
  return total;
};

const mostrarCavalo = () => {
  if (inCavalo.value == "") {
    outCavalo.textContent = "";
    return;
  }

  const cavalo = inCavalo.value;

  if (isNaN(cavalo) || !validarCavalo(cavalo)) {
    outCavalo.textContent = "Número do Cavalo Inválido";
    return;
  }

  const nomeCavalo = obterCavalo(cavalo);
  const numApostas = contarApostas(cavalo);
  const total = totalizarApostas(cavalo);

  outCavalo.textContent = `${nomeCavalo} (Apostas: ${numApostas} - R$ ${total.toFixed(
    2
  )}")`;
};

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

const ganhadorPareo = () => {
  const ganhador = Number(prompt("Nº Cavalo Ganhador: "));

  if (isNaN(ganhador) || !validarCavalo(ganhador)) {
    alert("Cavalo Inválido!");
    return;
  }

  let resumo = "Resumo Final do Páreo\n";
  resumo += "-------------------------------------\n";
  resumo += "Nº Total de Apostas: " + apostas.length + "\n";
  resumo += "Total Geral R$: " + totalizarGeral().toFixed(2) + "\n\n";
  resumo += "Ganhador Nº " + ganhador + " - " + obterCavalo(ganhador) + "\n";
  resumo += "-------------------------------------\n";
  resumo += "Nº de Apostas: " + contarApostas(ganhador) + "\n";
  resumo += "Total Apostado R$: " + totalizarApostas(ganhador).toFixed(2);

  outApostas.textContent = resumo;

  btApostar.disabled = true;
  btGanhador.disabled = true;
  btNovo.focus();
};

btApostar.addEventListener("click", adicionarAposta);
btGanhador.addEventListener("click", ganhadorPareo);
btNovo.addEventListener("click", () => {
  location.reload();
});
inCavalo.addEventListener("blur", mostrarCavalo);
inCavalo.addEventListener("focus", () => {
  inCavalo.value = "";
  outCavalo.textContent = "";
});
