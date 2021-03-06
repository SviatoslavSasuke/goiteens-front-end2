'use strict'

console.log('////////////1////////////')

let num = 1;

while (num < 10) {
  console.log('counter: ', num);
  num++;
}


console.log('////////////2////////////')

for(let  i = 1; i <10; i++){
    const y = i % 2;
    if(y != 0){
      console.log(`Число непарне! - ${i}`);
    }else{
      console.log(`Число парне! - ${i}`);
    }
  }



console.log('////////////3////////////')


let numBer = 20;

while (numBer <= 28) {
   console.log('num: ', numBer);
   numBer++;
 }


console.log('////////////4////////////')


let lenghter = ''; 


for (let name = 'sviatik';;){
  name = prompt("Введіть ім'я улюбленого героя");
  lenghter = Number(name.length);
  if(lenghter<= 6){
    console.log(name);
  }else{
    console.log("Ім'я " + "перевищує ліміт символів");
    break
  }
  
 }