const inputsRadio = document.querySelectorAll("input");

const trocarClube = () => {
  const imgClube = document.getElementById("imgClube");
  const divTitulo = document.getElementById("divTitulo");

  let clubes = ["Flamengo", "Sampaio", "Santos"];

  for (let i = 0; i < 4; i++) {
    if (inputsRadio[i].checked) {
      var selecao = i;
      break;
    }
  }

  if (selecao <= 2) {
    divTitulo.className = "row cores" + clubes[selecao];

    imgClube.src = `img/${clubes[selecao].toLocaleLowerCase()}.png`;
    imgClube.className = "exibe";
    imgClube.alt = "Simbolo do " + clubes[selecao];

    localStorage.setItem("clube", clubes[selecao]);
  } else {
    divTitulo.className = "row";
    imgClube.className = "oculta";
    imgClube.alt = "";
    localStorage.removeItem("clube");
  }
};

const verificarClube = () => {
  if (localStorage.getItem("clube")) {
    var clube = localStorage.getItem("clube");
    if (clube === "Flamengo") {
      inputsRadio[0].checked = true;
    } else if (clube === "Sampaio") {
      inputsRadio[1].checked = true;
    } else {
      inputsRadio[2].checked = true;
    }

    trocarClube();
  }
};

verificarClube();

for (let i = 0; i < inputsRadio.length; i++) {
  inputsRadio[i].addEventListener("click", trocarClube);
}
