'use strict'
///1///
let userName = prompt("Як вас звуть? ");
console.log(userName);
///2///
const myAge = Number(prompt('Скільки вам років?'));
const friendAge = Number(prompt('Скільки вашому другу років?'));
const ourAge = alert('Вам та вашому другу = ' + (myAge + friendAge));

console.log(ourAge);
///3///
const a = 10;
const b = 7;
let numberThree = a * b;
console.log(numberThree);
///4///
const a1 = 5 + 3;
const a2 = 5 - 3;
const a3 = 5 * 3;
const a4 = 5/3;
const a5 = 5 + 3*2;
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);
///5///
const a6 = 5 % 3;      
const a7 = 3 % 5;      alert(a7);
const a8 = 5 +'3';     alert(a8);
const a9 = 3 +'5';     alert(a9);
const a10 = 75 + 'кг'; alert(a10);
alert(a6);
///6///
let height = 23;
let width = 10;
let c = height * width;
console.log(c)
///7///
let heightC = 10;
let DC = 4;

let v = 3.14 * ((DC / 2) ** 2) * heightC;

console.log(v);
///8///
const n = 3; //катет
const m = 4; //катет
let BC = 0; //гипотенуза
BC = (n ** 2) + Math.pow(m, 2);
console.log(BC);
