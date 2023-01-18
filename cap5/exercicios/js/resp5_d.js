const inNoticia = document.querySelector("#inNoticia");
const btAdicionar = document.querySelector("#btAdicionar");
const btListar = document.querySelector("#btListar");
const outNoticiasCadastradas = document.querySelector("#outNoticiasCadastradas");
const outUltimasNoticias = document.querySelector("#outUltimasNoticias");

const noticias = [];

const adicionarNoticia = () => {
    const noticia = inNoticia.value;

    if (noticia == "") {
        alert("Digite uma noticía válida!!");
        inNoticia.value = "";
        inNoticia.focus();
        return;
    };

    noticias.unshift(noticia);
    inNoticia.value = "";
    inNoticia.focus();

    console.log(noticias);
    outNoticiasCadastradas.textContent = noticias.length;
};

const listarNoticias = () => {
    const numeroDesejado = Number(prompt("Quantas notícias você deseja que seja mostradas?"))
    
    if (numeroDesejado == 0 || numeroDesejado > noticias.length) {
        alert("Digite um valor válido!!");
        return;
    };

    let listaNoticias = `${numeroDesejado} Últimas Notícias\n---------------------------------\n`;
    let flag = noticias.length;

    for (let i = 0; i < numeroDesejado; i++) {
        listaNoticias += `${flag}º) ${noticias[i]} \n`;
        flag--;
    };

    outUltimasNoticias.textContent = listaNoticias;
};

btAdicionar.addEventListener("click", adicionarNoticia);
btListar.addEventListener("click", listarNoticias);