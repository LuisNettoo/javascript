const inServico = document.querySelector("#inServico");
const btAdicionar = document.querySelector("#btAdicionar");
const btExecutar = document.querySelector("#btExecutar");
const outPendente = document.querySelector("#outPendente");
const outServico = document.querySelector("#outServico");

const adicionarLocalStorage = (nome) => {
  if (!localStorage.getItem("listaServicos")) {
    localStorage.setItem("listaServicos", nome);
  } else {
    let novoServico = localStorage.getItem("listaServicos");
    novoServico += ";" + nome;
    localStorage.setItem("listaServicos", novoServico);
  }
};

const transformarLista = (key) => {
  const array = localStorage.getItem(`${key}`).split(";");
  return array;
};

const adicionarServico = () => {
  const nomeServico = inServico.value;

  if (nomeServico == "") {
    alert("Informe um serviço válido!");
    inServico.focus();
    return;
  }

  adicionarLocalStorage(nomeServico);
  mostrarServico();

  inServico.value = "";
  inServico.focus();
};

const mostrarServico = () => {
  if (localStorage.getItem("listaServicos")) {
    const servicos = transformarLista("listaServicos");
    outServico.textContent = servicos[0];
    outPendente.textContent = servicos.length - 1;
  }
};

const executarServico = () => {
  if (localStorage.getItem("listaServicos")) {
    const servicos = transformarLista("listaServicos");
    servicos.shift();

    outServico.textContent = servicos[0];

    localStorage.setItem("listaServicos", servicos.join(";"));

    if (servicos.length > 0) {
      outPendente.textContent = servicos.length - 1;
    } else {
      outServico.textContent = "Nenhum";
      outPendente.textContent = 0;
    }
  }
};

executarServico();
mostrarServico();

btAdicionar.addEventListener("click", adicionarServico);
btExecutar.addEventListener("click", executarServico);
