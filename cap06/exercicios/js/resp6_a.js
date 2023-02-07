const inMsg = document.getElementById("inMsg");
const btCripto = document.getElementById("btCripto");
const btDescripto = document.getElementById("btDescripto");
const outMsg = document.getElementById("outMsg");

const criptografarMensagem = () => {
    const msg = inMsg.value;
    
    let msgCriptoPar = "";
    let msgCriptoImpar = "";
    const tam = msg.length;

    for (let i = 0; i < tam; i++) {
        if (i % 2 != 0) {
            msgCriptoPar += msg.charAt(i);
        } else {
            msgCriptoImpar += msg.charAt(i);
        };
    };

    outMsg.textContent = msgCriptoPar + msgCriptoImpar;
};

const descriptografarMensagem = () => {
    const msgCripto = inMsg.value;

    let msgDescripto = "";
    const tam = msgCripto.length / 2;
    
    const msgPartePar = msgCripto.substr(0, tam);
    const msgParteImpar = msgCripto.substr(tam);

    for (let i = 0; i < msgCripto.length; i++) {
            msgDescripto += msgParteImpar.charAt(i) + msgPartePar.charAt(i);
    };

    outMsg.textContent = msgDescripto;
};
btCripto.addEventListener("click", criptografarMensagem);
btDescripto.addEventListener("click", descriptografarMensagem);