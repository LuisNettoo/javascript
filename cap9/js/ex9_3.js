const inTitulo = document.getElementById("inTitulo");
const inGenero = document.getElementById("inGenero");
const btAdicionar = document.getElementById("btAdicionar");
const btExcluir = document.getElementById("btExcluir");
const tbFilmes = document.getElementById("tbFilme");
const ckTodos = document.getElementById("ckTodos");

const adicionarFilme = () => {
  const titulo = inTitulo.value;
  const genero = inGenero.value;

  if (titulo == "" || genero == "") {
    alert("Informe o título e o gênero corretamente!");
    inTitulo.focus();
    return;
  }

  inserirLinha(tbFilmes);

  inTitulo.value = "";
  inGenero.value = "";
  inTitulo.focus();
};
