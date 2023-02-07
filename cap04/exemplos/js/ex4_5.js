var numContas = 0;
var valTotal = 0;

var resposta = ''

function registrarConta() {
    var inConta = document.getElementById("inConta");
    var inValor = document.getElementById("inValor");
    var outListaConta = document.getElementById("outListaConta");
    var outTotal = document.getElementById("outTotal");
    
    var conta = inConta.value;
    var valor = Number(inValor.value);

    if (conta == '' || valor == 0 || isNaN(valor)) {
        alert("Informações inválidas. Tente Novamente!")
        inConta.focus()
        return;
    }

    numContas++;
    valTotal = valTotal + valor;

    resposta = resposta + conta + " - R$: " + valor.toFixed(2) + "\n";

    outListaConta.textContent = resposta + "---------------------------------"
    outTotal.textContent = numContas + " Conta(s) - Total R$: " + valTotal.toFixed(2);
    
    inConta.value = "";
    inValor.value = "";
    inConta.focus()
}

var btRegistrar = document.getElementById("btRegistrar");
btRegistrar.addEventListener("click", registrarConta);