 const readlineSync = require('readline-sync')

// console.log(readlineSync)
// // note readlineSync is an object of methods

// let answer = readlineSync.keyInYN('Do you like tacos with nutella');

// let crazy;

// if(answer){
//    crazy = readlineSync.keyInYN('Are you cray cray?')
// } else {
//     console.log('bye')
// } if(crazy){
//     console.log('Me too')
// }

 const states = [ 'califonia', 'oregon', 'wyoming', 'florida', 'hawaii', 'delaware', 'new jersey', 'north dakota']
// let index = readlineSync.keyInSelect(states, 'what state should we sell to cananda?');
// console.log(states[index])

let gameOver = false

while(!gameOver){
    let index = readlineSync.keyInSelect(states, 'which state should we sell to canada?');
    if(states[index] !== 'florida'){
        console.log('wrong answer, guess again')
        console.log(`sorry yo, i dont think it would be a good idea to sell ${states[index]}`);
    } else {
        gameOver = true
        console.log('good idea! good bye')
    }
}