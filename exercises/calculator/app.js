var readline = require("readline-sync")

var num1 = readline.question("Give me a number ")
var num2 = readline.question("Give me a second number")
var operation = readline.question("Would you like to add, sub, div, mult? ")
console.log('operation ', operation)
console.log(`num1 ${num1}, num2: ${num2}`);

if(operation === 'add'){
    console.log(addNums(num1, num2))
}else if(operation === 'sub'){
    console.log(subs(num1, num2))
}else if(operation === 'div'){
    console.log(divides(num1, num2))
}else if(operation === 'mult'){
    console.log(times(num1,num2))
}

function addNums(n, n2){
    console.log(`addNums() is running with ${n} and ${n2}`)
    return +n + +n2
}
// console.log(addNums(num1, num2))

function times(c,c2){
    console.log('times running with ' + num1 + ' and ' + num2)
    return +c * +c2
}
// console.log(times(3,2))

function divides(d,d2){
    return +d / +d2
}
// console.log(divides(10,2))

function subs(s,s2){
    return +s - +s2
}
// console.log(subs(5,2))
