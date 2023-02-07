const inNome = document.querySelector("#inNome");
const inPeso = document.querySelector("#inPeso");
const btApostar = document.querySelector("#btApostar");
const btLimpar = document.querySelector("#btLimpar");
const btVencedor = document.querySelector("#btVencedor");
const outApostas = document.querySelector("#outApostas");

const verApostaExiste = (peso) => {
  if (localStorage.getItem("melanciaPeso")) {
    let pesos = localStorage.getItem("melanciaPeso").split(";");
    if (pesos.indexOf(peso.toString()) >= 0) {
      return true;
    }
  } else {
    return false;
  }
};

const mostrarApostas = () => {
  if (!localStorage.getItem("melanciaNome")) {
    outApostas.textContent = "";
    return;
  }

  const nomes = localStorage.getItem("melanciaNome").split(";");
  const pesos = localStorage.getItem("melanciaPeso").split(";");

  let linhas = "";

  for (let i = 0; i < nomes.length; i++) {
    linhas += nomes[i] + " - " + pesos[i] + "gr \n";
  }

  outApostas.textContent = linhas;
};

const limparApostas = () => {
  if (!localStorage.getItem("melanciaNome")) {
    alert("Não há apostas cadastradas!");
    inNome.focus();
    return;
  }

  if (confirm("Deseja excluir todas as apostas?")) {
    localStorage.removeItem("melanciaNome");
    localStorage.removeItem("melanciaPeso");
  }

  mostrarApostas();
};

const incluirAposta = () => {
  const nome = inNome.value;
  const peso = Number(inPeso.value);

  if (nome == "" || peso == 0 || isNaN(peso)) {
    alert("Informe nome e peso da aposta!");
    inNome.focus();
    return;
  }

  if (verApostaExiste(peso)) {
    alert("Alguém já apostou esse peso, informe outro peso!");
    inPeso.focus();
    return;
  }

  if (localStorage.getItem("melanciaNome")) {
    var melanciaNome = localStorage.getItem("melanciaNome") + ";" + nome;
    var melanciaPeso = localStorage.getItem("melanciaPeso") + ";" + peso;

    localStorage.setItem("melanciaNome", melanciaNome);
    localStorage.setItem("melanciaPeso", melanciaPeso);
  } else {
    localStorage.setItem("melanciaNome", nome);
    localStorage.setItem("melanciaPeso", peso);
  }

  inNome.value = "";
  inPeso.value = "";
  inNome.focus();

  mostrarApostas();
};

const verificarVencedor = () => {
  if (!localStorage.getItem("melanciaNome")) {
    alert("Não há apostas cadastradas");
    return;
  }

  const pesoCorreto = Number(prompt("Qual o peso da melancia?"));

  if (pesoCorreto <= 0 || isNaN(pesoCorreto)) {
    return;
  }

  const nomes = localStorage.getItem("melanciaNome").split(";");
  const pesos = localStorage.getItem("melanciaPeso").split(";");

  let vencedorNome = nomes[0];
  let vencedorPeso = pesos[0];

  for (let i = 1; i < nomes.length; i++) {
    let difVencendor = Math.abs(vencedorPeso - pesoCorreto);
    let difAposta = Math.abs(Number(pesos[i] - pesoCorreto));

    if (difAposta < difVencendor) {
      vencedorNome = nomes[i];
      vencedorPeso = Number(pesos[i]);
    }
  }

  let mensagem = `Resultado - Peso Correto: ${pesoCorreto}gr`;
  mensagem += "\n------------------------------------------";
  mensagem += "\nVencedor: " + vencedorNome;
  mensagem += "\nAposta: " + vencedorPeso + "gr";
  alert(mensagem);
};

mostrarApostas();

btApostar.addEventListener("click", incluirAposta);
btLimpar.addEventListener("click", limparApostas);
btVencedor.addEventListener("click", verificarVencedor);
