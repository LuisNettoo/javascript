var preco = Number(prompt("Preço R$:"));
var precoVista = preco - preco * 0.10;
var precoParcela = preco / 3;
alert("Preço R$: " + preco.toFixed(2) + "\nÀ vista R$: " + precoVista.toFixed(2) + "\nOu 3x de R$: " + precoParcela.toFixed(2))