const inNome = document.querySelector("#inNome");
const btGerar = document.querySelector("#btGerar");
const outSenha = document.querySelector("#outSenha");

const validarNome = (nome) => {
  const arrayNome = nome.split(" ");
  let validacao;

  if (arrayNome.lengh < 1) {
    validacao = false;
  } else {
    validacao = true;
  };

  return validacao;
};

const gerarSenha = () => {
  const nomeAluno = inNome.value;

  if (!validarNome(nomeAluno)) {
    alert("Digite o nome completo!");
    inNome.focus();
    return;
  };
};

btGerar.addEventListener("click", gerarSenha);