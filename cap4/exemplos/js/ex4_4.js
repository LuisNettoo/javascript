do {
    alert("Digite 0 para fechar o programa.")
    num = Number(prompt("Número: "));
    if (num == 0 || isNaN(num)) {
        var sair = confirm("Deseja sair do programa??");
        if (sair) {
            break;
        } else {
            continue;
        }
    }
    if (num % 2 == 0) {
        alert(num * 2)
    } else {
        alert(num * 3)
    }
    
} while (true);

alert("Tchau!!")

