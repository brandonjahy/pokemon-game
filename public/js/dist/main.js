
var pokemonDB = [
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

var gameState = {
    userPokemon: '',
    rivalPokemon: ''
}
console.log(gameState)
var pokemonEl = document.querySelector('.select-screen').querySelectorAll('.character')
console.log(pokemonEl)
var battleScreenEl = document.getElementById('battle-screen')
var i = 0;
while (i < pokemonEl.length) {
    pokemonEl[i].onclick = function() {
        var pokemonName = this.dataset.pokemon
        var player1Img = document.querySelector('.player1').getElementsByTagName('img')
        var player2Img = document.querySelector('.player2').getElementsByTagName('img')
        
        gameState.userPokemon = pokemonName

        cpuPick()
        battleScreenEl.classList.toggle('active')

        var currentPokemon = pokemonDB.filter(function(pokemon){
            return pokemon.name == gameState.userPokemon
        })

        var currentRivalPokemon = pokemonDB.filter(function(pokemon){
            return pokemon.name == gameState.rivalPokemon
        })

        player1Img[0].src = currentPokemon[0].img
        player2Img[0].src = currentRivalPokemon[0].img

        console.log(currentPokemon)
    } 
    i++
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function cpuPick() {
    gameState.rivalPokemon = pokemonEl[randomNumber(0, 3)].dataset.pokemon
}







































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