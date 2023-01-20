const inNome = document.querySelector("#inNome");
const btGerar = document.querySelector("#btGerar");
const outCracha = document.querySelector("#outCracha");

btGerar.addEventListener("click", () => {
    const nome = inNome.value;
    
    if (nome == "" || nome.indexOf(" ") == -1) {
        alert("Informe o nome completo do participante!!!");
        inNome.focus();
        return;
    };
    
    const primeiroEspaco = nome.indexOf(" ");
    const ultimoEspaco = nome.lastIndexOf(" ");
    
    let cracha = nome.substr(0, primeiroEspaco) + nome.substr(ultimoEspaco);
    
    outCracha.textContent = cracha;
});
