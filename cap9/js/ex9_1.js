const inTarefa = document.getElementById("inTarefa");
const btAdicionar = document.getElementById("btAdicionar");
const btSelecionar = document.getElementById("btSelecionar");
const btRetirar = document.getElementById("btRetirar");
const btGravar = document.getElementById("btGravar");
const tarefas = document.getElementsByTagName("h5");
const divQuadro = document.getElementById("divQuadro");

const adicionarTarefa = () => {
  const nomeTarefa = inTarefa.value;

  if (nomeTarefa == "") {
    alert("Informe uma tarefa!");
    inTarefa.focus();
    return;
  }

  const h5 = document.createElement("h5");
  const texto = document.createTextNode(nomeTarefa);
  h5.appendChild(texto);
  divQuadro.appendChild(h5);

  inTarefa.value = "";
  inTarefa.focus();
};

const selecionarTarefa = () => {
  const numeroTarefas = tarefas.length;

  if (numeroTarefas == 0) {
    alert("Não há tarefas para selecionar");
    return;
  }

  let aux = -1;

  for (let i = 0; i < numeroTarefas; i++) {
    if (tarefas[i].className == "tarefaSelecionada") {
      tarefas[i].className = "tarefaNormal";
      aux = i;
      break;
    }
  }

  if (aux == numeroTarefas - 1) {
    aux = -1;
  }

  tarefas[aux + 1].className = "tarefaSelecionada";
};

const retirarTarefa = () => {
  const numeroTarefas = tarefas.length;

  let aux = -1;

  for (let i = 0; i < numeroTarefas; i++) {
    if (tarefas[i].className == "tarefaSelecionada") {
      tarefas[i].className = "tarefaNormal";
      aux = i;
      break;
    }
  }

  if (aux == -1) {
    alert("Selecione uma tarefa, para remove-la!");
    return;
  }

  if (confirm(`Confirma a exclusão de "${tarefas[aux].textContent}"?`)) {
    divQuadro.removeChild(tarefas[aux]);
  }
};

const gravarTarefas = () => {
  const numeroTarefas = tarefas.length;

  if (numeroTarefas == 0) {
    alert("Não há tarefas para serem salvas!");
    return;
  }

  let listaTarefas = "";

  for (let i = 0; i < numeroTarefas; i++) {
    listaTarefas += tarefas[i].textContent + ";";
  }

  localStorage.setItem(
    "tarefasDia",
    listaTarefas.substr(0, listaTarefas.length - 1)
  );

  if (localStorage.getItem("tarefasDia")) {
    alert("OK! Tarefas Salvas.");
  }
};

const recuperarTarefasSalvas = () => {
  if (localStorage.getItem("tarefasDia")) {
    const listaTarefas = localStorage.getItem("tarefasDia").split(";");

    for (let i = 0; i < listaTarefas.length; i++) {
      const h5 = document.createElement("h5");
      const texto = document.createTextNode(listaTarefas[i]);

      h5.appendChild(texto);
      divQuadro.appendChild(h5);
    }
  }
};

recuperarTarefasSalvas();

btAdicionar.addEventListener("click", adicionarTarefa);
btSelecionar.addEventListener("click", selecionarTarefa);
btRetirar.addEventListener("click", retirarTarefa);
btGravar.addEventListener("click", gravarTarefas);
