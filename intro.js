
//VERY EASY
var x = 21;
var y = 8;

console.log(`The diffrence between `+ x +` and `+ y +` is 13.`);



//EASY
let hisName = `Chad`;
let herName = `Karen`;

// using ${this} will not work unless you use `, NOT THE QUOTATIONS. is on the ~ key
console.log(`The name ${hisName} is shorter than ${herName} by ${herName.length - hisName.length}`);



//MEDIUM
const entry = prompt('How are you feeling today?')

if (entry == entry.toUpperCase()) {
    console.log('No need to shout I can hear you just fine.');
} else if (entry == entry.toLowerCase()) {
    console.log('Speak up I cant hear you if you whisper.');

 /* else if (Number(entry)) {
    console.log('Not a valid entry. How am I supposed to respond to that?'); 
    // above is a failed attempt at pushing an error when the user inputs an integer */

} else {
    console.log('Glad to hear it! Thanks for not whispering or yelling.');
}



//HARD

//Addition
function add(n0, n1) {
    return n0 + n1
}

console.log(add(50, 32))

//Subtraction
function subtract(n0, n1) {
    return n0 - n1
}

console.log(subtract(67, 59))

//Multiplication
function multiply(n0, n1) {
    return n0 * n1
}

console.log(multiply(3, 9))

//Division
function divide(n0, n1) {
    return n0 / n1
}

console.log(divide(80, 10))



//VERY HARD
let num1 = prompt('Enter first integer: ')
let op = prompt('Chose an operator (addition = +,subtraction = -, multiplication = *, division = /): ')
let num2 = prompt('Enter second integer: ')

num1 = parseFloat(num1);
num2 = parseFloat(num2);

if (op == '+') {
    alert(`${num1} + ${num2} = ${add(num1, num2)}`);

} else if (op == '-') {
    alert(`${num1} - ${num2} = ${subtract(num1, num2)}`);

} else if (op == '*') {
    alert(`${num1} * ${num2} = ${multiply(num1, num2)}`);

} else if (op == '/') {
    alert(`${num1} / ${num2} = ${divide(num1, num2)}`);

}