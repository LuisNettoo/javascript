const rbFlamengo = document.getElementById("rbFlamengo");
const rbSampaio = document.getElementById("rbSampaio");
const rbSantos = document.getElementById("rbSantos");

const trocarClube = () => {
  const imgClube = document.getElementById("imgClube");
  const divTitulo = document.getElementById("divTitulo");

  let clube;

  if (rbFlamengo.checked) {
    clube = "Flamengo";
  } else if (rbSampaio.checked) {
    clube = "Sampaio";
  } else {
    clube = "Santos";
  };

  divTitulo.className = "row cores" + clube;

  imgClube.src = `img/${clube.toLocaleLowerCase()}.png`;
  imgClube.className = "exibe";
  imgClube.alt = "Simbolo do " + clube;

  localStorage.setItem("clube", clube);
};

const verificarClube = () => {
  if (localStorage.getItem("clube")) {
    var clube = localStorage.getItem("clube");
  }

  if (clube === "Flamengo") {
    rbFlamengo.checked = true;
  } else if (clube === "Sampaio") {
    rbSampaio.checked = true;
  } else {
    rbSantos.checked = true;
  };

  trocarClube();
};

verificarClube();

rbFlamengo.addEventListener("change", trocarClube);
rbSampaio.addEventListener("change", trocarClube);
rbSantos.addEventListener("change", trocarClube);