var valorConta = Number(prompt("Valor da Conta:"));
var numClientes = Number(prompt("Número de Clientes:"))
var valorCliente = valorConta / numClientes;
alert("Valor da Conta R$: " + valorConta.toFixed(2) + "\nNúmero de Clientes: " + numClientes +"\nValor por cliente R$: " + valorCliente.toFixed(2));