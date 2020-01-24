// THIS IS THE DATABASE
// STATE
var gameState = {
    userPokemon: '',
    rivalPokemon: '',
    pokemonDB: [{
            name: 'charmander',
            type: 'fire',
            hp: 39,
            attack: 52,
            defense: 43,
            level: 1,
            img: 'http://www.smogon.com/dex/media/sprites/xy/charmander.gif'
        },
        {
            name: 'bulbasaur',
            type: 'grass',
            hp: 45,
            attack: 49,
            defense: 49,
            level: 1,
            img: 'http://www.smogon.com/dex/media/sprites/xy/bulbasaur.gif'
        },
        {
            name: 'squirtle',
            type: 'water',
            hp: 44,
            attack: 48,
            defense: 65,
            level: 1,
            img: 'http://www.smogon.com/dex/media/sprites/xy/squirtle.gif'
        },
    ],
    elements: {
        pokemonEl: document.querySelector('.select-screen').querySelectorAll('.character'),
        battleScreenEl: document.getElementById('battle-screen'),
        attackBtnsEl: document.getElementById('battle-screen').querySelectorAll('.attack')
    },
    init: function(){
        console.log(gameState.elements.attackBtnsEl)


    var i = 0;

    //THIS IS INTIAL LOOP
    while (i < gameState.elements.pokemonEl.length) {
        //add function to all characters on screen select
        gameState.elements.pokemonEl[i].onclick = function () {
        //current selected pokemon name
        var pokemonName = this.dataset.pokemon
        //elements for imgs on battle screen
        var player1Img = document.querySelector('.player1').getElementsByTagName('img')
        var player2Img = document.querySelector('.player2').getElementsByTagName('img')
        // we save current pokemon
        gameState.userPokemon = pokemonName

        //cpu picks a pokemon
        gameState.cpuPick()

        //change screen to battle screen
        gameState.elements.battleScreenEl.classList.toggle('active')

        //select data from current user pokemon
        gameState.currentPokemon = gameState.pokemonDB.filter(function (pokemon) {
            return pokemon.name == gameState.userPokemon
        })
        player1Img[0].src = gameState.currentPokemon[0].img

        //select data from current cpu pokemon
        gameState.currentRivalPokemon = gameState.pokemonDB.filter(function (pokemon) {
            return pokemon.name == gameState.rivalPokemon
        })
        player2Img[0].src = gameState.currentRivalPokemon[0].img

        //current user and cpu pokemon intial health
        gameState.currentPokemon[0].health = gameState.calculateInitialHealth(gameState.currentPokemon)
        gameState.currentRivalPokemon[0].health = gameState.calculateInitialHealth(gameState.currentRivalPokemon)


        console.log(gameState)

    }
    i++
        }
        var a = 0
        while (a < gameState.elements.attackBtnsEl.length) {
            gameState.elements.attackBtnsEl[a].onclick = function () {
                var attackName = this.dataset.attack
                gameState.currentUserAttack = attackName

                gameState.play(attackName, gameState.cpuAttack)

            }
            a++
        }
    },
    cpuAttack: function () {
        attacks: ['rock', 'paper', 'scissors']
    
        return attacks[gameState.randomNumber(0, 3)]
    },
    calculateInitialHealth: function (user) {
        return ((0.20 * Math.sqrt(user[0].level)) * user[0].defense) * user[0].hp
    },
    attackMove:function (attack, level, stack, critical, enemy, attacker) {
        console.log(enemy.name + ' health before: ' + enemy.health)
        attackAmount: ((attack * level) * (stack * critical))
        enemy.health = enemy.health - attackAmount
        gameState.checkWinner(enemy, attacker)
        console.log(enemy.name + ' health after: ' + enemy.health)
    },
    checkWinner: function (enemy, attacker) {
        if (enemy.health <= 0) {
            console.log('HEY WINNER WINNER CHICKEN DINNER' + attacker.name)
        }
    },
    randomNumber: function(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    },
    cpuPick: function() {
        gameState.rivalPokemon = gameState.elements.pokemonEl[gameState.randomNumber(0, 3)].dataset.pokemon
    },
    play: function (userAttack, cpuAttack) {
        currentPokemon: gameState.currentPokemon[0]
        currentRivalPokemon: gameState.currentRivalPokemon[0]
        switch (userAttack) {
            case 'rock':
                if (cpuAttack == 'paper') {
                    if (currentPokemon.health >= 1 && currentRivalPokemon >= 1) {
                        //user
                        gameState.attackMove(currentPokemon.attack, currentPokemon.level, .8, .5, currentRivalPokemon, currentPokemon)
                        if (currentRivalPokemon.health >= 1) {
                            //cpu
                            gameState.attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, .8, 2, currentPokemon, currentRivalPokemon)
                        }
                    }
                }
                if (cpuAttack == 'scissors') {
                    if (currentPokemon.health >= 1 && currentRivalPokemon >= 1) {
                        //user
                        gameState.attackMove(currentPokemon.attack, currentPokemon.level, .8, 2, currentRivalPokemon, currentPokemon)
                        if (currentRivalPokemon.health >= 1) {
                            //cpu
                            gameState.attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, .8, .5, currentPokemon, currentRivalPokemon)
                        }
                    }
                }
                if (cpuAttack == 'rock') {
                    if (currentPokemon.health >= 1 && currentRivalPokemon >= 1) {
                        //user
                        gameState.attackMove(currentPokemon.attack, currentPokemon.level, .8, .1, currentRivalPokemon, currentPokemon)
                        if (currentRivalPokemon.health >= 1) {
                            //cpu
                            gameState.attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, .8, 1, currentPokemon, currentRivalPokemon)
                        }
                    }
                }

                break;
            case 'paper':
                if (cpuAttack == 'paper') {
                    if (currentPokemon.health >= 1 && currentRivalPokemon >= 1) {
                        //user
                        gameState.attackMove(currentPokemon.attack, currentPokemon.level, .8, 1, currentRivalPokemon, currentPokemon)
                        if (currentRivalPokemon.health >= 1) {
                            //cpu
                            gameState.attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, .8, 1, currentPokemon, currentRivalPokemon)
                        }
                    }
                }
                if (cpuAttack == 'scissors') {
                    if (currentPokemon.health >= 1 && currentRivalPokemon >= 1) {
                        //user
                        gameState.attackMove(currentPokemon.attack, currentPokemon.level, .8, .5, currentRivalPokemon, currentPokemon)
                        if (currentRivalPokemon.health >= 1) {
                            //cpu
                            gameState.attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, .8, 2, currentPokemon, currentRivalPokemon)
                        }
                    }
                }
                if (cpuAttack == 'rock') {
                    if (currentPokemon.health >= 1 && currentRivalPokemon >= 1) {
                        //user
                        gameState.attackMove(currentPokemon.attack, currentPokemon.level, .8, 2, currentRivalPokemon, currentPokemon)
                        if (currentRivalPokemon.health >= 1) {
                            //cpu
                            gameState.attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, .8, 5, currentPokemon, currentRivalPokemon)
                        }
                    }
                }
                break;
            case 'scissors':
                if (cpuAttack == 'paper') {
                    if (currentPokemon.health >= 1 && currentRivalPokemon >= 1) {
                        //user
                        gameState.attackMove(currentPokemon.attack, currentPokemon.level, .8, 2, currentRivalPokemon, currentPokemon)
                        if (currentRivalPokemon.health >= 1) {
                            //cpu
                            gameState.attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, .8, .5, currentPokemon, currentRivalPokemon)
                        }
                    }
                }
                if (cpuAttack == 'scissors') {
                    if (currentPokemon.health >= 1 && currentRivalPokemon >= 1) {
                        //user
                        gameState.attackMove(currentPokemon.attack, currentPokemon.level, .8, 1, currentRivalPokemon, currentPokemon)
                        if (currentRivalPokemon.health >= 1) {
                            //cpu
                            gameState.attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, .8, 1, currentPokemon, currentRivalPokemon)
                        }
                    }
                }
                if (cpuAttack == 'rock') {
                    if (currentPokemon.health >= 1 && currentRivalPokemon >= 1) {
                        //user
                        gameState.attackMove(currentPokemon.attack, currentPokemon.level, .8, .5, currentRivalPokemon, currentPokemon)
                        if (currentRivalPokemon.health >= 1) {
                            //cpu
                            gameState.attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, .8, 2, currentPokemon, currentRivalPokemon)
                        }
                    }
                }
                break;
        }
    }
};
gameState.init()


