const pacelas = Number(prompt("Quantas pacelas? "));
let lista = "";
let dia, mes, ano, diaZero, mesZero;

const data = new Date();

for (let i = 1; i <= pacelas; i++) {
    data.setMonth(data.getMonth() + 1);
    dia = data.getDate();
    mes = data.getMonth() + 1;
    ano = data.getFullYear();

    diaZero = dia < 10 ? "0" + dia : dia;
    mesZero = mes < 10 ? "0" + mes : mes;

    lista += `${i}ª Parcela ${diaZero}/${mesZero}/${ano}\n`;
};

alert(lista);