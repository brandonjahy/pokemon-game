
// THIS IS THE DATABASE
// STATE
var gameState = {
    userPokemon: '',
    rivalPokemon: '',
    pokemonDB: [
        {
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
        
      ]
}
console.log(gameState)

//ELEMENTS
var pokemonEl = document.querySelector('.select-screen').querySelectorAll('.character')
console.log(pokemonEl)
var battleScreenEl = document.getElementById('battle-screen')
var attackBtnsEl = document.getElementById('battle-screen').querySelectorAll('.attack')
console.log(attackBtnsEl)


var i = 0;

//THIS IS INTIAL LOOP
while (i < pokemonEl.length) {
    //add function to all characters on screen select
    pokemonEl[i].onclick = function() {
        //current selected pokemon name
        var pokemonName = this.dataset.pokemon
        //elements for imgs on battle screen
        var player1Img = document.querySelector('.player1').getElementsByTagName('img')
        var player2Img = document.querySelector('.player2').getElementsByTagName('img')
        // we save current pokemon
        gameState.userPokemon = pokemonName

        //cpu picks a pokemon
        cpuPick()

        //change screen to battle screen
        battleScreenEl.classList.toggle('active')

        //select data from current user pokemon
        gameState.currentPokemon = gameState.pokemon.filter(function(pokemon){
            return pokemon.name == gameState.userPokemon
        })
        player1Img[0].src = gameState.currentPokemon[0].img

        //select data from current cpu pokemon
        gameState.currentRivalPokemon = gameState.pokemon.filter(function(pokemon){
            return pokemon.name == gameState.rivalPokemon
        })
        player2Img[0].src = gameState.currentRivalPokemon[0].img

        //current user and cpu pokemon intial health
        gameState.currentPokemon[0].health = calculateInitialHealth(gameState.currentPokemon)
        gameState.currentRivalPokemon[0].health = calculateInitialHealth(gameState.currentRivalPokemon)


        console.log(gameState)
      
    } 
    i++
}

var a = 0
while (a < attackBtnsEl.length) {
    attackBtnsEl[a].onclick = function() {
        var attackName = this.dataset.attack
        gameState.currentUserAttack = attackName
        
        play(attackName, cpuAttack())
        
    }
    a++
}

var cpuAttack = function() {
    var attacks = ['rock', 'paper', 'scissors']

    return attacks[randomNumber(0,3)]
}

var calculateInitialHealth = function(user) {
   return ((0.20 * Math.sqrt(user[0].level)) * user[0].defense) * user[0].hp
}

var attackMove = function(attack, level, stack, critical, enemy, attacker){
    console.log(enemy.name + ' health before: ' + enemy.health)
    var attackAmount = ((attack * level ) * (stack * critical))
    enemy.health = enemy.health - attackAmount
    checkWinner(enemy, attacker)
    console.log(enemy.name + ' health after: ' + enemy.health)
}
var checkWinner = function(enemy, attacker) {
    if (enemy.health <= 0){
        console.log('HEY WINNER WINNER CHICKEN DINNER' + attacker.name)
    }
}



var play = function(userAttack, cpuAttack){
    var currentPokemon = gameState.currentPokemon[0]
    var currentRivalPokemon = gameState.currentRivalPokemon[0]
    switch(userAttack) {
        case 'rock':
            if(cpuAttack == 'paper'){
                if (currentPokemon.health >= 1 && currentRivalPokemon >= 1) {
                    //user
                    attackMove(currentPokemon.attack, currentPokemon.level, .8, .5, currentRivalPokemon, currentPokemon)
                    if (currentRivalPokemon.health >= 1) {
                    //cpu
                    attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, .8, 2, currentPokemon, currentRivalPokemon)
                    }
                }
            }
            if(cpuAttack == 'scissors') {
                if (currentPokemon.health >= 1 && currentRivalPokemon >= 1) {
                    //user
                    attackMove(currentPokemon.attack, currentPokemon.level, .8, 2, currentRivalPokemon, currentPokemon)
                    if (currentRivalPokemon.health >= 1) {
                    //cpu
                    attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, .8, .5, currentPokemon, currentRivalPokemon)
                 }
                }
            }
            if(cpuAttack == 'rock') {
                if (currentPokemon.health >= 1 && currentRivalPokemon >= 1) {
                    //user
                    attackMove(currentPokemon.attack, currentPokemon.level, .8, .1, currentRivalPokemon, currentPokemon)
                    if (currentRivalPokemon.health >= 1) {
                    //cpu
                    attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, .8, 1, currentPokemon, currentRivalPokemon)
                    }
                }
            }
          
          break;
        case 'paper':
            if(cpuAttack == 'paper'){
                if (currentPokemon.health >= 1 && currentRivalPokemon >= 1) {
                    //user
                    attackMove(currentPokemon.attack, currentPokemon.level, .8, 1, currentRivalPokemon, currentPokemon)
                    if (currentRivalPokemon.health >= 1) {
                    //cpu
                    attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, .8, 1, currentPokemon, currentRivalPokemon)
                    }
                }
            }
            if(cpuAttack == 'scissors') {
                if (currentPokemon.health >= 1 && currentRivalPokemon >= 1) {
                    //user
                    attackMove(currentPokemon.attack, currentPokemon.level, .8, .5, currentRivalPokemon, currentPokemon)
                    if (currentRivalPokemon.health >= 1) {
                    //cpu
                    attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, .8, 2, currentPokemon, currentRivalPokemon)
                    }
                }
            }
            if(cpuAttack == 'rock') {
                if (currentPokemon.health >= 1 && currentRivalPokemon >= 1) {
                    //user
                    attackMove(currentPokemon.attack, currentPokemon.level, .8, 2, currentRivalPokemon, currentPokemon)
                    if (currentRivalPokemon.health >= 1) {
                    //cpu
                    attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, .8, 5, currentPokemon, currentRivalPokemon)
                    }
                }
            }
          break;
        case 'scissors':
            if(cpuAttack == 'paper'){
                if (currentPokemon.health >= 1 && currentRivalPokemon >= 1) {
                    //user
                    attackMove(currentPokemon.attack, currentPokemon.level, .8, 2, currentRivalPokemon, currentPokemon)
                    if (currentRivalPokemon.health >= 1) {
                    //cpu
                    attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, .8, .5, currentPokemon, currentRivalPokemon)
                    }
                }
            }
            if(cpuAttack == 'scissors') {
                if (currentPokemon.health >= 1 && currentRivalPokemon >= 1) {
                    //user
                    attackMove(currentPokemon.attack, currentPokemon.level, .8, 1, currentRivalPokemon, currentPokemon)
                    if (currentRivalPokemon.health >= 1) {
                    //cpu
                    attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, .8, 1, currentPokemon, currentRivalPokemon)
                    }
                }
            }
            if(cpuAttack == 'rock') {
                if (currentPokemon.health >= 1 && currentRivalPokemon >= 1) {
                    //user
                    attackMove(currentPokemon.attack, currentPokemon.level, .8, .5, currentRivalPokemon, currentPokemon)
                    if (currentRivalPokemon.health >= 1) {
                    //cpu
                    attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, .8, 2, currentPokemon, currentRivalPokemon)
                    }
                }
            }
          break;
      }
}

