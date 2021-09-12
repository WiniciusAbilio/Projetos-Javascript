let fs = require('fs');

function renameList(anime) {
    for (; anime.comeco <= anime.qntdEp; anime.comeco++) {

        if (anime.zeroEsquerda && anime.comeco < 10) anime.comeco = `0${anime.comeco}`;

        let currentName = anime.nomeAtual.replace('AQUIOH', anime.comeco);
        let newName = `${anime.comecoNovo} ${anime.nomeNovo}`;

        anime.comecoNovo++;

        fs.rename(`../${currentName}.${anime.tipo}`, `../${newName}.${anime.tipo}`, (err) => {
            if (err) throw err;
            console.log("Arquivo renomeado.");
        });
    }

}

/* 
const anime = {
    nomeAtual: "NOME ATUAL COM AQUIOH",
    nomeNovo: "NOME NOVO",
    tipo: "TIPO DO ARQUIVO",
    comeco: NUMERO QUE COMECA O ARQUIVO,
    comecoNovo: NUMERO QUE O ARQUIVO RECEBERA,
    qntdEp: QUANTIDADE TOTAL DE EPISODIOS OU ONDE TERMINA A CONTAGEM,
    zeroEsquerda: COM ZERO A ESQUERDA ATE 09
};
 */

const anime = {
    nomeAtual: "AQUIOH Vivy Fluorite Eye’s Song",
    nomeNovo: "",
    tipo: "mp4",
    comeco: 5,
    comecoNovo: 4,
    qntdEp: 4,
    zeroEsquerda: false
};

renameList(anime);
