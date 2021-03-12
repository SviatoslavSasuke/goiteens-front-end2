'use strict'

console.log('////////////////1///////////////')

let Arr1 = [1, 5, '4', 'hello'];
let Arr2 = [true, 2, {}, ['a'], 222];

console.log(Arr1[1] + Arr2[1]);


console.log('////////////////2///////////////')

console.log(Arr1);


console.log('////////////////3///////////////')

for (let Arr of Arr2) {
  console.log(Arr);
}


console.log('////////////////4///////////////')

const message = 'Welcome to Ukraine!';
let leters = message.split('');
console.log(leters.indexOf('l'));


console.log('////////////////5///////////////')

let style = [ 'Джаз', 'Блюз' ];

style.push('Рок-н-ролл');
console.log(style);

style.splice(1, 1, 'Класика',);
console.log(style);

let shift = style.shift();
console.log(shift);

style.unshift('Реn', 'Реrrі');
console.log(style);