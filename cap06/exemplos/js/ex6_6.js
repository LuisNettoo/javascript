const inSenha = document.querySelector("#inSenha");
const btValidar = document.querySelector("#btValidar");
const outSituacao = document.querySelector("#outSituacao");

btValidar.addEventListener("click", () => {
    const senha = inSenha.value;
    const erros = [];

    if (senha.length < 8 || senha.length > 15) {
        erros.push("possuir entre 8 e 15 caracteres");
    }

    if (!senha.match(/[a-z]/g)) {
        erros.push("possuir letras minúsculas (no mínimo, 1)");
    }

    if (!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length == 1 ) {
        erros.push("possuir letras maiúsculas (no mínimo, 2)");
    }

    if (!senha.match(/\W|_/g)) {
        erros.push("possuir simbolos (no mínimo, 1)");
    }

    if (erros.length == 0) {
        outSituacao.textContent = "Ok, senha válida!";
        outSituacao.classList.remove("invalido")
        outSituacao.classList.add("valido");
    } else {
        outSituacao.textContent = "Erro... A senha deve " + erros.join(", ");
        outSituacao.classList.remove("valido");
        outSituacao.classList.add("invalido");
    };
});