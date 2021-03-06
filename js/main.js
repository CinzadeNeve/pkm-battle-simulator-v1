import Move from './pkm/move.js';
import Pokemon from './pkm/pkms.js';


import DisabledComandBattle from './components/battle/DisabledComandBattle.js';
import EnableComandBattle from './components/battle/EnableComandBattle.js';


let PokemonPrincipal = {
    pokemon: 37,
    nome: "",
    move_1: 6,
    move_2: 7,
    stats: {
        hp_max: 0,
        hp: 0,
        atk: 0,
        atk_sp: 0,
        def: 0,
        def_sp: 0,
        speed: 0,
    },

    setMoves: function(mov1, mov2){
        this.move_1 = mov1;
        this.move_2 = mov2;
    },

    setPokemon: function(num){
        this.pokemon = num;
    },

    setNome: function(nome){
        this.nome = nome;
    },
    getNome: function(){
        return(this.nome);
    },

    //HP
    setHp: function(hp){
        this.stats.hp = hp;
    },
    getHp: function(){
        return(this.stats.hp);
    },



    //HP Max
    setHpMax: function(hpMax){
        this.stats.hp_max = hpMax;
    },
    getHpMax: function(){
        return(this.stats.hp_max);
    },

    //Ataque
    setAtk: function(atk){
        this.stats.atk = atk;
    },
    getAtk: function(){
        return(this.stats.atk);
    },

    //Defesa
    setDef: function(def){
        this.stats.def = def;
    },
    getDef: function(){
        return (this.stats.def);
    },

    //Ataque Especial
    setAtkSp: function(atk_sp){
        this.stats.atk_sp = atk_sp;
    },
    getAtkSp: function(){
        return (this.stats.atk_sp);
    },

    //Defesa Especial
    setDefSp: function(def_sp){
        this.stats.def_sp = def_sp;
    },
    getDefSp: function(){
        return (this.stats.def_sp);
    },

    //Velocidade
    setSpd: function(spd){
        this.stats.speed = spd;
    },
    getSpd: function(){
        return (this.stats.speed);
    }
}

let PokemonOponente = {
    nome: "",
    move1: 0,
    move2: 0,
    stats: {
        hp_max: 0,
        hp: 0,
        atk: 0,
        atk_sp: 0,
        def: 0,
        def_sp: 0,
        speed: 0,
    },

    setNome: function(nome){
        this.nome = nome;
    },

    getNome: function(){
        return(this.nome);
    },

    setMove1: function(move){
        this.move1 = move;
    },

    setMove2: function(move){
        this.move2 = move;
    },

    //HP
    setHp: function(hp){
        this.stats.hp = hp;
    },
    getHp: function(){
        return(this.stats.hp);
    },



    //HP Max
    setHpMax: function(hpMax){
        this.stats.hp_max = hpMax;
    },
    getHpMax: function(){
        return(this.stats.hp_max);
    },

    //Ataque
    setAtk: function(atk){
        this.stats.atk = atk;
    },
    getAtk: function(){
        return(this.stats.atk);
    },

    //Defesa
    setDef: function(def){
        this.stats.def = def;
    },
    getDef: function(){
        return (this.stats.def);
    },

    //Ataque Especial
    setAtkSp: function(atk_sp){
        this.stats.atk_sp = atk_sp;
    },
    getAtkSp: function(){
        return (this.stats.atk_sp);
    },

    //Defesa Especial
    setDefSp: function(def_sp){
        this.stats.def_sp = def_sp;
    },
    getDefSp: function(){
        return (this.stats.def_sp);
    },

    //Velocidade
    setSpd: function(spd){
        this.stats.speed = spd;
    },
    getSpd: function(){
        return (this.stats.speed);
    }
}




const PokemonSelvagens = [
    {
        Pokemon: 133,
        Moves:{
            move1: 0,
            move2: 1,
        },
    },
    {
        Pokemon: 134,
        Moves: {
            move1: 2,
            move2: 3,
        }
    },
    {
        Pokemon: 136,
        Moves: {
            move1: 4,
            move2: 5,
        }
    }
]





