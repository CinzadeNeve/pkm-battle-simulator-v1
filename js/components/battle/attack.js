const Attack = (PokemonPrincipal, PokemonOponente) =>{

    const useMove = (moveAttack) =>{
        let probabilidade = Move[moveAttack].porcentagem;
        let sorte = Math.random() * (100 - 1) + 1;
    
        if(sorte <= probabilidade || probabilidade === -1){
            let dano;
            let hp;
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
                speakProf(nome, dano, "Você", PokemonPrincipal.getNome());
            }
            else if(categoria === 'Físico'){
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
                speakProf(nome, dano, "Você", PokemonPrincipal.getNome());
            }
    
            
            //DisabledComandBattle();
            EnableComandBattle();
    
            document.querySelector('.container-content .content-1 .figure-pkm img').classList.add('is_attack');
        
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
                        else if(categoria2 === 'Físico'){
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
                        else if(categoria2 === 'Físico'){
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
    }



    document.getElementById('move-1').addEventListener('click', () => useMove(PokemonPrincipal.move_1));
    document.getElementById('move-2').addEventListener('click', () => useMove(PokemonPrincipal.move_2));

}

export default Attack;