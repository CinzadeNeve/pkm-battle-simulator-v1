

const Pokemon = [
    // EEVEE
    {
        nome: "Eevee",
        descricao: "Tem a capacidade de alterar a composição do seu corpo para se adequar ao ambiente circundante.",
        n: 133,
        img: "./img/pkm/gen1/133.gif",
        tipo: ["Normal"],
        altura: "0.3 m",
        peso: "6.5 kg",
        categoria: "Evolução",
        fraqueza: ["Lutador"],
        status: {
            hp: 4,
            ataque: 4,
            defesa: 3,
            sp_ataque: 3,
            sp_defesa: 4,
            velocidade: 4,
        },
    },

    // VAPOREON
    {
        nome: "Vaporeon",
        descricao: "Quando as barbatanas do Vaporeon começam a vibrar, é sinal de que a chuva virá dentro de algumas horas.",
        n: 134,
        img: "./img/pkm/gen1/134.gif",
        tipo: ["Água"],
        altura: "1.0 m",
        peso: "29.0 kg",
        categoria: "Evolução",
        fraqueza: ["Grama", "Elétrico"],
        status: {
            hp: 8,
            ataque: 4,
            defesa: 4,
            sp_ataque: 7,
            sp_defesa: 6,
            velocidade: 4,
        },
    },

    //  JOLTEON
    {
        nome: "Jolteon",
        descricao: "Se estiver irritado ou assustado, a pele por todo o corpo se eriça como agulhas afiadas que perfuram os inimigos.",
        n: 135,
        img: "./img/pkm/gen1/135.gif",
        tipo: ["Elétrico"],
        altura: "0.8 m",
        peso: "24.5 kg",
        categoria: "Relâmpago",
        fraqueza: ["Terra"],
        status: {
            hp: 4,
            ataque: 4,
            defesa: 4,
            sp_ataque: 7,
            sp_defesa: 6,
            velocidade: 8,
        },
    },


]

export default Pokemon;