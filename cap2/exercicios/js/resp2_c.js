function calcularPromocao() {
    // Trazendo todos os valores obtidos no HTML para variaveis
    var inProduto = document.getElementById("inProduto");
    var inPreco = document.getElementById("inPreco");
    var outPreco = document.getElementById("outPreco");
    var outPromocao = document.getElementById("outPromocao");

    // Transformando as variaveis em valores para o JavaScript
    var produto = inProduto.value;
    var preco = Number(inPreco.value);

    // Calculando a promoção
    var promocao = preco * 2 + (preco * 0.5)

    // Imprimindo os resultados na tela
    outPreco.textContent = produto + " - Promoção: Leve 3 por R$: " + promocao.toFixed(2)
    outPromocao.textContent = "O 3º produto custa apenas R$: " + (preco * 0.5).toFixed(2)
}

// Passando a função para o botão
var btPromocao = document.getElementById("btPromocao");
btPromocao.addEventListener("click", calcularPromocao)
