// If-else
var var1 = 3
var var2 = '3'
if (var1 === var2){
    console.log('exactly')
} else if (var1 == var2){
    console.log('just equal')
} else {
    console.log('different')
}
// inequality
if (var1 !== var2){
    console.log('somehow different')
} else if (var1 != var2){
    console.log('very different')
} else {
    console.log('equal')
}

console.log('7' <= 7) //True

function check(num){
    if ((num > 5) && (num < 10)) {
        return "Yes";
    }
    return "No";
}

// Switch
var num = 8
switch (num) {
    case 1:
    case 2:
    case 3:
        console.log('1, 2 or 3');
        break;
    case 4:
        console.log(4);
        break;
    default:
        console.log('default');
        break;
  }