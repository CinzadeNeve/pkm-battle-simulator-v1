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
    },

    {
        id: 2,
        nome: "Water Gun",
        img: './img/move/Water_Gun.png',
        tipo: ["Água"],
        categoria: "Especial",
        pp: 25,
        poder: 40,
        porcentagem: 100,
        espetaculo:{
            appel: 4,
            jamming: 0,
        },
    },

    {
        id: 3,
        nome: "Water Pulse",
        img: './img/move/Water_Pulse.png',
        tipo: ["Água"],
        categoria: "Especial",
        pp: 20,
        poder: 60,
        porcentagem: 100,
        espetaculo:{
            appel: 3,
            jamming: 0,
        },
    },

    {
        id: 4,
        nome: "Fire Fang",
        img: './img/move/Fire_Fang.png',
        tipo: ["Fogo"],
        categoria: "Físico",
        pp: 15,
        poder: 65,
        porcentagem: 95,
        espetaculo:{
            appel: 4,
            jamming: 0,
        },
    },

    {
        id: 5,
        nome: "Fire Spin",
        img: './img/move/Fire_Spin.png',
        tipo: ["Fogo"],
        categoria: "Especial",
        pp: 15,
        poder: 35,
        porcentagem: 85,
        espetaculo:{
            appel: 3,
            jamming: 0,
        },
    }
]

export default Moves;