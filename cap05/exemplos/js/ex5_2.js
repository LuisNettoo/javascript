let erros = [];
let sorteado = Math.floor(Math.random() * 100) + 1;
const CHANCES = 6;

console.log(sorteado);

const apostarNumero = () => {
    let inNumero = document.querySelector("#inNumero");
    let numero = Number(inNumero.value);

    if (numero <= 0 || numero > 100 || isNaN(numero)) {
        alert("Digite um número válido...");
        inNumero.focus();
        return;
    };

    let outDica = document.querySelector("#outDica");
    let outErros = document.querySelector("#outErros");
    let outChances = document.querySelector("#outChances");
    
    let btJogar = document.querySelector("#btJogar");

    if (numero == sorteado) {
        alert("Parabens!! você acertou!!!");
        btApostar.disabled = true;
        btJogar.className = "exibir";
        outDica.textContent = `Parabens!! Número sorteado: ${sorteado}`;
    } else {
        erros.push(numero);
        
        let numErros = erros.length;
        let numChances = CHANCES - numErros;

        outErros.textContent = numErros + " (" + erros.join(", ") + ")";
        outChances.textContent = numChances;
        
        if (numChances == 0) {
            alert("Suas chances acabaram! ;(");
            btApostar.disabled = true;
            btJogar.className = "exibir";
            outDica.textContent = `Game Over!!! Número sorteado: ${sorteado}`;
        } else {
            let dica = numero < sorteado ? "maior" : "menor";
            outDica.textContent = `Dica: Tente um número ${dica} que ${numero}`
        } 
    };
};

const jogarNovamente = () => {
    location.reload();
};
