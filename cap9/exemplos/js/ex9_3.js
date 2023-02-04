const inTitulo = document.getElementById("inTitulo");
const inGenero = document.getElementById("inGenero");
const btAdicionar = document.getElementById("btAdicionar");
const btExcluir = document.getElementById("btExcluir");
const tbFilmes = document.getElementById("tbFilmes");
const ckTodos = document.getElementById("ckTodos");
const ckExcluir = tbFilmes.getElementsByTagName("input");

const adicionarFilme = () => {
  const titulo = inTitulo.value;
  const genero = inGenero.value;

  if (titulo == "" || genero == "") {
    alert("Informe o título e o gênero corretamente!");
    inTitulo.focus();
    return;
  }

  inserirLinha(tbFilmes, titulo, genero);
  salvarFilme(titulo, genero);

  inTitulo.value = "";
  inGenero.value = "";
  inTitulo.focus();
};

const inserirLinha = (tabela, titulo, genero) => {
  const linha = tabela.insertRow(-1);

  const col1 = linha.insertCell(0);
  const col2 = linha.insertCell(1);
  const col3 = linha.insertCell(2);

  col1.textContent = titulo;
  col2.textContent = genero;
  col3.innerHTML = `<input type="checkbox" />`;
};

const salvarFilme = (titulo, genero) => {
  if (localStorage.getItem("filmesTitulo")) {
    const filmesTitulo = localStorage.getItem("filmesTitulo") + ";" + titulo;
    const filmesGenero = localStorage.getItem("filmesGenero") + ";" + genero;

    localStorage.setItem("filmesTitulo", filmesTitulo);
    localStorage.setItem("filmesGenero", filmesGenero);
  } else {
    localStorage.setItem("filmesTitulo", titulo);
    localStorage.setItem("filmesGenero", genero);
  }
};

const reculperarFilmes = () => {
  if (localStorage.getItem("filmesTitulo")) {
    const titulos = localStorage.getItem("filmesTitulo").split(";");
    const generos = localStorage.getItem("filmesGenero").split(";");

    for (let i = 0; i < titulos.length; i++) {
      inserirLinha(tbFilmes, titulos[i], generos[i]);
    }
  }
};

const removerFilmes = () => {
  let estaSelecionado = false;

  for (let i = 1; i < ckExcluir.length; i++) {
    if (ckExcluir[i].checked) {
      estaSelecionado = true;
      break;
    }
  }

  if (!estaSelecionado) {
    alert("Não há filmes selecionados para exclusão!");
    return;
  }

  if (confirm("Você deseja remover os filmes selecionados?")) {
    localStorage.removeItem("filmesTitulo");
    localStorage.removeItem("filmesGenero");

    for (let i = 1; i < ckExcluir.length; i++) {
      if (!ckExcluir[i].checked) {
        let titulo = tbFilmes.rows[i].cells[0].textContent;
        let genero = tbFilmes.rows[i].cells[1].textContent;

        salvarFilme(titulo, genero);
      }
    }

    for (let i = ckExcluir.length - 1; i > 0; i--) {
      if (ckExcluir[i].checked) {
        tbFilmes.deleteRow(i);
      }
    }

    ckExcluir[0].checked = false;
  }
};

reculperarFilmes();

btAdicionar.addEventListener("click", adicionarFilme);
btExcluir.addEventListener("click", removerFilmes);
ckTodos.addEventListener("change", () => {
  const status = ckTodos.checked;

  for (let i = 0; i < ckExcluir.length; i++) {
    ckExcluir[i].checked = status;
  }
});
