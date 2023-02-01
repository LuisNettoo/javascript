const inProduto = document.querySelector("#inProduto");
const btAdicionar = document.querySelector("#btAdicionar");
const btLimpar = document.querySelector("#btLimpar");
const outLista = document.querySelector("#outLista");

let produtos = [];

const mostrarProdutos = () => {
  let lista = "Produtos Adicionados\n--------------------";

  for (let i = 0; i < produtos.length; i++) {
    lista += "\n" + produtos.sort()[i];
  }

  outLista.textContent = lista;
  inProduto.value = "";
  inProduto.focus();
};

const mostrarProdutosSalvos = () => {
  if (localStorage.getItem("nomeProduto")) {
    const listaSalva = localStorage.getItem("nomeProduto").split(";");
    for (let i = 0; i < listaSalva.length; i++) {
      produtos.push(listaSalva.sort()[i]);
    }
  }

  mostrarProdutos();
};

const limparLista = () => {
  produtos = [];
  if (localStorage.getItem("nomeProduto")) {
    localStorage.removeItem("nomeProduto");
  }

  mostrarProdutos();
};

const adicionarProdutoStorage = (nome) => {
  if (!localStorage.getItem("nomeProduto")) {
    localStorage.setItem("nomeProduto", nome);
  } else {
    let novoProduto = localStorage.getItem("nomeProduto");
    novoProduto += ";" + nome;
    localStorage.setItem("nomeProduto", novoProduto);
  }
};

const adicionarProduto = () => {
  const nomeProduto = inProduto.value;

  if (nomeProduto == "") {
    alert("Informe um nome válido!");
    inProduto.focus();
    return;
  }

  if (produtos.indexOf(nomeProduto) < 0) {
    produtos.push(nomeProduto);
  } else {
    alert("Esse item já está na lista");
    return;
  }

  adicionarProdutoStorage(nomeProduto);
  mostrarProdutos();
};

mostrarProdutosSalvos();

btAdicionar.addEventListener("click", adicionarProduto);
inProduto.addEventListener("keypress", (tecla) => {
  if (tecla.keyCode == 13) {
    adicionarProduto();
  }
});
btLimpar.addEventListener("click", limparLista);
