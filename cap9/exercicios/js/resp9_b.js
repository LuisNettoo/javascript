const inNome = document.querySelector("#inNome");
const btExibir = document.querySelector("#btExibir");
const outputs = document.querySelector("#outputs");

const criarCor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
};

const exibirNomesColorido = () => {
  const nomeCompleto = inNome.value;

  if (nomeCompleto == "") {
    alert("Digite um nome!");
    inNome.focus();
    return;
  }

  const nomes = nomeCompleto.split(" ");

  for (let i = 0; i < nomes.length; i++) {
    const h3 = document.createElement("h3");
    h3.textContent = nomes[i];

    h3.style.color = criarCor();
    outputs.appendChild(h3);
  }
};

btExibir.addEventListener("click", exibirNomesColorido);
