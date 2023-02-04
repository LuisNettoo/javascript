const inSoma = document.getElementById("inSoma");
const divMoedas = document.getElementById("divMoedas");
const btExibir = document.getElementById("btExibir");
const btConferir = document.getElementById("btConferir");

const criarMoedas = (numMoedas, pai, moeda, alt, classe) => {
  for (let i = 1; i <= numMoedas; i++) {
    let novaMoeda = document.createElement("img");
    novaMoeda.src = "./img/" + moeda;
    novaMoeda.alt = alt;
    novaMoeda.className = classe;
    pai.appendChild(novaMoeda);
  }

  let br = document.createElement("br");
  pai.appendChild(br);
};

const adicionarMoedas = () => {
  const num1_00 = Math.ceil(Math.random() * 5);
  const num0_50 = Math.ceil(Math.random() * 5);
  const num0_25 = Math.ceil(Math.random() * 5);
  const num0_10 = Math.ceil(Math.random() * 5);

  const alt1_00 = "Moeda de Um Real";
  const alt0_50 = "Moeda de Cinquenta Centavos";
  const alt0_25 = "Moeda de Vinte e Cinco Centavos";
  const alt0_10 = "Moeda de Dez Centavos";

  criarMoedas(num1_00, divMoedas, "moeda1_00.jpg", alt1_00, "moeda1_00");
  criarMoedas(num0_50, divMoedas, "moeda0_50.png", alt0_50, "moeda0_50");
  criarMoedas(num0_25, divMoedas, "moeda0_25.png", alt0_25, "moeda0_25");
  criarMoedas(num0_10, divMoedas, "moeda0_10.png", alt0_10, "moeda0_10");
};

const conferirSoma = () => {
  const soma = Number(inSoma.value);

  if (soma == 0 || isNaN(soma)) {
    alert("Informe o valor da soma (use ponto para separar decimais)");
    inSoma.focus();
    return;
  }

  const moedas = divMoedas.getElementsByTagName("img");

  let totalMoedas = 0;

  for (let i = 0; i < moedas.length; i++) {
    if (moedas[i].className === "moeda1_00") {
      totalMoedas += 1;
    } else if (moedas[i].className === "moeda0_50") {
      totalMoedas += 0.5;
    } else if (moedas[i].className === "moeda0_25") {
      totalMoedas += 0.25;
    } else {
      totalMoedas += 0.1;
    }
  }

  const div = document.createElement("div");
  const h3 = document.createElement("h3");

  if (soma == totalMoedas.toFixed(2)) {
    div.className = "alert alert-sucess";
    var mensagem = "Parabéns!! Você acertou!";
  } else {
    div.className = "alert alert-danger";
    var mensagem = "Ops... A resposta correta é " + totalMoedas.toFixed(2);
  }

  const texto = document.createTextNode(mensagem);
  h3.appendChild(texto);
  div.appendChild(h3);
  divMoedas.appendChild(div);

  btConferir.disabled = true;
};

adicionarMoedas();

btExibir.addEventListener("click", () => {
  location.reload();
});
btConferir.addEventListener("click", conferirSoma);
