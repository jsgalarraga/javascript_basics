// Defining functions
function myFunc(param1, param2) {
    console.log(param1, param2);
}

myFunc(3, 'Hi')

// Global variable
var myGlobal = 10;

// Global variable inside function without var
function fun1() {
  otherGlobal = 5;
}

// Local var takes precedence over global
var outerWear = "T-Shirt";
function myOutfit() {
  var outerWear = 'sweater'
  return outerWear;
}
console.log(myOutfit());