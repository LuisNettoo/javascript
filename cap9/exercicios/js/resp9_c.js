const inClube = document.querySelector("#inClube");
const btAdicionar = document.querySelector("#btAdicionar");
const btMostrar = document.querySelector("#btMostrar");
const btNovos = document.querySelector("#btNovos");
const outClubes = document.querySelector("#outClubes");
const tbJogos = document.querySelector("#tbJogos");

const adicionarClube = () => {
  const clube = inClube.value;

  if (clube == "") {
    alert("Digite o nome do clube");
    inClube.focus();
    return;
  }

  const h5 = document.createElement("h5");
  h5.textContent = clube;
  outClubes.appendChild(h5);

  inClube.value = "";
  inClube.focus();
};

const criarLinha = (tabela, clube1, clube2) => {
  const linha = tabela.insertRow(-1);

  const col1 = linha.insertCell(0);
  const col2 = linha.insertCell(1);
  const col3 = linha.insertCell(2);

  col1.textContent = clube1;
  col2.textContent = "x";
  col3.textContent = clube2;
};

const montarTabela = () => {
  const listaClubes = document.querySelectorAll("h5");

  if (listaClubes.length % 2 != 0) {
    alert(
      "Você precisa de um número par de clubes, para montar um campeonato!"
    );

    return;
  }

  for (let i = 0; i < listaClubes.length; i++) {
    if (i % 2 == 0) {
      criarLinha(
        tbJogos,
        listaClubes[i].textContent,
        listaClubes[i + 1].textContent
      );
    }
  }
};

btAdicionar.addEventListener("click", adicionarClube);
btMostrar.addEventListener("click", montarTabela);