const loadingScreen = () =>{
    
    Pokemon.forEach((i)=>{
        if(i.n === PokemonPrincipal.pokemon){

            // Carregando image do Pok??mon
            if(document.querySelector('.battle .container-header .your-pkm img')){
                document.querySelector('.battle .container-header .your-pkm img').attributes.src.nodeValue = i.img;
            }


            // Carregando nome do Pok??mon
            if(document.querySelector('.battle .container-header .your-status .info p')){
                document.querySelector('.battle .container-header .your-status .info p').innerText = i.nome;
            }

            PokemonPrincipal.setHp(i.status.hp*100);
            PokemonPrincipal.setHpMax(i.status.hp*100);
            PokemonPrincipal.setAtk(i.status.ataque);
            PokemonPrincipal.setDef(i.status.defesa);
            PokemonPrincipal.setAtkSp(i.status.sp_ataque);
            PokemonPrincipal.setDefSp(i.status.sp_defesa);
            PokemonPrincipal.setSpd(i.status.velocidade);
            PokemonPrincipal.setNome(i.nome);

            if(document.getElementById('move-1')){
                document.getElementById('move-1').style.backgroundImage = `url(${Move[PokemonPrincipal.move_1].img})`;
            }
            if(document.getElementById('move-2')){
                document.getElementById('move-2').style.backgroundImage = `url(${Move[PokemonPrincipal.move_2].img})`;
            }
        }
    })

}

const loadingPkmSelvagem = async (img, icon, name, n, move1, move2) =>{
    if(document.querySelector('.container-content .name-pkm p')){
        document.querySelector('.container-content .name-pkm p').innerText = name;
    }

    if(document.querySelector('.container-content .content-info-pkm')){
        document.querySelector('.container-content .content-info-pkm').classList.add('active');
    }

    if(document.querySelector('.container-content .content-info-pkm .name-pkm img')){
        document.querySelector('.container-content .content-info-pkm .name-pkm img').attributes.src.nodeValue = icon;
    }

    if(document.querySelector('.container-content .content-1 .figure-pkm img')){
        document.querySelector('.container-content .content-1 .figure-pkm img').attributes.src.nodeValue = img;
        document.querySelector('.container-content .content-1 .figure-pkm').classList.add('active');
    }

    if(document.querySelector('.container-content .content-1')){
        document.querySelector('.container-content .content-1').classList.add('active');
    }

    if(document.querySelector('.container-content .content-2')){
        document.querySelector('.container-content .content-2').classList.remove('active');
        document.querySelector('.container-content .content-2 .card .card-content-2').classList.remove('active');
    }

    Pokemon.forEach((i)=>{
        if(i.n === n){
            PokemonOponente.setAtk(i.status.ataque);
            PokemonOponente.setDef(i.status.defesa);
            PokemonOponente.setAtkSp(i.status.sp_ataque);
            PokemonOponente.setDefSp(i.status.sp_defesa);
            PokemonOponente.setSpd(i.status.velocidade);
            PokemonOponente.setHp(i.status.hp*100);
            PokemonOponente.setHpMax(i.status.hp*100);
            PokemonOponente.setMove1(move1);
            PokemonOponente.setMove2(move2);
            PokemonOponente.setNome(i.nome);


            updateBarHP();

            return

        }
    })

    DisabledComandBattle();
}

