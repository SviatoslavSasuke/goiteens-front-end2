'use strict'
//1///
const num = prompt('Введіть число');

if (num) {
    if ((!Number.isNaN(1 * num)) && (num >= 55) && (num <= 99)) {
      console.log('Число попадає в діапазон!');
  }
    
  else {
      console.log('Число не попадає в діапазон!');
  }
}

console.log('//////////////////////////');
///2///
const ageMaxim = 55

if (ageMaxim) {
    if ((!Number.isNaN(1 * ageMaxim)) && (ageMaxim > 0)) {

        if (ageMaxim < 16) {
            console.log('Дитина');
        } else if (ageMaxim >= 18 || ageMaxim < 60) {
            console.log('Дорослий');
        }
        else if (ageMaxim >= 61 || ageMaxim < 99) {
            console.log('Старий');
        }
    }
}
if (ageMaxim) alert('Максим, якому 55 років - ' + ageMaxim);
console.log('//////////////////////////')
 ///3/// 
 const yourName = prompt('Введіть своє імя');
 const yourFamily = prompt('Введіть свою фамілію')
 
 if (yourName && yourFamily) {

    if (yourName.length > 4 && yourFamily.length > 5) {
         alert('В вашому імені' + ' - ' + yourName.length + 'букв. В вашій фамілії - ' + yourFamily.length + ' ' + 'букв.');
        console.log((yourName + ' - ' + yourName.length + ' ' + 'букв.'));
    }else{
           alert('УПС!');
           console.log('УПС!');
    }
 }

 
 ///4///
 console.log('//////////////////////////');
 
 let random = Math.random() * (5 - 1) + 1;
 console.log(random);

if(random) {
    if (random >= 1 && random < 2){
        alert('Це число 1!');
    }
    if (random >= 2 && random < 3){
        alert('Це число 2!');
    }
    if (random >= 3 &&  random < 4){
        alert('Це число 3!');
    }
    if (random >= 4 &&  random < 5){
        alert('Це число 4!');
    }
    if (random >= 5 && random < 6){
        alert('Це число 5!');
    }
    else{
        console.log(random)
    }
}



///5///
console.log('/////////////////////////')
 

let langSub =  prompt('Ведіть назву мови => "eng, ua, fr, ru"');
langSub =  langSub ? langSub.toLowerCase() : false;



switch (langSub) {
    case 'eng':
        console.log('English - Tie');
        break;
        

    case 'ua':
        console.log('Українська - Сало ');
        break;
        

    case 'fr':
        console.log('France - Janvier ');
        break;

    case 'ru':
        console.log('Русский - Вodka');
        break;
        

    default:
        console.log('Хто ви?');   
}