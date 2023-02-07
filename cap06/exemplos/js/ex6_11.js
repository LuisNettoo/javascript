const hoje = new Date();
const dia = hoje.getDate();
const mes = hoje.getMonth();
const ano = hoje.getFullYear();
alert(`${hoje}\nData: ${dia}/${(mes + 1)}/${ano}`);