const randomPkm = () =>{
    
    document.querySelector('.container-content .content-1').classList.remove('active');
    document.querySelector('.container-content .content-1 .figure-pkm').classList.remove('active');
    document.querySelector('.container-content .content-info-pkm').classList.remove('active');

    document.querySelector('.container-content .content-2').classList.remove('active');
    document.querySelector('.container-content .content-2 .card .card-content-2').classList.remove('active');
    document.querySelector('.container-content .content-2 .card .card-content-1').classList.remove('active');
    



    setTimeout(()=>{
        let n = Math.random() * (100 - 1) + 1;

        if (n >= 1 && n <= 20){
            Pokemon.forEach((i)=>{
                if(i.n === PokemonSelvagens[0].Pokemon){
                    loadingPkmSelvagem(i.img, `./img/icone/pkm/gen1/${i.n}.png`, i.nome, i.n, PokemonSelvagens[0].Moves.move1, PokemonSelvagens[0].Moves.move2);
                }
            })
        }
        else if(n >= 21 && n <= 25){
            Pokemon.forEach((i)=>{
                if(i.n === PokemonSelvagens[1].Pokemon){
                    loadingPkmSelvagem(i.img, `./img/icone/pkm/gen1/${i.n}.png`, i.nome, i.n, PokemonSelvagens[1].Moves.move1, PokemonSelvagens[1].Moves.move2);
                }
            })
        }
        else if(n >= 26 && n <= 28){
            Pokemon.forEach((i)=>{
                if(i.n === PokemonSelvagens[2].Pokemon){
                    loadingPkmSelvagem(i.img, `./img/icone/pkm/gen1/${i.n}.png`, i.nome, i.n, PokemonSelvagens[2].Moves.move1, PokemonSelvagens[2].Moves.move2);
                }
            })
        }
        else{
            document.querySelector('.container-content .content-1').classList.remove('active');
            document.querySelector('.container-content .content-1 .figure-pkm').classList.remove('active');
            document.querySelector('.container-content .content-info-pkm').classList.remove('active');

            document.querySelector('.container-content .content-2').classList.add('active');
            document.querySelector('.container-content .content-2 .card .card-content-2').classList.add('active');
            document.querySelector('.container-content .content-2 .card .card-content-1').classList.add('active');

            EnableComandBattle();
        }
    }, 500);
}


const updateBarHP = () =>{

    //Atualizando o seu HP
    let hp = PokemonPrincipal.getHp();
    let hpMax = PokemonPrincipal.getHpMax();
    let total = (hp*100)/hpMax;

    let k = document.querySelector('.battle .container-header .your-status .hp span');
    k.style.width = `${total}%`;

    if (total >= 50 && total <= 100){
        k.style.backgroundColor = 'green';
    }else if(total >= 20 && total < 50){
        k.style.backgroundColor = 'yellow';
    }else if(total < 20){
        k.style.backgroundColor = 'red';
    }

    //Atualizando o HP do oponente
    let hp2 = PokemonOponente.getHp();
    let hpMax2 = PokemonOponente.getHpMax();
    let total2 = (hp2*100)/hpMax2;
    
    let k2 = document.querySelector('.battle .container-content .content-1 .content-info-pkm .content-hp .hp span');
    k2.style.width = `${total2}%`;

    if (total2 >= 50){
        k2.style.backgroundColor = 'green';
    }else if(total2 >= 20 && total2 < 50){
        k2.style.backgroundColor = 'yellow';
    }else if(total2 < 20){
        k2.style.backgroundColor = 'red';
    }
}

const yourHPZero = () =>{
    //console.log('entrei');
    EnableComandBattle();
    //DisabledComandBattle();
    document.getElementById('bt-Explore').disabled = true;

    
    document.querySelector('.container-content .content-2').classList.remove('active');
    document.querySelector('.container-content .content-2 .card .card-content-2').classList.remove('active');
    document.querySelector('.container-content .content-1').classList.remove('active');
    document.querySelector('.container-content .content-1 .figure-pkm').classList.remove('active');
    document.querySelector('.container-content .content-info-pkm').classList.remove('active');
    document.querySelector('.container-content .content-4').classList.remove('active');

    document.querySelector('.container-content .content-3').classList.add('active');

}

const hpOponentZero = () =>{
    EnableComandBattle();

    document.getElementById('bt-Explore').disabled = true;

    
    document.querySelector('.container-content .content-2').classList.remove('active');
    document.querySelector('.container-content .content-2 .card .card-content-2').classList.remove('active');
    document.querySelector('.container-content .content-1').classList.remove('active');
    document.querySelector('.container-content .content-1 .figure-pkm').classList.remove('active');
    document.querySelector('.container-content .content-info-pkm').classList.remove('active');
    document.querySelector('.container-content .content-3').classList.remove('active');

    document.querySelector('.container-content .content-4').classList.add('active');
}


