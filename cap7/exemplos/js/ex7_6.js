const inPizza = document.querySelector("#inPizza");
const inBebida = document.querySelector("#inBebida");
const rbPizza = document.querySelector("#rbPizza");
const rbBebida = document.querySelector("#rbBebida");
const btAdicionar = document.querySelector("#btAdicionar");
const outPedido = document.querySelector("#outPedido");
const inDetalhes = document.querySelector("#inDetalhes");

const itens = [];

const trocarItem = () => {
    if (rbPizza.checked) {
        inBebida.className = "oculto";
        inPizza.className = "visivel";
    } else {
        inBebida.className = "visivel";
        inPizza.className = "oculto";
    }
};

const mostrarNumeroSabores = () => {
    if (rbPizza.checked) {
        let pizza = inPizza.value;
        let numero = (pizza == "media") ? 2 : (pizza == "grande") ? 3 : 4;

        inDetalhes.placeholder = "Até " + numero + " sabores";
    }
};

const adicionarItem = () => {
    if (rbPizza.checked) {
            let num = inPizza.selectedIndex;
            var produto = inPizza.options[num].text;
        } else {
            let num = inBebida.selectedIndex;
            var produto = inBebida.options[num].text;
        }
        
        let detalhes = inDetalhes.value; 
        
        itens.push(produto + " (" + detalhes + ")");
        outPedido.textContent = itens.join("\n");
        limparCampos();
};

const limparCampos = () => {
    rbPizza.checked = true;
    inBebida.className = "oculto";
    inPizza.className = "visivel";
    inPizza.selectedIndex = 0; 
    inDetalhes.value = "";
    rbPizza.focus();
}

rbPizza.addEventListener("change", trocarItem);
rbBebida.addEventListener("change", trocarItem);
inDetalhes.addEventListener("focus", mostrarNumeroSabores);
inDetalhes.addEventListener("blur", () => {
    inDetalhes.placeholder = "";
});
inDetalhes.addEventListener("keypress", (tecla) => {
    if(tecla.keyCode == 13) {
        adicionarItem();
    }
})
btAdicionar.addEventListener("click", adicionarItem);