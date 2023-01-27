const inPreco = document.getElementById("inPreco");
const btExibir = document.getElementById("btExibir");
const outParcelas = document.getElementById("outParcelas");

btExibir.addEventListener("click", () => {
    const preco = Number(inPreco.value);

    let lista = "";
    
    for (let i = 1; i <= 10; i++) {
        lista += `${i}x de R$: ${(preco / i).toFixed(2)}\n`;
    };
    
    outParcelas.textContent = "Opções de Pagamento\n\n" + lista;
});