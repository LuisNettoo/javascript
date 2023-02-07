const inNome = document.querySelector("#inNome");
const btGerar = document.querySelector("#btGerar");
const outSenha = document.querySelector("#outSenha");

const transfomarEmArray = (string) => {
  const array = string.trim().toLowerCase().split(" ");
  
  return array;
};

const validarNome = (nome) => {
  const arrayNome = transfomarEmArray(nome);
  let validacao;
  
  if (arrayNome.length < 2) {
    validacao = false;
  } else {
    validacao = true;
  };

  return validacao;
};

const obterSobrenome = (nome) => {
  const arrayNome = transfomarEmArray(nome);
  const ultimoNome = arrayNome[arrayNome.length - 1];

  return ultimoNome;
};

const contarVogais = (nome) => {
  const arrayNome = transfomarEmArray(nome);
  let nomeCompleto = "";
  
  for (let i = 0; i < arrayNome.length; i++) {
    nomeCompleto += arrayNome[i];
  };
  
  const numVogais = nomeCompleto.match(/[aeiouà-ú]/g).length;
  let vogais = "";

  if (numVogais < 10) {
    vogais = "0" + numVogais;
  } else {
    vogais = numVogais;
  };

  return vogais;
};

const gerarSenha = () => {
  const nomeAluno = inNome.value;

  if (!validarNome(nomeAluno)) {
    alert("Digite o nome completo!");
    inNome.focus();
    return;
  };

  const sobrenome = obterSobrenome(nomeAluno);
  const vogais = contarVogais(nomeAluno);

  outSenha.textContent = sobrenome + vogais
};

btGerar.addEventListener("click", gerarSenha);

export default gerarSenha;