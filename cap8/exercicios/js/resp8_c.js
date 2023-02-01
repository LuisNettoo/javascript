const inServico = document.querySelector("#inServico");
const btAdicionar = document.querySelector("#btAdicionar");
const btExecutar = document.querySelector("#btExecutar");
const outPendente = document.querySelector("#outPendente");
const outServico = document.querySelector("#outServico");

const adicionarServico = () => {
  const nomeServico = inServico.value;

  if (nomeServico == "") {
    alert("Informe um serviço válido!");
    inServico.focus();
    return;
  }

  if (!localStorage.getItem("listaServicos")) {
    localStorage.setItem("listaServicos", nomeServico);
  } else {
    let novoServico = localStorage.getItem("listaServicos");
    novoServico += ";" + nomeServico;
    localStorage.setItem("listaServicos", novoServico);
  }

  mostrarServico();

  inServico.value = "";
  inServico.focus();
};

const mostrarServico = () => {
  if (localStorage.getItem("listaServicos")) {
    const servicos = localStorage.getItem("listaServicos").split(";");
    outServico.textContent = servicos[0];
    outPendente.textContent = servicos.length - 1;
    console.log(servicos);
  }
};

const executarServico = () => {
  if (localStorage.getItem("listaServicos")) {
    const servicos = localStorage.getItem("listaServicos").split(";");
    servicos.shift();

    outServico.textContent = servicos[0];

    if (servicos.length > 0) {
      outPendente.textContent = servicos.length - 1;
    } else {
      outPendente.textContent = 0;
    }

    let novaLista = "";

    for (let i = 0; i < servicos.length; i++) {
      if (servicos.length > 1) {
        novaLista += servicos[i] + ";";
      } else if (servicos.length == 1) {
        novaLista += servicos[i];
      }
    }

    console.log(servicos);
    if (servicos.length > 0) {
      localStorage.setItem("listaServicos", novaLista);
    } else {
      localStorage.removeItem("listaServicos");
    }
  }
};

mostrarServico();

btAdicionar.addEventListener("click", adicionarServico);
btExecutar.addEventListener("click", executarServico);