const speakProf = (moveName, dano, usuario, pkmname) =>{
    let ballonDialog = document.querySelector('.dialog-balloon .container-balloon .content-2 .box-dialog .text');
    ballonDialog.innerHTML+=`<p><span>${pkmname}</span> do(a) ${usuario} usou <span>${moveName}</span> causando ${dano} de dano</p>`;
    ballonDialog.scrollTop = ballonDialog.scrollHeight;
}

const resetSpeakProf = () =>{
    document.querySelector('.dialog-balloon .container-balloon .content-2 .box-dialog .text').innerHTML = ""; 
}

const breakSpeakProf = () =>{
    document.querySelector('.dialog-balloon .container-balloon .content-2 .box-dialog .text').innerHTML += "<br />";
}

const useMove = (moveAttack) =>{
    let probabilidade = Move[moveAttack].porcentagem;
    let sorte = Math.random() * (100 - 1) + 1;
    
    let hp;

    if(sorte <= probabilidade || probabilidade === -1){
        let dano;
        let def;
        let categoria = Move[moveAttack].categoria;
        let nome = Move[moveAttack].nome;
        

        if(categoria === 'Especial'){
            dano = Move[moveAttack].poder + PokemonPrincipal.getAtkSp();
            hp = PokemonOponente.getHp();
            def = PokemonOponente.getDefSp();
            
            dano -= def;
            if (dano < 0){
                dano = 0;
            }

            hp -= dano;
            if(hp <= 0){
                hp = 0;


            }

            PokemonOponente.setHp(hp);
            speakProf(nome, dano, "Voc??", PokemonPrincipal.getNome());
        }
        else if(categoria === 'F??sico'){
            dano = Move[moveAttack].poder + PokemonPrincipal.getAtk();
            hp = PokemonOponente.getHp();
            def = PokemonOponente.getDef();
            
            dano -= def;
            if (dano < 0){
                dano = 0;
            }

            hp -= dano;
            if(hp <= 0){
                hp = 0;
            }

            PokemonOponente.setHp(hp);
            speakProf(nome, dano, "Voc??", PokemonPrincipal.getNome());
        }

        
        //DisabledComandBattle();
        EnableComandBattle();

        document.querySelector('.container-content .content-1 .figure-pkm img').classList.add('is_attack');


    }

    setTimeout(()=>{
        document.querySelector('.container-content .content-1 .figure-pkm img').classList.remove('is_attack');
        DisabledComandBattle();

        if(hp <= 0){
            hpOponentZero();
        }



        let moveSorte = (Math.random() * (3 - 1) + 1).toFixed(0);

        if(Number(moveSorte) === 1){
            let probabilidade2 = Move[PokemonOponente.move1].porcentagem;
            let sorte2 = Math.random() * (100 - 1) + 1;

            if(sorte2 <= probabilidade2 || probabilidade2 === -1){
                let dano2;
                let hp2;
                let def2;
                let categoria2 = Move[PokemonOponente.move1].categoria;
                let nome2 = Move[PokemonOponente.move1].nome;

                if(categoria2 === 'Especial'){
                    dano2 = Move[PokemonOponente.move1].poder + PokemonOponente.getAtkSp();
                    hp2 = PokemonPrincipal.getHp();
                    def2 = PokemonPrincipal.getDefSp();
                    
                    dano2 -= def2;
                    if (dano2 < 0){
                        dano2 = 0;
                    }
        
                    hp2 -= dano2;
                    if(hp2 <= 0){
                        hp2 = 0;
                        yourHPZero();
                    }
        
                    PokemonPrincipal.setHp(hp2);
                    speakProf(nome2, dano2, "Oponente", PokemonOponente.getNome());
                }
                else if(categoria2 === 'F??sico'){
                    dano2 = Move[PokemonOponente.move1].poder + PokemonOponente.getAtk();
                    hp2 = PokemonPrincipal.getHp();
                    def2 = PokemonPrincipal.getDef();
                    
                    dano2 -= def2;
                    if (dano2 < 0){
                        dano2 = 0;
                    }
        
                    hp2 -= dano2;
                    if(hp2 <= 0){
                        hp2 = 0;
                        yourHPZero();
                        
                    }
        
                    PokemonPrincipal.setHp(hp2);
                    speakProf(nome2, dano2, "Oponente", PokemonOponente.getNome());
                }

            }
        }
        else if(Number(moveSorte) === 2){
            let probabilidade2 = Move[PokemonOponente.move2].porcentagem;
            let sorte2 = Math.random() * (100 - 1) + 1;

            if(sorte2 <= probabilidade2 || probabilidade2 === -1){
                let dano2;
                let hp2;
                let def2;
                let categoria2 = Move[PokemonOponente.move2].categoria;
                let nome2 = Move[PokemonOponente.move2].nome;

                if(categoria2 === 'Especial'){
                    dano2 = Move[PokemonOponente.move2].poder + PokemonOponente.getAtkSp();
                    hp2 = PokemonPrincipal.getHp();
                    def2 = PokemonPrincipal.getDefSp();
                    
                    dano2 -= def2;
                    if (dano2 < 0){
                        dano2 = 0;
                    }
        
                    hp2 -= dano2;
                    if(hp2 <= 0){
                        hp2 = 0;
                        yourHPZero();
                    }
        
                    PokemonPrincipal.setHp(hp2);
                    speakProf(nome2, dano2, "Oponente", PokemonOponente.getNome());
                }
                else if(categoria2 === 'F??sico'){
                    dano2 = Move[PokemonOponente.move2].poder + PokemonOponente.getAtk();
                    hp2 = PokemonPrincipal.getHp();
                    def2 = PokemonPrincipal.getDef();
                    
                    dano2 -= def2;
                    if (dano2 < 0){
                        dano2 = 0;
                    }
        
                    hp2 -= dano2;
                    if(hp2 <= 0){
                        hp2 = 0;
                        yourHPZero();
                    }
        
                    PokemonPrincipal.setHp(hp2);
                    speakProf(nome2, dano2, "Oponente", PokemonOponente.getNome());
                }

            }
        }

        


        updateBarHP();
        breakSpeakProf();



    },1000);
}


