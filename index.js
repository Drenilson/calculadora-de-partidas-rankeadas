// Calculadora de partidas rankadas

const vitorias = 59;
const derrotas = 2;
const totalVitorias = estimativaVitorias(vitorias, derrotas);
const rankFinal = rankamento(totalVitorias);

function estimativaVitorias(parA, parB) {
    return parA - parB;    
};

function rankamento(totalVitorias) {
    let rank;

    if (totalVitorias < 10) {
        rank = "Ferro.";
    } else if (totalVitorias >= 11 && totalVitorias <= 20) {
        rank = "Bronze.";
    } else if (totalVitorias >= 21 && totalVitorias <= 50) {
        rank = "Prata.";
    } else if (totalVitorias >= 51 && totalVitorias <= 80) {
        rank = "Ouro.";
    } else if (totalVitorias >= 81 && totalVitorias <= 90) {
        rank = "Diamante.";
    } else if (totalVitorias >= 91 && totalVitorias <= 100) {
        rank = "Lendário (Um milagre?)";
    } else if (totalVitorias >= 101) {
        rank = "Imortal";
    } else {
        rank = "Teria sido melhor assistir o filme do Pelé!";
    }

    return rank;
};

console.log(`O Herói tem de saldo de ${totalVitorias} e está no nível: ${rankFinal}.`);