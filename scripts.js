var select = document.querySelector('select');
var para = document.querySelector('p');

select .addEventListener('change', setWeather);

function setWeather() {
  var choice = select.value;

  if(choice==='sunny') {
    para.textContent = 'It is nice and sunny out. Go talk a walk in the park!'
  } else if(choice==='rainy') {
    para.textContent = 'Rain is falling, take an umbrella.'
  } else if(choice==='snowing') {
    para.textContent = 'Better stay inside with some cocoa.'
  } else if(choice==='overcast') {
    para.textContent= 'You may want to bring your raincoat just in case.'
  } else {
    para.textContent = ""
  }
}









/* conditional statements

var choice = BooleanValue (comparison operator)

if (condition) {
  code to run if condition is true
} else {
  runs some other code instead
}

var shoppingDone = false;

if (shoppingDone === true) {
  var childsAllowance = 10
} else {
  var childsAllowance = 5
}
*/
