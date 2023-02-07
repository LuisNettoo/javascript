const inNome = document.querySelector("#inNome");
const btGerar = document.querySelector("#btGerar");
const outEmail = document.querySelector("#outEmail");

btGerar.addEventListener("click", () => {
    const nome = inNome.value;

    if (nome == "" || nome.indexOf(" ") == -1) {
        alert("Informe o nome completo do funcionário!!");
        inNome.focus();
        return;
    };

    let partes = nome.split(" ");
    let email = "";
    let tam = partes.length;

    for (let i = 0; i < tam - 1; i++) {
        email += partes[i].charAt(0);
    };

    email += partes[tam-1] + "@empresa.com.br";

    outEmail.textContent = email.toLowerCase();
});