const inIdade = document.querySelector("#inIdade");
const btExibir = document.querySelector("#btExibir");
const btNovas = document.querySelector("#btNovas");
const outputs = document.querySelector("#outputs");

const exibirVelas = () => {
  const idade = inIdade.value;

  if (idade == "" || idade > 120) {
    alert("Digite uma idade menor que 120 anos!");
    inIdade.focus();
    return;
  }

  const algarismos = idade.split("");

  for (let i = 0; i < algarismos.length; i++) {
    const img = document.createElement("img");
    img.src = "img/num" + algarismos[i] + ".png";

    outputs.appendChild(img);
  }
};

btExibir.addEventListener("click", exibirVelas);
btNovas.addEventListener("click", () => {
  location.reload();
});
