'use strict'
console.log('//////////////1/////////////////');

const hello1 = function () {
    console.log('Привіт, Java Script!');
}

hello1();

console.log('//////////////2/////////////////');

function hello2(name = prompt('Введіть Ваше ім"я, будь ласка.')) {
    console.log(`Привіт, ${name}!`);
}

hello2();

console.log('//////////////3/////////////////');

function mul(n = +prompt('Введіть число.'), m = +prompt('Введіть число.')) {
    return console.log(`Добуток чисел ${n} + ${m}:`, n * m, ', сума:', n + m, ', різниця:', n - m , '.');
}

mul()

console.log('//////////////4/////////////////');

const myNewArrowFunction = (...mes) => {
   return console.log(mes);
}

myNewArrowFunction(1, 2, 3);
myNewArrowFunction(100, 200, 300, 400, 500);
myNewArrowFunction("JS", "Python", "Java", "PHP", "C++");

console.log('//////////////5/////////////////');
const marks = [93, 99, 93, 96];
const myAverageScore = function (...marks) {
    let totalMarks = 0;
    let lastMark;
    for (const total of  arguments) {
        totalMarks += total;
    };

    lastMark = totalMarks / marks.length;
    if (lastMark <= 100 && lastMark >= 91) {
         console.log('My average score: A');
    } else if (lastMark <= 90 && lastMark >= 81) {
         console.log('My average score: B');
    } else if (lastMark <= 80 && lastMark >= 71) {
         console.log('My average score: C');
    } else if (lastMark <= 70) {
         console.log('My average score: D');
    };
};

myAverageScore(...marks) 