//Jogadores
const player1 = {
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0
};

const player2 = {
    NOME: "Peach",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 2,
    PONTOS: 0
};

const player3 = {
    NOME: "Yoshi",
    VELOCIDADE: 2,
    MANOBRABILIDADE: 4,
    PODER: 3,
    PONTOS: 0
};

const player4 = {
    NOME: "Bowser",
    VELOCIDADE: 5,
    MANOBRABILIDADE: 2,
    PODER: 5,
    PONTOS: 0
};

const player5 = {
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0
};

const player6 = {
    NOME: "Donkey Kong",
    VELOCIDADE: 2,
    MANOBRABILIDADE: 2,
    PODER: 5,
    PONTOS: 0
};

// Lógica de jogar os dados
async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
    let random = Math.random()
    let result;

    switch (true) {
        case random < 0.33:
            result = "RETA"
            break;
        case random < 0.66:
            result = "CURVA"
            break;
        default:
            result = "CONFRONTO"
            break;
    }

    return result
}

//
// função para sortear personagen adversário
function selectRandomCharacter() {
    const sort = Math.floor(Math.random() * listPlayers.length);
    return listPlayers[sort]
}

const listPlayers = [ player2, player3, player4, player5, player6];
characterSort = selectRandomCharacter(listPlayers)

async function logRollResult(characterName, block, diceResult, atribut) {
    console.log(` ${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${atribut} = ${diceResult + atribut}`)

}

async function playRaceEngine(character1, characterSort) {
    for (let round = 1; round <= 5; round++) {
        console.log(`🚨 Rodada ${round} 🚨`);

        // sortear bloco
        let block = await getRandomBlock()
        console.log(`🎯 Bloco: ${block}`);


        //Rolar os dados
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        //Teste de habilidade
        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        if (block === "RETA") {
            totalTestSkill1 = diceResult1 + character1.VELOCIDADE
            totalTestSkill2 = diceResult2 + characterSort.VELOCIDADE

            await logRollResult(character1.NOME, "velocidade", diceResult1, character1.VELOCIDADE)
            await logRollResult(characterSort.NOME, "velocidade", diceResult2, characterSort.VELOCIDADE)
        }

        if (block === "CURVA") {
            totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE
            totalTestSkill2 = diceResult2 + characterSort.MANOBRABILIDADE

            await logRollResult(character1.NOME, "manobrabilidade", diceResult1, character1.MANOBRABILIDADE)
            await logRollResult(characterSort.NOME, "manobrabilidade", diceResult2, characterSort.MANOBRABILIDADE)
        }

        // Função para sortear confronto casco(1) ou bomba(2)
        function shellOrBomb() {
            return Math.floor(Math.random() * 2) + 1;
        }

        let ItemResult = await shellOrBomb();


        if (block === "CONFRONTO") {
            let powerResult1 = diceResult1 + character1.PODER
            let powerResult2 = diceResult2 + characterSort.PODER


            await logRollResult(character1.NOME, "poder", diceResult1, character1.PODER)
            await logRollResult(characterSort.NOME, "poder", diceResult2, characterSort.PODER)


            //caso o sorteado seja casco
            if (ItemResult === 1) {
                console.log(`🐢 ${character1.NOME} confrontou com ${characterSort.NOME} 🐢!!!`)

                if (powerResult1 > powerResult2 && characterSort.PONTOS > 0) {
                    console.log(`${character1.NOME} venceu o confronto! ${characterSort.NOME} perdeu um ponto! 🐢`)
                    characterSort.PONTOS--;
                    character1.PONTOS++;

                }

                if (powerResult2 > powerResult1 && character1.PONTOS > 0) {
                    console.log(`${characterSort.NOME} venceu o confronto! ${character1.NOME} perdeu um ponto! 🐢`)
                    character1.PONTOS--;
                    characterSort.PONTOS++;
                }

                console.log(powerResult1 === powerResult2 ? "Confronto empatado! Nenhum jogador perdeu ponto!💥" : "")

                //caso seja boimba
            } else if (ItemResult === 2) {
                console.log(`💣 ${character1.NOME} confrontou com ${characterSort.NOME} 💣!!!`)

                if (powerResult1 > powerResult2 && characterSort.PONTOS > 0) {
                    console.log(`${character1.NOME} venceu o confronto! ${characterSort.NOME} perdeu dois ponto! 💣`)
                    characterSort.PONTOS = characterSort.PONTOS - 2;
                    character1.PONTOS++;

                }

                if (powerResult2 > powerResult1 && character1.PONTOS > 0) {
                    console.log(`${characterSort.NOME} venceu o confronto! ${character1.NOME} perdeu dois pontos! 💣`)
                    character1.PONTOS = character1.PONTOS - 2;
                    character1.PONTOS++;
                }

                console.log(powerResult1 === powerResult2 ? "Confronto empatado! Nenhum jogador perdeu ponto!💥" : "")

            }
        }


        //Verifica o vencedor
        if (totalTestSkill1 > totalTestSkill2) {
            console.log(`⭐ ${character1.NOME} marcou um ponto!`);
            character1.PONTOS++;
        } else if (totalTestSkill2 > totalTestSkill1) {
            console.log(`⭐ ${characterSort.NOME} marcou um ponto!`);
            characterSort.PONTOS++;
        }

        console.log("------------------------------------------")

    }

}

async function declareWinner(character1, characterSort) {
    console.log(" 🔴🟡🟢 Resultado final: 🟢🟡🔴")
    console.log(`${character1.NOME} : ${character1.PONTOS} ponto(s)`)
    console.log(`${characterSort.NOME} : ${characterSort.PONTOS} ponto(s)`)

    if (character1.PONTOS > characterSort.PONTOS) {
        console.log(`\n ${character1.NOME} venceu a corrida! Parabéns 🏆`);
    } else if (characterSort.PONTOS > character1.PONTOS) {
        console.log(`\n ${characterSort.NOME} venceu a corrida! Parabéns 🏆`);
    } else {
        console.log("Corrida termonou em empate! 🏅");
    }
}


//Função Principal - função de entrada
(async function main() {
    console.log(
        `🏁 Corrida entre 🍄 ${player1.NOME} e 🍄 ${characterSort.NOME} começando ... 🚦\n`
    );

    await playRaceEngine(player1, characterSort);
    await declareWinner(player1, characterSort);
})(); //função auto invocável 

