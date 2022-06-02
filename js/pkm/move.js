const Moves = [
    {
        id: 0,
        nome: "Switch",
        img: './img/move/Swift.png',
        tipo: "Normal",
        categoria: "Especial",
        pp: 20,
        poder: 60,
        porcentagem: -1,
        espetaculo: {
            appel: 2,
            jamming: 0,
        },

    },

    
    {
        id: 1,
        nome: "Tackle",
        img: './img/move/Tackle.png',
        tipo: ["Normal"],
        categoria: "Físico",
        pp: 35,
        poder: 40,
        porcentagem: 100,
        espetaculo:{
            appel: 4,
            jamming: 0,
        },
    }
]

export default Moves;