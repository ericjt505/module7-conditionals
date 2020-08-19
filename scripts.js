// var select = document.querySelector('select');
// var para = document.querySelector('p');
//
// select .addEventListener('change', setWeather);
//
// //using switch statements
// function setWeather() {
//   var choice = select.value;
//
//   switch (choice) {
//     case 'sunny':
//     para.textContent = 'It is nice and sunny out. Go take a walk!';
//     break;
//
//     case 'rainy':
//     para.textContent = 'Better take an umbrella!';
//     break;
//
//     case 'snowing':
//     para.textContent = 'Better stay inside with some cocoa.';
//     break;
//
//     case 'overcast':
//     para.textContent = 'You may want to bring your raincoat just in case';
//     break;
//
//     default:
//     para.textContent = "";
//   }
// }

//ternary operators(condition) ? run this code : run this code instead

var select = document.querySelector('select');
var html = document.querySelector('html');

document.body.style.padding = '100px';

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.onchange = function(){
  (select.value === 'black') ?
  update('black', 'white') :
  update('white', 'black');
}
