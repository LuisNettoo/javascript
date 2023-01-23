const inMsg = document.getElementById("inMsg");
const btCripto = document.getElementById("btCripto");
const btDescripto = document.getElementById("btDescripto");
const outMsg = document.getElementById("outMsg");

const criptografarMensagem = () => {
    const msg = inMsg.value;
    
    let msgCriptoPar = "";
    let msgCriptoImpar = "";
    const tam = msg.length - 1;

    for (let i = 0; i < tam; i++) {
        if (i % 2 != 0) {
            msgCriptoPar += msg.charAt(i);
        } else {
            msgCriptoImpar += msg.charAt(i);
        };
    };

    outMsg.textContent = msgCriptoPar + msgCriptoImpar;
};

btCripto.addEventListener("click", criptografarMensagem);
btDescripto.addEventListener("click", () => {
    outMsg.textContent = inMsg.value;
});