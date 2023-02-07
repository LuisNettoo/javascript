const anoAtual = new Date().getFullYear();
const idade = Number(prompt(`Quantos anos você comemora em ${anoAtual}?`));
const anoNascimento = anoAtual - idade;

alert(`Ah... então você nasceu em ${anoNascimento}.`);