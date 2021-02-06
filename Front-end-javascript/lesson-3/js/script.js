///1
// Парсить з рядка ціле число
const kFirst = Number.parseInt('5px');
const kSecond = Number.parseInt('12djd334');
const kThird = Number.parseInt('12.45asdwe12');
const kFourth = Number.parseInt('qwqweeewq');

console.log(kFirst); // 5
console.log(kSecond); // 12
console.log(kThird); // 12
console.log(kFourth); // NaN
//2
const k1 = Number.parseFloat('5px');
const k2 = Number.parseFloat('12djd334');
const k3 = Number.parseFloat('12.45asdwe12');
const k4 = Number.parseFloat('qwqweeewq');

console.log(k1); // 5
console.log(k2); // 12
console.log(k3); // 12.46
console.log(k4); // NaN
//3
const ab = Math.min(2, 34, 99, 3, 22, 36, 733, 18);
console.log(ab);
const sd = Math.max(2, 34, 99, 3, 22, 36, 733, 18);
console.log(sd);
//4
const randomFirst = Math.random() * (19 - 3) + 3;
console.log(randomFirst);
//5
const result = 5+5+'5';
console.log(result);
//6
const email = 'svjatfil@gmail.com';
console.log('Чи містить ваша пошта @? = ' + email.includes('@'));
console.log('Длинна емейлу = ' + email.length);
//7
const myFirst = 'My ';
const mySecond = 'name ';
const myThird = 'is';
const fullName = myFirst + mySecond + myThird + ' Viktor' ;
console.log(fullName);
//8
const userName = prompt('Як тебе звуть?');
const payment = prompt('Який ви готови зробити внесок до нашої фірми?');
alert(`Дякуємо, ${userName}! До оплати ${payment} гривень.`)