loadingScreen();
updateBarHP();
randomPkm();

document.getElementById('bt-Explore').addEventListener('click', randomPkm);

document.getElementById('move-1').addEventListener('click', () => useMove(PokemonPrincipal.move_1));
document.getElementById('move-2').addEventListener('click', () => useMove(PokemonPrincipal.move_2));


document.getElementById('bt-next-pkm').addEventListener('click', ()=>{
    DisabledComandBattle();

    document.getElementById('bt-Explore').disabled = false;


    document.querySelector('.container-content .content-4').classList.remove('active');
    randomPkm();
    resetSpeakProf();


});

document.getElementById('bt-heal').addEventListener('click', ()=>{
    DisabledComandBattle();

    document.getElementById('bt-Explore').disabled = false;

    document.querySelector('.container-content .content-3').classList.remove('active');
    PokemonPrincipal.setHp(PokemonPrincipal.getHpMax());

    updateBarHP();
    randomPkm();
    resetSpeakProf();
});


document.getElementById('Vulpix').addEventListener("click", () =>{
    PokemonPrincipal.setPokemon(37);
    PokemonPrincipal.setMoves(6, 7);

    document.getElementById('Vulpix').classList.add('active');
    document.getElementById('Psyduck').classList.remove('active');
    document.getElementById('Eevee').classList.remove('active');

    loadingScreen();
});

document.getElementById('Eevee').addEventListener("click", () =>{
    PokemonPrincipal.setPokemon(133);
    PokemonPrincipal.setMoves(0, 1);

    document.getElementById('Vulpix').classList.remove('active');
    document.getElementById('Psyduck').classList.remove('active');
    document.getElementById('Eevee').classList.add('active');
    
    loadingScreen();
});

document.getElementById('Psyduck').addEventListener("click", () =>{
    PokemonPrincipal.setPokemon(54);
    PokemonPrincipal.setMoves(8, 3);

    document.getElementById('Psyduck').classList.add('active');
    document.getElementById('Vulpix').classList.remove('active');
    document.getElementById('Eevee').classList.remove('active');
    
    loadingScreen();
})


