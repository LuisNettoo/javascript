const inNome = document.querySelector("#inNome");
const inIdade = document.querySelector("#inIdade");
const btCategorizar = document.querySelector("#btCategorizar");
const outCategoria = document.querySelector("#outCategoria");

const retornarTracos = (nome) => {
  const tamanhoNome = nome.length;

  let tracos = "";

  for (let i = 0; i < tamanhoNome; i++) {
    if (nome.charAt(i) !== " ") {
      tracos += "-";
    } else {
      tracos += " ";
    };
  };

  return tracos;
};

const categorizarAluno = (idade) => {
  const idadeAluno = idade;
  let categoriaAluno;

  if (idadeAluno <= 12) {
    categoriaAluno = "Infatil";
  } else if (idadeAluno > 12 && idadeAluno < 18) {
    categoriaAluno = "Juventil";
  } else {
    categoriaAluno = "Adulto";
  };

  return categoriaAluno;
};

const cadastrarAluno = () => {
  const nomeAluno = inNome.value;
  const idadeAluno = Number(inIdade.value);

  let alunoInfo = nomeAluno + "\n";
  alunoInfo += retornarTracos(nomeAluno) + "\n";
  alunoInfo += "Categoria: " + categorizarAluno(idadeAluno);

  outCategoria.textContent = alunoInfo;
};

btCategorizar.addEventListener("click", cadastrarAluno);