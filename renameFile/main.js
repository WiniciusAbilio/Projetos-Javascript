let fs = require('fs');

function renameList(anime) {
    for (; anime.comeco <= anime.qntdEp; anime.comeco++) {
        if (anime.zeroEsquerda && anime.comeco < 10) {
            anime.comeco = `0${anime.comeco}`;
        }
        let currentName = anime.nomeAntigo.replace('AQUIOH', anime.comeco);
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
    nomeAntigo: "NOME ANTIGO COM AQUIOH",
    nomeNovo: "NOME NOVO",
    tipo: "TIPO DO ARQUIVO",
    comeco: NUMERO QUE COMECA,
    comecoNovo: NUMERO QUE VC QUER Q COMECE,
    qntdEp: QUANTIDADE DE EPISODIOS,
    zeroEsquerda: COM ZERO A ESQUERDA ATE 09
};
 */

const anime = {
    nomeAntigo: "videoplayback (AQUIOH)",
    nomeNovo: "Boruto",
    tipo: "mp4",
    comeco: 1,
    comecoNovo: 156,
    qntdEp: 5,
    zeroEsquerda: false
};

renameList(anime);