var randomNumber = function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
var cpuPick = function cpuPick() {
    gameState.rivalPokemon = pokemonEl[randomNumber(0, 3)].dataset.pokemon
}

//user chooses attack


//cpu health goes down


//cpu attack


//user health goes down


//rock > scissors

//papper > rock

//scissors > paper
























// (function(modules) {
//     var installedModules = {};
//     function __webpack_require__(moduleId) {
//         if (installedModules[moduleId]) return installedModules[moduleId].exports;
//         var module = installedModules[moduleId] = {
//             i: moduleId,
//             l: false,
//             exports: {}
//         };
//         modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
//         module.l = true;
//         return module.exports;
//     }
//     __webpack_require__.m = modules;
//     __webpack_require__.c = installedModules;
//     __webpack_require__.d = function(exports, name, getter) {
//         if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
//             enumerable: true,
//             get: getter
//         });
//     };
//     __webpack_require__.r = function(exports) {
//         if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
//             value: "Module"
//         });
//         Object.defineProperty(exports, "__esModule", {
//             value: true
//         });
//     };
//     __webpack_require__.t = function(value, mode) {
//         if (1 & mode) value = __webpack_require__(value);
//         if (8 & mode) return value;
//         if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
//         var ns = Object.create(null);
//         __webpack_require__.r(ns);
//         Object.defineProperty(ns, "default", {
//             enumerable: true,
//             value: value
//         });
//         if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
//             return value[key];
//         }.bind(null, key));
//         return ns;
//     };
//     __webpack_require__.n = function(module) {
//         var getter = module && module.__esModule ? function() {
//             return module["default"];
//         } : function() {
//             return module;
//         };
//         __webpack_require__.d(getter, "a", getter);
//         return getter;
//     };
//     __webpack_require__.o = function(object, property) {
//         return Object.prototype.hasOwnProperty.call(object, property);
//     };
//     __webpack_require__.p = "";
//     return __webpack_require__(__webpack_require__.s = "./assets/js/main.js");
// })({
//     "./assets/js/main.js": function(module, exports) {
//         eval("if (navigator.serviceWorker) {\n  navigator.serviceWorker.register('/sw.js').then(function (registration) {// console.log(\n    // \t'ServiceWorker registration successful with scope:',\n    // \tregistration.scope\n    // );\n  }).catch(function (error) {\n    console.log('ServiceWorker registration failed:', error);\n  });\n}\n\n//# sourceURL=webpack:///./assets/js/main.js?");
//     }
// });