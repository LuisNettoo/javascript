function calcularPromocao() {
    var inRemedio = document.getElementById("inRemedio");
    var inPreco = document.getElementById("inPreco");
    var outRemedio = document.getElementById("outRemedio");
    var outPreco = document.getElementById("outPreco");

    var remedio = inRemedio.value;
    var preco = Math.floor(Number(inPreco.value) * 2)
    
    outRemedio.textContent = "Promoção de " + remedio
    outPreco.textContent = "Leve 2 por apenas R$: " + preco.toFixed(2)
}

var btPromocao = document.getElementById("btPromocao");
btPromocao.addEventListener("click", calcularPromocao);